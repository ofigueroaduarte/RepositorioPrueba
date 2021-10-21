import AppRouter from "./routers/AppRouter";
import AuthProvider from "./auth/AuthProvider"; 
import { BrowserRouter as Router} from 'react-router-dom';
import Layaout from "./components/layaouts/Layaout";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Layaout>
            <AppRouter />
          </Layaout>
        </AuthProvider>
      </Router>    
    </div>
    
  );
}

export default App;
