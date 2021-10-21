import { Navbar, Nav, NavDropdown }from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import routes from '../helpers/routes'
import useAuth from '../auth/useAuth'

export default function Navigation() {

    const { logout } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to={routes.home}>Gestor de Tareas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to={routes.projects}>projects</Nav.Link>                   
                    <NavDropdown title="Admin">
                        <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
                    </NavDropdown>                    
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login}>Iniciar Sesion</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
                    <Nav.Link to={routes.account} onClick={logout}>Cerrar sesion</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <h1>Navigation</h1>
        </Navbar>
    )
}

