import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';  // Assuming authContext is in the same directory
import Cookies from 'js-cookie';
// Import components
import Login from './components/auth/login';
import Register from './components/auth/register';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import MarsRover from './components/MarsRover';
import Earth from './components/Earth';
import EPICImages from './components/Epic';
import Header from './components/header';  // Assuming header is in the same directory

// Import styles (optional)
import './App.css';
import 'tailwindcss/tailwind.css';

const ProtectedPage = ({ ...rest }) => {
  const isAuthenticated = !!Cookies.get('auth');
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null; // Return null to prevent rendering anything else
  }

  return (
    <Route {...rest} />
  );
};

function App() {
  return (
    <AuthProvider> 
      <Router>  
        <div className="app">
          <Header /> 
          <Routes> 

            <Route path="/protected/*" element={<ProtectedPage />} />

            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />} />  
            <Route path="/register" element={<Register />} /> 

            <Route path="/home" element={<Home />} />  

            <Route path="/nasaphoto" element={<NasaPhoto />} /> 
            <Route path="/marsrover" element={<MarsRover />} /> 
            <Route path="/earthphoto" element={<Earth />} />  
            <Route path="/epic" element={<EPICImages />} />  

            <Route path="*" element={<Login />} />  
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;