import logo from './logo.svg';
import './App.css';
import Sign from "./component/Sign"
import Signin from './component/Signin';
import Navbar from './component/Navbar';
import Review from './component/Review';
import Register from './component/Register';
import { Route, Routes } from "react-router-dom"
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
      </Routes>

    </>
  );
}

export default App;
