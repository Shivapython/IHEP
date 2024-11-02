import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hospitals from './pages/Hospitals';
import Login from './pages/Login';
import NotFound from './pages/NotFound'; 
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  const location = useLocation(); 

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/hospitals' element={<Hospitals />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='*' element={<NotFound />} /> 
      </Routes>
      {location.pathname !== '/login' && <Footer />} 
      <ToastContainer /> 
    </div>
  );
}

export default App;
