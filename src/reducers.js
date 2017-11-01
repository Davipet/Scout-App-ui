import {CREATE_KIT} from './actions'

const defaultState=[]

const reducers=(
    state=defaultState,
    action
)=>{
    switch (action.type) {
        case CREATE_KIT:
            return [
                ...state,
                action.kit
            ]
        default:
            return state 
    }
}
export default reducers


















































































