import React from 'react';
import { Link } from 'react-router-dom';
import './_cards.scss';

function Cards({ id, title, cover}) {

  return (
    <Link to={`/logement/${id}`}>
      <div className='cards'>
        <img src={cover} alt={title} className='cards-image'/>

        <h2 className='cards-title'>{title}</h2>
      </div>
    </Link>
  )
}

export default Cards