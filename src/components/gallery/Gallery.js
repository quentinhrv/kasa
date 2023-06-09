import React from 'react';
import Cards from '../cards/Cards';
import './_gallery.scss';
import datas from '../../datas/datas.json';


function Gallery() {
  return (
    <section className='home-gallery'>
      {datas.map(datas => {
        return (
          <Cards
            key={datas.id} 
            id={datas.id} 
            title={datas.title} 
            cover={datas.cover} 
          />
        )
      })}
    </section>
  )
}

export default Gallery