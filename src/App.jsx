import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Login from './Pages/login';
import { Dashboard } from './Pages/dashboard';
import NavigationHistoryPage from './Pages/navigationHistory';
// import Footer from './Components/Footer';
// import Image from './Components/Image';
// import logo from './assets/ICICI-Bank.png';
import { navigateTo } from './Store/navigationSlice';
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
      {/* <Image src={logo} alt="logo" /> */}

      {/* Main content area */}
      <NavigationListener />
      <NotificationListener />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/navigation-history" element={<NavigationHistoryPage />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
