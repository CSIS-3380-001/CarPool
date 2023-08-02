// import {Routes, Route} from 'react-router-dom';
// import { Home } from './Pages/Home/Home';
// import { About } from './Pages/About';
// import { Start } from './Pages/Start';
// import { RentOutPage } from './Pages/PostPage/PostPage';
// import { AuthProvider } from './contexts/AuthContext';

// import { Login } from './Pages/Login/Login';
// import { Signup } from './Pages/Signup/Signup';

// // Link Bootstrap with project
// import 'bootstrap/dist/css/bootstrap.css';

// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/about" element={<About/>}></Route>
//         <Route path="/start" element={<Start/>}></Route>
//         <Route path="/rental-form" element={<RentOutPage/>}></Route>
//         {/* <Route path="/login" element={<Login/>}></Route>
//         <Route path="/sign-up" element={<Signup/>}></Route> */}
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Home } from './Pages/Home/Home';
import { About } from './Pages/About';
import { Start } from './Pages/Start';
import { RentOutCar } from './Pages/RentOutCar';
import { Host } from './Pages/Host';
import { RentOutPage } from './Pages/PostPage/PostPage';
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './Pages/Login/Login';
import { Signup } from './Pages/Signup/Signup';
import { Profile } from './Pages/Profile/Profile';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<RentOutCar />} />
        <Route path="/about" element={<About />} />
        <Route path="/start" element={<Start />} />
        <Route path="/start/host" element={<Host />} />
        {/* <Route path="/start/rent-out-car" element={<RentOutCar />} /> */}
        <Route path="/rental-form" element={<RentOutPage />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route> 
        <Route path="/profile" element={<Profile/>}></Route> 
      </Routes>
    </AuthProvider>
  );
}

export default App;


