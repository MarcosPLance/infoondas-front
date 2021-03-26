import { auth } from "../../service/auth";
import { saveLocalStorage} from "../../config/auth"
import history from '../../config/history'

export const SIGN = "SIGN";
export const SIGN_LOADING = "SIGN_LOADING";

export const signIn = (props) => {
  return async (dispatch) => {
    dispatch({ type: SIGN_LOADING, loading: true });

    const {data} = await auth(props)
    dispatch({ type: SIGN, data: data });
    saveLocalStorage(data)
    const user = JSON.parse(localStorage.getItem("beaches"))
      if(user.user.admin === true){
        history.push("/admin/listbeaches") 
      }else{
        history.push("/listbeaches")
      }
  };
};

