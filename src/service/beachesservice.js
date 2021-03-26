import http from '../config/http'

const newBeach = (dados) =>  http.post(`/beaches`, dados)

const getBeachById = (Id) =>  http.get(`/beaches/${Id}`)

const getBeaches = () => http.get('/beaches')

export {
    newBeach,
    getBeaches,
    getBeachById,
}