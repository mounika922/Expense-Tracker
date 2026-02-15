import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Explorer from './pages/Explorer';
import Navbar from './components/Navbar';

const ProtectedRoute = ({children})=>{
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login"/>;
};

export default function App(){
  return(
    <BrowserRouter>
     {localStorage.getItem("token") && <Navbar/>}
      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route path="/"
          element={<ProtectedRoute><Dashboard/></ProtectedRoute>}
        />

        <Route path="/explorer"
          element={<ProtectedRoute><Explorer/></ProtectedRoute>}
        />

      </Routes>
    </BrowserRouter>
  );
}
