import AccountPage from "../pages/AccountPage";

const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    account: '/account',
    productos: {
        registrarproductos: '/productos/registrarproductos',
        buscarproductos: '/productos/buscarproductos'
    },

    ventas: {
        registrarventas: '/ventas/registrarventas',
        buscarventas: '/ventas/buscarventas'
    },
   
    admin: {
        users:'/admin/users'
    }
};

export default routes;