import {
    getOneUser,
    newUser
} from "../../service/userservice"
import {toastr} from "react-redux-toastr"
import history from '../../config/history'

export const newUsers = (props) =>{
    return async (dispatch)=>{
      
            const user = await newUser(props)
            history.push('/')
      
    }
}

export const getUser = (props) => {
    return async(dispatch) => {
        const user = await getOneUser(props)
        console.log(user)
    }
}