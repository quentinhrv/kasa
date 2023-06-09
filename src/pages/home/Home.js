import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import banner_home from '../../assets/banner_home.png';

function Home() {
  return (
    <div>
      <Header />
      <main>
      <Banner texte="Chez vous, partout et ailleurs" image={banner_home} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default Home;