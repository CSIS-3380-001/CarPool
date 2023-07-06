import {Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About';
import { RentOutPage } from './Pages/PostPage/PostPage';
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './Pages/Login/Login';
import { Signup } from './Pages/Signup/Signup';

// Link Bootstrap with project
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/rental-form" element={<RentOutPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
