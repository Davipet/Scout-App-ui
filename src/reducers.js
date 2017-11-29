import {RECEIVE_CREATE_KIT, RECEIVE_GET_KIT} from './actions'

const defaultState=[]

const reducers=(
    state=defaultState,
    action
)=>{
    switch (action.type) {
        case RECEIVE_CREATE_KIT:
            return [
                ...state,
                action.kit
            ]
        case RECEIVE_GET_KIT:
            return action.kit    
        default:
            return state 
    }
}

export default reducers
