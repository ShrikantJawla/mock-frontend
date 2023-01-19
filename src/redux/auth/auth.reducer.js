import * as Types from './auth.types'

const token = localStorage.getItem('mockToken')

const initState = {
    token: token ? token : '',
    loading: false,
    auth: token ? true : false,
    error: false
}

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case Types.LOADING:
            return {
                ...state,
                loading: true
            }
        case Types.ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case Types.SUCCESS:
            return {
                ...state,
                loading: false
            }
        case Types.LOGIN:
            localStorage.setItem('mockToken', payload.token)
            return {
                ...state,
                token: payload.token,
                auth: true
            }
        default:
            return state
    }
}
