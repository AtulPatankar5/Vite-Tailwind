import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';
import Image from './Components/Image';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cover m-0">
      <Image src="../src/assets/ICICI-Bank.png" alt="logo"/>
      
      {/* Main content area */}
      <div className="flex-grow flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
