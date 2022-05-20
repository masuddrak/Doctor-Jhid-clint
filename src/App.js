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
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './pages/Dashbord/Dashbord';
import MyAppointment from './pages/Dashbord/MyAppointment';
import MyReviews from './pages/Dashbord/MyReviews';
import AllUser from './pages/Dashbord/AllUser';
import AddDoctor from './pages/Dashbord/AddDoctor';
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='appointment' element={<RequireAuth>
          <Appointmen></Appointmen>
        </RequireAuth>}></Route>


        <Route path='dashbord' element={<RequireAuth>
          <Dashbord></Dashbord>
        </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myReviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='allUser' element={<AllUser></AllUser>}></Route>
          <Route path='addDoctor' element={<AddDoctor></AddDoctor>}></Route>
        </Route>


        <Route path='reviewa' element={<Reviews></Reviews>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
