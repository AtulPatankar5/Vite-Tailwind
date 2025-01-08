import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/login';
import { Dashboard } from './Pages/dashboard';
// import Register from './Components/Register';
import Footer from './Components/Footer';
import Image from './Components/Image';
import logo from './assets/ICICI-Bank.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cover m-0">
      {/* Header */}
      <Image src={logo} alt="logo" />

      {/* Main content area */}
      <div className="flex-grow flex justify-center items-center">
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          {/* <Route path="/Register" element={<Register />} /> */}
        </Routes>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
