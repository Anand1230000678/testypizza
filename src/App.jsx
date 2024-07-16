
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar'

import Home from './page/Home';

import Footer from './component/Footer';
import Menu from './page/Menu';
import About from './page/About';
import Contect from './page/Contect';



function App() {


  return (
    <div className='App'>
    <BrowserRouter>
    <Navbar/>
  
    <Routes>
      <Route path='/' exact Component={Home}/>
      
        <Route path='/menu' exact Component={Menu}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/contect' exact Component={Contect}/>

       




     
      
    </Routes>
    
    <Footer n/>
    </BrowserRouter>
    
        
    </div>
  );
}

export default App
