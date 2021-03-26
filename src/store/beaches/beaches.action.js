import {
    getBeaches,
    newBeach,
    getBeachById
} from "../../service/beachesservice"
import history from '../../config/history'


export const LOADING_BEACHES = "LOADING_BEACHES"
export const GET_BEACHES = "GET_BEACHES"
export const CREATE_BEACHES = "CREATE_BEACHES"
export const GET_ONE_BEACH = "GET_ONE_BEACH"


export const showBeaches = () =>{
    return async(dispatch) => {
        dispatch({type: LOADING_BEACHES, status: true})
        const beaches = await getBeaches()
        dispatch({type: GET_BEACHES, data: beaches.data})
        console.log(beaches.data)
    }
}

export const getOneBeach = (id) =>{
    return async(dispatch) => {
        dispatch({type: LOADING_BEACHES, status: true})
        const beache = await getBeachById(id)
        dispatch({type: GET_ONE_BEACH, data: beache.data})
        history.push(`/beaches/${beache.data}`)
    }
}

export const NewBeach = (props) =>{
    return async(dispatch) =>{
        dispatch({type: LOADING_BEACHES, status: true})
        //console.log(props)
        const newbeache = await newBeach(props)
        dispatch({type: CREATE_BEACHES, data: newbeache})
    }
}