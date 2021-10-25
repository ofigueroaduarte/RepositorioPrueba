import {Switch, Route } from 'react-router-dom'

import AccountPage from '../pages/AccountPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import RegistrarProductosPage from '../pages/RegistrarProductosPage'
import RegisterPage from '../pages/RegisterPage'
import Layaout from '../components/layaouts/Layaout'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import roles from '../helpers/roles'
import routes from '../helpers/routes'
import BuscarProductosPage from '../pages/BuscarProductosPage'
import BuscarVentasPage from '../pages/BuscarVentasPage'
import RegistrarVentasPage from '../pages/RegistrarVentasPage'


export default function AppRouter() {
    return (
        
        <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PublicRoute exact path={routes.login} component={LoginPage} />
            <PublicRoute exact path={routes.register} component={RegisterPage} />
            <PrivateRoute exact path={routes.account} component={AccountPage} />
            <PrivateRoute exact path={routes.productos.registrarproductos} component={RegistrarProductosPage} />
            <PrivateRoute exact path={routes.productos.buscarproductos} component={BuscarProductosPage} />
            <PrivateRoute exact path={routes.ventas.registrarventas} component={RegistrarVentasPage} />
            <PrivateRoute exact path={routes.ventas.buscarventas} component={BuscarVentasPage} />
            <PrivateRoute hasRole={roles.admin} exact path={routes.admin.users} component={UsersPage} />


            <Route path="*" component={NotFoundPage} />


        </Switch>

        
            

       
    )
}
