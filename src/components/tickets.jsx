import React, { use } from 'react';
import './tickets.css';

const Tickets = ({ ticketsPromise }) => {
  const data = use(ticketsPromise);
  const tickets = data.tickets;
  console.log(tickets);
  return (
    <div className='timBradford'>
      <h1></h1>
    </div>
  );
};

export default Tickets;
