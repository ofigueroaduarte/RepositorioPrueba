import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';

export default function HomePage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h2>Bienvenid@</h2>
                    <p>Gestiona ventas y productos</p>
                    <div>
                        <Link to={routes.login}>Ingresa</Link> 
                        <Button as={Link} to={routes.register}>Crea una cuenta</Button>             
                    </div>
                </Col>
                <Col md={{ span: 6, offset: 3 }} className="text-center">                 
                    <img
                    style={{width:'100%'}} src="/img/ventas.jpg"  alt="imagen referencia aplicación "/>                    
                </Col>

            </Row>
            
        </Container>            
    )
}
