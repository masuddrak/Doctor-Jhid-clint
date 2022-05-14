import logo from './logo.svg';
import './App.css';
import Navbar from './pages/sheard/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Appointmen from './pages/Appointment/Appointmen';
import Reviews from './pages/Reviews/Reviews';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Footer from './pages/Reviews/Footer';
import SignUp from './pages/Login/SignUp';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='appointment' element={<Appointmen></Appointmen>}></Route>
        <Route path='reviewa' element={<Reviews></Reviews>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
