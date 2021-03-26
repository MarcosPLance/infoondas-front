const TOKEN_KEY = "beaches"

const getToken = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
    if(data && data.token){
        return data.token
    }
    return false
}

const getUser = () =>{
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
    if(data && data.user){
        return data.user
    }
    return false
}

const isAuthenticated = () => {
    return getToken() !== false
}

const saveLocalStorage = (data) => localStorage.setItem(TOKEN_KEY, JSON.stringify(data)) 

export {
    getToken,
    saveLocalStorage,
    getUser,
    isAuthenticated
}