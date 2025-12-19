import React, { use } from 'react';
import './tickets.css';

const Tickets = ({ ticketsPromise }) => {
  const data = use(ticketsPromise);
  const t = data.tickets;
  return (
    <div className='timBradford'>
      <div className='ticketsHolders'>
          <div className='ticketContainer'>
            <div className='top-rank'>
              <h3>{t["#0001"].title}</h3>
              <h4>{t["#0001"].status}</h4>
            </div>
            <div className='mid-rank'>
              <h4>{t["#0001"].description}</h4>
            </div>
            <div className='lowest-rank'>
              
            </div>
          </div>
      </div>
    </div>
  );
};

export default Tickets;
