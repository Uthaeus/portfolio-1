import { Routes, Route } from 'react-router-dom';


import Layout from "./components/layout/Layout";
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactMe from './components/ContactMe/ContactMe';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-me' element={<ContactMe />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </Layout>
  );
}

export default App;
