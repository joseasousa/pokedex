import { create } from 'apisauce'

const api = create({
  baseURL: 'http://pokeapi.co/api/v2/'
})

export default api
