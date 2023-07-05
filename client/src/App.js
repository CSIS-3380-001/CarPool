import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { RentalCabForm } from './components/RentalCabForm/RentalCabForm';
import { AuthProvider } from './components/Auth/AuthContext';
import { Login } from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/rental-form" element={<RentalCabForm/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
