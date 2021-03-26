import { newComments } from "../../service/comments"



export const LOADING_COMMENTS = "LOADING_COMMENTS"
export const GET_COMMENTS = "GET_COMMENTS"
export const CREATE_COMMENTS = "CREATE_COMMENTS"

export const newComment = (props) => {
    return async(dispatch) => {
        dispatch({type: LOADING_COMMENTS, status: true})
        const comment = await newComments(props)
        dispatch({type: CREATE_COMMENTS, data: comment})
    }
}
