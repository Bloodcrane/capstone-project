import React from 'react';
import Card from './Card';

function ComingSoon() {
  return (
    <div className="RoomsContainer">
      <div className="RContentWrapper">
        <h1 className="RTitle">Rooms</h1>
        <section className='cardSection'>
          <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094270/Room1_dsuv5f.png'/>
          <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094318/Room2_cnoyzd.png'/>
          <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room3_hnqmmi.png'/>
          <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room4_rn95nw.png'/>
        </section>
      </div>
    </div>
  );
}

export default ComingSoon;
