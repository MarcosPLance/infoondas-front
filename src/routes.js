import {Router, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import history from './config/history'
import { isAuthenticated } from './config/auth'

//Admin Components
import NewBeaches from './components/beaches/newbeaches'
import ListAdminBeaches from './components/beaches/listadminbeaches'
import AdminNav from './components/dashboard/dashboard'

//User Components
import ListBeaches from './components/beaches/listbeaches'
import Cadastro from './components/users/cadastro'
import Beaches from './components/beaches/beaches'
import Login from './components/login/signin'




const AdminRoute = ({ ...rest }) => {
    if(!isAuthenticated()){
        return <Redirect to="/"/>
    }
    return <Route {... rest}/>
}

const Routers = () =>{
    const dispacth = useDispatch()
    
    

    return(
    <Router history={history}>
        <Switch>
            
            <Route exact component={Login} path="/"/>

            <Route path="/admin">
               <AdminNav>
                    <AdminRoute exact component={NewBeaches} path="/admin/newbeaches"/>
                    <AdminRoute exact component={ListAdminBeaches} path="/admin/listbeaches"/>
                </AdminNav>
            </Route>
            
            <Route path="/">
                <Route exact component={Beaches} path="/beaches/:id"/>
                <Route exact component={Cadastro} path="/usercad"/>
                <Route exact component={ListBeaches} path="/listbeaches"/>
            </Route>
        </Switch>



    </Router>
    )
}

export default Routers