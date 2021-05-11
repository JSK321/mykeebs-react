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

export function KeebProvider() {
    const [keebState, setKeebState] = useState(null)

    return (
        <div>

        </div>
    )
}
