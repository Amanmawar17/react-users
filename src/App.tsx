import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './pages/Users'; // UserTable component
import UserDetails from './pages/UserDetails'; // UserDetails component
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
    <Navbar/>
    <ToastContainer limit={1}/>
    <Router>
      <Routes>
        <Route path="/" element={<Users />} /> {/* Main Table */}
        <Route path="/user/:id" element={<UserDetails />} /> {/* User Details */}
      </Routes>
    </Router>
    </>
  );
}
