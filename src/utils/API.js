const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://mykeebs-api.herokuapp.com"


const API = {
    login: function (userData) {
        console.log(userData)
        return fetch(`${URL_PREFIX}/api/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).catch(err => null)
    },

    getProfile:function(token){
        return fetch(`${URL_PREFIX}/api/users/secretProfile`, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        }).then(res=>res.json()).catch(err=>null)
    }
}

module.exports = API;