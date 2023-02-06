import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


import Layout from "./components/layout/Layout";
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Login from './components/LogIn/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('logged')) || false
  );

  const logIn = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    localStorage.setItem('logged', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const logOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <Layout isLogged={isLoggedIn}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-me' element={<ContactMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login isLogged={logIn} />} />
      </Routes>
    </Layout>
  );
}

export default App;
