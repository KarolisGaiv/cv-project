import React from 'react';
import './card.scss';

function Card({ fromDate, toDate, title, location, description }) {
  return (
    <div className='card'>
      <div className='card-top'>
        <div className='period'>
          {fromDate} - {toDate}
        </div>
        <div className='details'>
          <div className='title'>{title}</div>
          <div className='location'>{location}</div>
        </div>
      </div>
      <div className='card-bottom'>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
}

export default Card;
