import { Container, Row, Col, Card, Button } from "react-bootstrap"
import useAuth from "../../auth/useAuth";
import useModal from "../../hooks/useModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import EditModal from "./components/EditModal";


export default function AccountPage() {
    const { user } = useAuth();
    const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] =useModal();  
    const [isOpenEditModal, openEditModal, closeEditModal] =useModal();

    return (
        <>
        <Container>
            <Row>
                <Col xs={12} className="text-center">
                    <img 
                        src="/img/avatar-294479.svg"
                        alt="profile"
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />
                </Col>
                <Col className="mt-4">
                    <Card style={{maxWidth: '360px'}} className="mx-auto">
                        <p className="text-center"><b>Nombre: </b>{user.name}</p>
                        <p className="text-center"><b>Correo: </b>{user.email}</p>
                        <p className="text-center"><b>Rol: </b>{user.role}</p>

                        <Button variant= "warning"
                        onClick={openEditModal}
                        >
                            Editar Cuenta
                        </Button>
                        <Button variant= "link" className="mt-1"
                        onClick={openChangePasswordModal}
                        >                      
                        Cambiar Contraseña  
                        </Button>
                    </Card>               
                </Col>
            </Row>       
        </Container>
        
            
        <ChangePasswordModal 
            isOpen={isOpenChangePasswordModal}
            close={closeChangePasswordModal}
        />
        
        <EditModal 
            isOpen={isOpenEditModal}
            close={closeEditModal}
            user={user}
        />
        </>
    )
}
