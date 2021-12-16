import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const removeItem = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const directry = {
    getAll : getAll,
    create : create,
    remove : removeItem
}

export default directry
