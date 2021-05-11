// React
import React, { useContext, useState, } from 'react'
// API
import API from '../../utils/API'

const KeebContext = React.createContext()
const KeebData = React.createContext()

export function useKeebs() {
    return useContext(KeebContext)
}

export function useKeebData() {
    return useContext(KeebData)
}

export function KeebProvider({ children }) {
    const [keebState, setKeebState] = useState({
        keebs: []
    })

    function loadKeebInfo() {
        API.getAllKeebs().then(res => {
            setKeebState({
                keebs: res
            })
        })
    }

    return (
        <KeebContext.Provider value={keebState}>
            <KeebData.Provider value={loadKeebInfo}>
                {children}
            </KeebData.Provider>
        </KeebContext.Provider>
    )
}
