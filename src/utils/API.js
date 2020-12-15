const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://mykeebs-api.herokuapp.com"

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
        }).then(res => res.json()).catch(err => null)
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
        }).then(res => res.json()).catch(err => null)
    },
    // Upload Image function
    uploadImage: function (data) {
        return fetch(`https://api.cloudinary.com/v1_1/jsk321/image/upload`,
            {
                method: 'POST',
                body: data
            }
        )
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
        }).then(res => res.json()).catch(err => null)
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
        }).then(res => res.json()).catch(err => null)
    },
    deleteKeeb: function (token, keebId) {
        return fetch(`${URL_PREFIX}/api/keebs/${keebId}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => res.json()).catch(err => null)
    },
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