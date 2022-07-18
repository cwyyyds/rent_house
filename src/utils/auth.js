// Authorization
import storage from './storage'
const TOKEN_KEY = 'token'
const CITY_NAME = 'city'
export const getToken = () => storage.get(TOKEN_KEY)
export const getCity = () => storage.get(CITY_NAME)

export const setToken = (token) => storage.set(TOKEN_KEY, token)
export const setCity = (token) => storage.set(CITY_NAME, token)

export const removeToken = () => storage.remove()
