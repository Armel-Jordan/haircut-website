import React from 'react';
import './App.scss';
import Navigation from './navigation/navigation.component';
import Contenu from './contenu/contenu.component';
import Footer from './footer/footer.component';
import Produits from './produits/produits.component';
import WhyChooseUs from './whyChooseUs/whyChooseUs.component';
import Team from './team/team.component';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Contenu />
      <Produits />
      <WhyChooseUs />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
