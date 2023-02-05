import { Route, Switch } from 'react-router-dom';

import Layout from "./components/layout/Layout";
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactMe from './components/ContactMe/ContactMe';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact-me'>
          <ContactMe />
        </Route>
        <Route path='/blogs'>
          <Blogs />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
