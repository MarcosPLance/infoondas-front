import http from '../config/http'

const newUser = async (data) => await http.post(`/user`, data)

const getOneUser = async(Id) => await http.get(`/user/${Id}`)

export {
    newUser,
    getOneUser
}