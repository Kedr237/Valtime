import './styles/cleaning.scss';
import './styles/main.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/blocks/Header/Header';
import Footer from './components/blocks/Footer/Footer';
import HomePage from './components/pages/HomePage/HomePage';
import GetBrands from './helpers/GetBrands';
import GetWatches from './helpers/GetWatches';
import WatchPage from './components/pages/WatchPage/WatchPage';
import GetAboutUs from './helpers/GetAboutUs';
import ThisTest from './ThisTest';


export default function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className="content">
        <GetBrands />
        <GetWatches />
        <GetAboutUs />
        <ThisTest />

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='watch/:id' element={<WatchPage/>} />
        </Routes>


      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}