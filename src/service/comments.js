import http from '../config/http'

const newComments = (dados) => http.post('/comments', dados)

export {
    newComments
}