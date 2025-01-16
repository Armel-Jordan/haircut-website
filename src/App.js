// src/App.js
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/navigation.component';
import Branding from './branding/branding.component';
import Contenu from './contenu/contenu.component';
import Footer from './footer/footer.component';
import Produits from './produits/produits.component';
import WhyChooseUs from './whyChooseUs/whyChooseUs.component';
import Team from './team/team.component';
import Services from './booking/services.component';
import BookingPage from './booking/bookingPage.component';

const HomePage = () => {
  return (
    <>
      <Branding />
      <Contenu />
      <Produits />
      <WhyChooseUs />
      <Team />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Branding />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking/:id" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
