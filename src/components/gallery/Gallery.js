import React from 'react';
import Cards from '../cards/Cards';
import './_gallery.scss';
import datas from '../../datas/datas.json';


function Gallery() {
  return (
    <div className='home_gallery'>
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
    </div>
  )
}

export default Gallery