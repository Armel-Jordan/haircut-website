// src/App.js
import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/navigation.component';
import Contenu from './contenu/contenu.component';
import Footer from './footer/footer.component';
import Produits from './produits/produits.component';
import WhyChooseUs from './whyChooseUs/whyChooseUs.component';
import Team from './team/team.component';
import BookingPage from './booking/bookingPage.component';

const HomePage = () => {
  return (
    <>
      <Contenu />
      <Produits />
      <WhyChooseUs />
      <Team />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;