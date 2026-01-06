// Everything is labeled because of my Own sanity...  

import React, { use, useState } from 'react';
import './tickets.css';

const Tickets = ({ ticketsPromise }) => {

  const data = use(ticketsPromise);
  
  const t = data.tickets;
  
  const [activeTicket, setActiveTicket] = useState();


  const showOne = () => setActiveTicket("COne");
  const showTwo = () => setActiveTicket("CTwo");




  return (
    <div className='timBradford'>
      <div className='ticketsHolders'>
        <div className='lucyChen'>
          <h1>Customer Tickets</h1>
        </div>
        <br/>
        {/* 1 (0001) */}
        <div className='ticketContainer' onClick={showOne}>
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

        {/* 2 (0010) */}
        <div className='ticketContainer' onClick={showTwo}>
          <div className='top-rank'>
            <h3>{t["#0010"].title}</h3>
            <h4 className='Y-status'>{t["#0010"].status}</h4>
          </div>
          <div className='mid-rank'>
            <h4 className='grey'>{t["#0010"].description}</h4>
          </div>
          <div className='lowest-rank'>
            <div className='LR-left'>
              <h6 className='grey'>#{t["#0010"].id}</h6>
              <h6 className='Y-priority'>{t["#0010"].priority}</h6>
            </div>
            <div className='LR-right'>
              <h6 className='grey'>{t["#0010"].customer}</h6>
              <h6 className='grey'>{t["#0010"].createdAt}</h6>
            </div>
          </div>
        </div>

        {/* 3 (0011) */}
        <div className='ticketContainer'>
          <div className='top-rank'>
            <h3>{t["#0011"].title}</h3>
            <h4 className='G-status'>{t["#0011"].status}</h4>
          </div>
          <div className='mid-rank'>
            <h4 className='grey'>{t["#0011"].description}</h4>
          </div>
          <div className='lowest-rank'>
            <div className='LR-left'>
              <h6 className='grey'>#{t["#0011"].id}</h6>
              <h6 className='R-priority'>{t["#0011"].priority}</h6>
            </div>
            <div className='LR-right'>
              <h6 className='grey'>{t["#0011"].customer}</h6>
              <h6 className='grey'>{t["#0011"].createdAt}</h6>
            </div>
          </div>
        </div>

        {/* 4 (0100) */}
        <div className='ticketContainer'>
          <div className='top-rank'>
            <h3>{t["#0100"].title}</h3>
            <h4 className='G-status'>{t["#0100"].status}</h4>
          </div>
          <div className='mid-rank'>
            <h4 className='grey'>{t["#0100"].description}</h4>
          </div>
          <div className='lowest-rank'>
            <div className='LR-left'>
              <h6 className='grey'>#{t["#0100"].id}</h6>
              <h6 className='G-priority'>{t["#0100"].priority}</h6>
            </div>
            <div className='LR-right'>
              <h6 className='grey'>{t["#0100"].customer}</h6>
              <h6 className='grey'>{t["#0100"].createdAt}</h6>
            </div>
          </div>
        </div>

        {/* 5 (0101) */}
        <div className='ticketContainer'>
          <div className='top-rank'>
            <h3>{t["#0101"].title}</h3>
            <h4 className='Y-status'>{t["#0101"].status}</h4>
          </div>
          <div className='mid-rank'>
            <h4 className='grey'>{t["#0101"].description}</h4>
          </div>
          <div className='lowest-rank'>
            <div className='LR-left'>
              <h6 className='grey'>#{t["#0101"].id}</h6>
              <h6 className='R-priority'>{t["#0101"].priority}</h6>
            </div>
            <div className='LR-right'>
              <h6 className='grey'>{t["#0101"].customer}</h6>
              <h6 className='grey'>{t["#0101"].createdAt}</h6>
            </div>
          </div>
        </div>

        {/* 6 (0110) */}
        <div className='ticketContainer'>
          <div className='top-rank'>
            <h3>{t["#0110"].title}</h3>
            <h4 className='G-status'>{t["#0110"].status}</h4>
          </div>
          <div className='mid-rank'>
            <h4 className='grey'>{t["#0110"].description}</h4>
          </div>
          <div className='lowest-rank'>
            <div className='LR-left'>
              <h6 className='grey'>#{t["#0110"].id}</h6>
              <h6 className='G-priority'>{t["#0110"].priority}</h6>
            </div>
            <div className='LR-right'>
              <h6 className='grey'>{t["#0110"].customer}</h6>
              <h6 className='grey'>{t["#0110"].createdAt}</h6>
            </div>
          </div>
        </div>

        {/* 7 (0111) */}
        <div className='ticketContainer'>
          <div className='top-rank'>
            <h3>{t["#0111"].title}</h3>
            <h4 className='Y-status'>{t["#0111"].status}</h4>
          </div>
          <div className='mid-rank'>
            <h4 className='grey'>{t["#0111"].description}</h4>
          </div>
          <div className='lowest-rank'>
            <div className='LR-left'>
              <h6 className='grey'>#{t["#0111"].id}</h6>
              <h6 className='Y-priority'>{t["#0111"].priority}</h6>
            </div>
            <div className='LR-right'>
              <h6 className='grey'>{t["#0111"].customer}</h6>
              <h6 className='grey'>{t["#0111"].createdAt}</h6>
            </div>
          </div>
        </div>

        {/* 8 (1000) */}
        <div className='ticketContainer'>
          <div className='top-rank'>
            <h3>{t["#1000"].title}</h3>
            <h4 className='G-status'>{t["#1000"].status}</h4>
          </div>
          <div className='mid-rank'>
            <h4 className='grey'>{t["#1000"].description}</h4>
          </div>
          <div className='lowest-rank'>
            <div className='LR-left'>
              <h6 className='grey'>#{t["#1000"].id}</h6>
              <h6 className='Y-priority'>{t["#1000"].priority}</h6>
            </div>  
            <div className='LR-right'>
              <h6 className='grey'>{t["#1000"].customer}</h6>
              <h6 className='grey'>{t["#1000"].createdAt}</h6>
            </div>
          </div>
        </div>

        {/* 9 (1001) */}
        <div className='ticketContainer'>
          <div className='top-rank'>
            <h3>{t["#1001"].title}</h3>
            <h4 className='G-status'>{t["#1001"].status}</h4>
          </div>
          <div className='mid-rank'>
            <h4 className='grey'>{t["#1001"].description}</h4>
          </div>
          <div className='lowest-rank'>
            <div className='LR-left'>
              <h6 className='grey'>#{t["#1001"].id}</h6>
              <h6 className='R-priority'>{t["#1001"].priority}</h6>
            </div>
            <div className='LR-right'>
              <h6 className='grey'>{t["#1001"].customer}</h6>
              <h6 className='grey'>{t["#1001"].createdAt}</h6>
            </div>
          </div>
        </div>

        {/* 10 (1010) */}
        <div className='ticketContainer'>
          <div className='top-rank'>
            <h3>{t["#1010"].title}</h3>
            <h4 className='G-status'>{t["#1010"].status}</h4>
          </div>
          <div className='mid-rank'>
            <h4 className='grey'>{t["#1010"].description}</h4>
          </div>
          <div className='lowest-rank'>
            <div className='LR-left'>
              <h6 className='grey'>#{t["#1010"].id}</h6>
              <h6 className='G-priority'>{t["#1010"].priority}</h6>
            </div>
            <div className='LR-right'>
              <h6 className='grey'>{t["#1010"].customer}</h6>
              <h6 className='grey'>{t["#1010"].createdAt}</h6>
            </div>
          </div>
        </div>
      </div>
      {/* THE COMPLETE SECTION */}
      <div className='Stan-Smitty'>
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '24px', fontWeight: '2px', color: '#34485A'}}>
            <h1>
              Task status
              </h1>
            <span>
              (One at a time.)
              </span>
            </div>
            <div style={{display: activeTicket === "COne" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='COne'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#0001'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}}>
                Complete
              </button>
            </div>
          </div>
          {/* 2nd */}
          <div style={{display: activeTicket === "CTwo" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='CTwo'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#0010'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}}>
                Complete
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{fontSize: '24px', fontWeight: '2px', color: '#34485A'}}>
            Completed Tasks
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

// again 😭 
  





