// React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// API
import API from '../../utils/API'
// Components
import KeebPhotoGallery from '../../components/KeebPhotoGallery'
// Contexts
import { useProfile, useProfileData } from '../../contexts/ProfileContext'

export default function KeebPhotosUpdatePage() {
    const profile = useProfile()
    const profileData = useProfileData()
    const [keeb, setKeeb] = useState(null)
    const [keebPhotos, setKeebPhotos] = useState({
        photos: []
    })

    const { id } = useParams()
    let uploadedPhotos = []

    useEffect(() => {
        profileData()
        fetchKeebData()
    }, [])

    function fetchKeebData() {
        // Get Keeb Info
        API.getOneKeeb(id).then(res => {
            setKeeb(res)
        })
        // Get Keeb Photos
        API.getAllPhotos(id).then(res => {
            setKeebPhotos({
                photos: res
            })
        })
    }
    // Opens Cloudinary Widget
    const showWidget = () => {
        myWidget.open()
    }
    // Cloudinary Widget
    const myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'jsk321',
        uploadPreset: 'keebs_setups'
    }, (error, result) => {
        if (!error && result && result.event === 'success') {
            let photo = {image: result.info.url, KeebId: id}
            API.uploadKeebPhotos(profile.token, photo).then(res => {
                uploadedPhotos.push(res)
                let allPhotos = keebPhotos.photos.concat(uploadedPhotos)
                setKeebPhotos({
                    photos: allPhotos
                })
            })
        }
    })

    const handleRemoveBtn = event => {
        event.preventDefault()
        let id = event.currentTarget.id
        API.deletePhoto(profile.token, id).then(res => {
            window.location.reload()
        })
    }

    return (
        <div>
            <KeebPhotoGallery
                keeb={keeb}
                photos={keebPhotos.photos}
                showWidget={showWidget}
                handleRemoveBtn={handleRemoveBtn}
            />
        </div>
    )
}
