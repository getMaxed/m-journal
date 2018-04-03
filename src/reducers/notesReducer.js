import {GET_NOTES} from '../actionTypes'

const initialState = {}

export default function getNotes(state = initialState, action ) {
    switch (action.type) {
        case GET_NOTES:
            return action.payload
        default:
            return state
    }
}