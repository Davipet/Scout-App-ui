import fetch from 'isomorphic-fetch'

export const REQUEST_CREATE_KIT='REQUEST_CREATE_KIT'

export const requestCreateKit=(kit) => ({
    type: REQUEST_CREATE_KIT,
    kit
})

export const RECEIVE_CREATE_KIT='RECEIVE_CREATE_KIT'

export const receiveCreateKit=(kit) => ({
    type: RECEIVE_CREATE_KIT,
    kit
})

export const createKit=(kit) => {

    return function(dispatch) {
        dispatch(requestCreateKit(kit))

        
        return fetch(`${process.env.REACT_APP_KIT_LIST_API}`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
           
            },
            body:JSON.stringify(kit) 
        })
        .then(
            r => r.json()
        )
        .then(
            json => dispatch(receiveCreateKit(json))
        )


    }
}


export const REQUEST_GET_KIT='REQUEST_GET_KIT'

export const requestGetKit=() => ({
    type: REQUEST_GET_KIT
})

export const RECEIVE_GET_KIT='RECEIVE_GET_KIT'

export const receiveGetKit=(kit) => ({
    type: RECEIVE_GET_KIT,
    kit
})

export const getKit=() => {

    return function(dispatch) {
        dispatch(requestGetKit())

        
        return fetch(`${process.env.REACT_APP_KIT_LIST_API}`)
        .then(
            r => r.json()
        )
        .then(
            json => dispatch(receiveGetKit(json.kit))
        )


    }
}