// const URL_PREFIX = "http://localhost:8080"
const URL_PREFIX = "https://mykeebs-api.herokuapp.com"

const API = {
    // Log In function
    login: function (userData) {
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
                alert("You are ready to share your keebs!")
                window.location.href = "/"
                return res.json()
            } else {
                alert("Email already exists!")
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
    // Retrieve one Keeb
    getOneKeeb: function (keebId) {
        return fetch(`${URL_PREFIX}/api/keebs/${keebId}`, {
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
            if(res.ok){
                alert("Keeb added!")
                return res.json()
            } else {
                alert("Log in to add keeb!")
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
            if(res.ok){
                alert("Parts added!")
                return res.json()
            } else {
                alert("Log in to add parts!")
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Upload Image function
    uploadImage: function (imgData) {
        return fetch(`https://api.cloudinary.com/v1_1/jsk321/image/upload`, {
            method: 'POST',
            body: imgData
        })
    },

    // Update User Function
    updateUser: function (id, token, name, email, password, profileImage) {
        return fetch (`${URL_PREFIX}/api/users/${id}`, {
            method:"PUT",
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
            if(res.ok){
                alert("Profile updated!")
                window.location.href = "/profile"
                return res.json()
            } else {
                alert("Log in to update profile!")
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },

    // Update Keeb function
    updateKeeb: function (id, token, color, plate, keebImage) {
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
                alert("Keeb updated!")
                window.location.href = "/"
                return res.json()
            } else {
                alert("Log in to update keeb!")
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

    // Delete user function
    deleteUser: function (token, userId) {
        return fetch(`${URL_PREFIX}/api/users/${userId}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => {
            if(res.ok){
                alert("Profile deleted!")
                window.location.href = "/"
            } else {
                alert("Log in to delete profile!")
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
            if(res.ok){
                alert("Keeb deleted!")
                window.location.href = "/"
            } else {
                alert("Log in to delete keeb!")
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Delete Parts function
    deleteParts: function (token, partsId) {
        fetch(`${URL_PREFIX}/api/parts/${partsId}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => res.json()).catch(err => null)
    },
}

module.exports = API;