import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'

export default function NotFoundPage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={{ span:6, offset: 3}} className="text-center">
                    <img
                    style={{width:'100%'}} src="/img/page-not-found.png"  alt="error-404"/>
                    <p>Vuelve al inicio <Link to={routes.home}>inicio</Link></p>                                 
                </Col>               
            </Row>
        </Container>
    )
}
