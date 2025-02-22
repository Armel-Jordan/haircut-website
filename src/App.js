// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './translations/i18n';
import Navigation from './navigation/navigation.component';
import  Contenu  from './contenu/contenu.component';
import Footer from './footer/footer.component';
import Produits from './produits/produits.component';
import WhyChooseUs from './whyChooseUs/whyChooseUs.component';
import Team from './team/team.component';
import  Services  from './booking/services.component';
import  BookingPage  from './booking/bookingPage.component';

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
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
