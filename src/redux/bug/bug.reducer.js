import * as Types from './bug.types'


const initState = {
    bugs: [],
    loading: false,
    error: false
}

export const bugReducer = (state = initState, { type, payload }) => {
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
        case Types.GETALLBUGS:
            localStorage.setItem('mockToken', payload.token)
            return {
                ...state,
                bugs: payload.bugs,
            }
        default:
            return state
    }
}
