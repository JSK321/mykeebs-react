const API = {
    login: function (userData) {
        console.log(userData)
        return fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).catch(err => null)
    },

    getProfile:function(token){
        return fetch("http://localhost:8080/api/users/secretProfile", {
            headers: {
                "authorization": `Bearer ${token}`
            }
        }).then(res=>res.json()).catch(err=>null)
    }
}

module.exports = API;