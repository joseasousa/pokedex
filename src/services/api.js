
import { create } from 'apisauce'

//const baseURL = 'http://localhost/api/v2/'
const baseURL = 'https://pokeapi.co/api/v2/'

const api = create({
  baseURL
})

export default api
