import React from 'react';
import './_banner.scss';

function Banniere({ image, texte }) {
    return (
      <div className="banner">
        <img className="banner_image" src={image} alt="Bannière" />
        <div className="banner_dark"></div>
        <span className="banner_text">{texte}</span>
      </div>
    );
}
  
export default Banniere;