import axios from 'axios'
import * as Types from './bug.types'

const baseUrl = 'https://mocktest-y60k.onrender.com'

const loading = () => ({ type: Types.LOADING })
const success = () => ({ type: Types.SUCCESS })
const error = (message) => ({ type: Types.ERROR, payload: message })


export const getAllBug = () => async (dispatch) => {
    try {
        loading()
        const allBugs = await axios.get(`${baseUrl}/bug/getBugs`)
        dispatch({ type: Types.GETALLBUGS, payload: allBugs })
        success()
    } catch (err) {
        console.log(err);
        error(err)
    }
}


export const addBug = (data) => async (dispatch) => {
    try {
        loading()
        await axios.post(`${baseUrl}/bug/addBug`, data)
        success()
        getAllBug()
    } catch (err) {
        console.log(err);
        error(err)
    }
}

export const deleteBug = (bugId) => async (dispatch) => {
    try {
        loading()
        await axios.delete(`${baseUrl}/bug/delete/${bugId}`)
        success()
        getAllBug()
    } catch (err) {
        console.log(err);
        error(err)
    }
}

