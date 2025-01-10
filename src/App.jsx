import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Login from './Pages/login';
import { Dashboard } from './Pages/dashboard';
import NavigationHistoryPage from './Pages/navigationHistory';
// import Register from './Components/Register';
import Footer from './Components/Footer';
// import Image from './Components/Image';
// import logo from './assets/ICICI-Bank.png';
import { navigateTo } from './Store/navigationSlice';
// import { ToastContainer } from 'react-toastify';
import NotificationListener from './Components/toastNotification';


const NavigationListener = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(navigateTo(location.pathname));
  }, [location.pathname, dispatch]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cover m-0">
      {/* Header */}
      {/* <Image src={logo} alt="logo" /> */}

      {/* Main content area */}
      {/* <div className="flex-grow flex justify-center items-center"> */}
        <NavigationListener />
        <NotificationListener />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/navigation-history" element={<NavigationHistoryPage />} />
          {/* <Route path="/Register" element={<Register />} /> */}
        </Routes>
      {/* </div> */}

      {/* Footer at the bottom */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
