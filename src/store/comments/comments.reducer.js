import {
    LOADING_COMMENTS,
    CREATE_COMMENTS,
    GET_COMMENTS
} from "./comments.action"

const INITIAL_STATE ={
    loading: false,
    all:[],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_COMMENTS:
            state.loading = action.status;
            return state;
        case CREATE_COMMENTS:
            state.loading = false;
            return state;
        case GET_COMMENTS:
            state.all = action.data;
            state.loading = false;
            return state;
        default:
            return state;
    }
}

export default reducer