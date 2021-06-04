const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://mykeebs-api.herokuapp.com"

const API = {
    // Log In function
    signIn: function (userData) {
        return fetch(`${URL_PREFIX}/api/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).catch(err => null)
    },
    // Create new User function
    createUser: function (userData) {
        return fetch(`${URL_PREFIX}/api/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Profile function
    getProfile: function (token) {
        return fetch(`${URL_PREFIX}/api/users/secretProfile`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve all Keebs function
    getAllKeebs: function () {
        return fetch(`${URL_PREFIX}/api/keebs`, {
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve one Keeb by id
    getOneKeeb: function (keebId) {
        return fetch(`${URL_PREFIX}/api/keebs/${keebId}`, {
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve one Keeb by name
    getKeeb: function (name) {
        return fetch(`${URL_PREFIX}/api/keebs/keeb/${name}`, {
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve all keeb parts function
    getAllParts: function () {
        return fetch(`${URL_PREFIX}/api/parts`, {
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve one Keeb Parts
    getOneParts: function (partId) {
        return fetch(`${URL_PREFIX}/api/parts/${partId}`, {
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve all Keeb Photos by keeb id
    getAllPhotos: function (KeebId) {
        return fetch(`${URL_PREFIX}/api/keebPhotos/${KeebId}`, {
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve all extra keysets
    getAllExtraKeysets: function () {
        return fetch(`${URL_PREFIX}/api/extras`, {
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve one extra keyset
    getOneKeyset: function (keysetId) {
        return fetch(`${URL_PREFIX}/api/extras/${keysetId}`, {
        }).then(res => res.json()).catch(err => null)
    },
    //Create new Keeb function
    createKeeb: function (token, keebData) {
        return fetch(`${URL_PREFIX}/api/keebs/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(keebData)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Create Parts function
    createParts: function (token, partsData) {
        return fetch(`${URL_PREFIX}/api/parts/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(partsData)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Upload Keeb Photos function
    uploadKeebPhotos: function (token, data,) {
        return fetch(`${URL_PREFIX}/api/keebPhotos`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Create Add Extra Keysets function
    createAddKeysets: function (token, keysetData) {
        return fetch(`${URL_PREFIX}/api/extras`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(keysetData)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Upload Image function
    uploadImage: function (imgData) {
        return fetch(`https://api.cloudinary.com/v1_1/jsk321/image/upload`, {
            method: 'POST',
            body: imgData
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Upload Audio function
    uploadAudio: function(audioFile) {
        return fetch(`https://api.cloudinary.com/v1_1/jsk321/raw/upload`, {
            method: "POST",
            body: audioFile
        }).then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error ("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Update User Function
    updateUser: function (id, token, name, email, password, profileImage) {
        return fetch(`${URL_PREFIX}/api/users/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                profileImage: profileImage
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },

    // Update Keeb function
    updateKeeb: function (id, token, color, plate, keebImage,) {
        return fetch(`${URL_PREFIX}/api/keebs/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                color: color,
                plate: plate,
                keebImage: keebImage
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Update Keeb Sound Test
    updateSound: function (token, id, keebSoundTest) {
        return fetch(`${URL_PREFIX}/api/keebs/sound/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                keebSoundTest
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Update Parts function
    updateParts: function (id, token, switches, switchLube, springWeight, springLube, switchFilm, stabs, stabLube, keyset) {
        return fetch(`${URL_PREFIX}/api/parts/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                switches: switches,
                switchLube: switchLube,
                springWeight: springWeight,
                springLube: springLube,
                switchFilm: switchFilm,
                stabs: stabs,
                stabLube: stabLube,
                keyset: keyset
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Update Keyset function
    updateKeyset: function (id, token, keyset, kits, material, type, profile, keysetImage) {
        return fetch(`${URL_PREFIX}/api/extras/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                keyset: keyset,
                kits: kits,
                material: material,
                type: type,
                profile: profile,
                keysetImage: keysetImage
            })
        }).then(res => {
            if (res.ok) {
                window.location.href = `/keyset/${id}`
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Delete user function
    deleteUser: function (token, userId) {
        return fetch(`${URL_PREFIX}/api/users/${userId}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => {
            if (res.ok) {
                window.location.href = "/"
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Delete Keeb function
    deleteKeeb: function (token, keebId) {
        return fetch(`${URL_PREFIX}/api/keebs/${keebId}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => {
            if (res.ok) {
                window.location.href = "/"
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Delete Parts function
    deleteParts: function (token, partsId) {
        return fetch(`${URL_PREFIX}/api/parts/${partsId}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => res.json()).catch(err => null)
    },
    // Delete Photo function
    deletePhoto: function (token, id) {
        return fetch(`${URL_PREFIX}/api/keebPhotos/${id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => {
            if (res.ok) {
                res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Delete Keyset function
    deleteKeyset: function (token, keysetId) {
        return fetch(`${URL_PREFIX}/api/extras/${keysetId}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => {
            if (res.ok) {
                res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    }
}

module.exports = API;