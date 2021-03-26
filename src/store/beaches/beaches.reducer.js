import {
    LOADING_BEACHES,
    GET_BEACHES,
    CREATE_BEACHES,
    GET_ONE_BEACH
} from "./beaches.action"

const INITIAL_STATE ={
    all: [],
    one:{},
    loading: false,
    total: 0
}

const reducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case LOADING_BEACHES:
            state.loading = action.status;
            return state;
        case GET_BEACHES:
            state.all = action.data;
            state.total = action.total;
            state.loading = false;
            return state;
        case GET_ONE_BEACH:
            state.one = action.data;
            state.loading = false;
            return state;
        case CREATE_BEACHES:
            state.loading = false;
            return state;
        default:
            return state;
    }
};

export default reducer