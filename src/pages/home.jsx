import React from 'react';
import HomeHero from '../components/HomeHero';
import MainCategories from '../components/MainCategories';
import PromoCards from '../components/PromoCards';
import ProductHeader from '../components/ProductHeader';
import SecondaryNav from '../components/SecondaryNav';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="home-container overflow-x-hidden">
      <HomeHero />
      <MainCategories />
      <PromoCards />
      <ProductHeader />
      <SecondaryNav />
      <ProductList />
      <Footer />
    </div>
  );
}

export default Home;
