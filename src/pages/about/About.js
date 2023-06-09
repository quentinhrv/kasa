import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import banner_about from '../../assets/banner_about.png';
import './_about.scss';

function About() {
  return (
    <div className='about'>
      <Header />
        <main>
          <Banner image={banner_about} titre="" />
        </main>
      <Footer />
    </div>
  );
}

export default About;