
import {HashRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';

import ScrollToTopRoute from './ScrollToTopRoute'

function App() {
  
  return (
  <div className='app'>
   
   <Router>
       <Header/>
       <Switch>
          <ScrollToTopRoute exact={true} path='/'>
          <Home/>
          </ScrollToTopRoute>
       </Switch>
       <Footer/>
   </Router>
 
  </div>
  );
}

export default App;
   