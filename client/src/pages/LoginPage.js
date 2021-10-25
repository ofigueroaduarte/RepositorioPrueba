import { useLocation } from "react-router";
import useAuth from "../auth/useAuth"

const userCredentials = {};

export default function LoginPage() {
    const location = useLocation();
    console.log(location);
    const { login } = useAuth();

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick= { () => login(userCredentials, location.state?.from)}>Iniciar sesion</button>
        </div>
    );
}
