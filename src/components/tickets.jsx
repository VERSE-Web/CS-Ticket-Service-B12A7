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
              <h4 className='G-status'>{t["#0001"].status}</h4>
            </div>
            <div className='mid-rank'>
              <h4 className='grey'>{t["#0001"].description}</h4>
            </div>
            <div className='lowest-rank'>
              <div className='LR-left'>
                <h6 className='grey'>#{t["#0001"].id}</h6>
                <h6 className='R-priority'>{t["#0001"].priority}</h6>
              </div>
              <div className='LR-right'>
                <h6 className='grey'>{t["#0001"].customer}</h6>
                <h6 className='grey'>{t["#0001"].createdAt}</h6>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Tickets;



          // <div className='ticketContainer'>
          //   <div className='top-rank'>
          //     <h3>{t["#0001"].title}</h3>
          //     <h4 className='G-status'>{t["#0001"].status}</h4>
          //   </div>
          //   <div className='mid-rank'>
          //     <h4 className='desc'>{t["#0001"].description}</h4>
          //   </div>
          //   <div className='lowest-rank'>
          //     <div className='LR-left'>
          //       <h5 className='id'>{t["#0001"].id}</h5>
          //       <h5>{t["#0001"].status}</h5>
          //     </div>
          //     <div className='LR-right'>
          //       <h5>{t["#0001"].customer}</h5>
          //       <h5>{t["#0001"].createdAt}</h5>
          //     </div>
          //   </div>