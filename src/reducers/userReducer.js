import {GET_USER} from '../actionTypes'

const initialState = {}

export default function getNotes(state = initialState, action ) {
    switch (action.type) {
        case GET_USER:
            return action.payload
        default:
            return state
    }
}