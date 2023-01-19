import axios from 'axios'
import * as Types from './auth.types'

const baseUrl = 'https://mocktest-y60k.onrender.com/'

const loading = () => ({ type: Types.LOADING })
const success = () => ({ type: Types.SUCCESS })
const error = (message) => ({ type: Types.ERROR, payload: message })


export const register = (data) => async (dispatch) => {
    try {
        loading()
        await axios.post(`${baseUrl}auth/signup`, data)
        success()
    } catch (err) {
        console.log(err);
        error(err)
    }
}

export const login = (formData) => async (dispatch) => {
    try {
        loading()
        const { data } = await axios.post(`${baseUrl}auth/login`, formData)
        dispatch({ type: Types.LOGIN, payload: data })
        success()
    } catch (err) {
        console.log(err);
        error(err)
    }
}

