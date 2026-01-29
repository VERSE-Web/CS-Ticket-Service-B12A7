// Everything is labeled because of my Own sanity...  

import React, { use, useState } from 'react';
import './tickets.css';
import vector1 from "./../assets/vector1.png";

const Tickets = ({ ticketsPromise }) => {

  const data = use(ticketsPromise);
  
  const t = data.tickets;
  
  const [inProgress, setInProgress] = useState(0);
  const [completed, setCompleted] = useState(0);

  const [activeTicket, setActiveTicket] = useState();



  const showOne = () => {{setActiveTicket("COne"), setInProgress(inProgress +1)}};
  const showTwo = () => {setActiveTicket("CTwo"), setInProgress(inProgress + 1)};
  const showThree = () => {setActiveTicket("CThree"), setInProgress(inProgress + 1)};
  const showFour = () => {setActiveTicket("CFour"), setInProgress(inProgress + 1)};
  const showFive = () => {setActiveTicket("CFive"), setInProgress(inProgress + 1)};
  const showSix = () => {setActiveTicket("CSix"), setInProgress(inProgress + 1)};
  const showSeven = () => {setActiveTicket("CSeven"), setInProgress(inProgress + 1)};
  const showEight = () => {setActiveTicket("CEight"), setInProgress(inProgress + 1)};
  const showNine = () => {setActiveTicket("CNine"), setInProgress(inProgress + 1)};
  const showTen = () => {setActiveTicket("CTen"), setInProgress(inProgress + 1)};

  // Oh Allah, Please fogive me.
  const [completeOne, setCompletedOne] = useState()
  const [completeTwo, setCompletedTwo] = useState()
  const [completeThree, setCompletedThree] = useState()
  const [completeFour, setCompletedFour] = useState()
  const [completeFive, setCompletedFive] = useState()
  const [completeSix, setCompletedSix] = useState(false);
  const [completeSeven, setCompletedSeven] = useState(false);
  const [completeEight, setCompletedEight] = useState(false);
  const [completeNine, setCompletedNine] = useState(false);
  const [completeTen, setCompletedTen] = useState(false);

  // Funtions for complete
  const completeNoOne = () => {
    setCompletedOne(true)
    setCompleted(+1)
    setInProgress(0)
    {setActiveTicket("")}
  };
  const completeNoTwo = () => {
    setCompletedTwo(true);
    setCompleted(prev => prev + 1);
    setInProgress(0);
    setActiveTicket("");
  };

  const completeNoThree = () => {
    setCompletedThree(true);
    setCompleted(prev => prev + 1);
    setInProgress(0);
    setActiveTicket("");
  };

  const completeNoFour = () => {
    setCompletedFour(true);
    setCompleted(prev => prev + 1);
    setInProgress(0);
    setActiveTicket("");
  };

  const completeNoFive = () => {
    setCompletedFive(true);
    setCompleted(prev => prev + 1);
    setInProgress(0);
    setActiveTicket("");
  };

  const completeNoSix = () => {
    setCompletedSix(true);
    setCompleted(prev => prev + 1);
    setInProgress(0);
    setActiveTicket("");
  };

  const completeNoSeven = () => {
    setCompletedSeven(true);
    setCompleted(prev => prev + 1);
    setInProgress(0);
    setActiveTicket("");
  };

  const completeNoEight = () => {
    setCompletedEight(true);
    setCompleted(prev => prev + 1);
    setInProgress(0);
    setActiveTicket("");
  };

  const completeNoNine = () => {
    setCompletedNine(true);
    setCompleted(prev => prev + 1);
    setInProgress(0);
    setActiveTicket("");
  };

  const completeNoTen = () => {
    setCompletedTen(true);
    setCompleted(prev => prev + 1);
    setInProgress(0);
    setActiveTicket("");
  };

  return (
    <div>
      {/* Maincard */} 
      <div className="Container1">
      <div className="Main-div1">
        <div>
          <img src={vector1} alt="" />
        </div>
        <div>
          <h3>In-Progress</h3>
          <h1>{inProgress}</h1>
        </div>
        <div className="Image-1">
          <img src={vector1} alt="" />
        </div>
      </div>

      <div className="Main-div2">
        <div>
          <img src={vector1} alt="" />
        </div>
        <div>
          <h3>Completed</h3>
          <h1>{completed}</h1>
        </div>
        <div className="Image-1">
          <img src={vector1} alt="" />
        </div>
      </div>
    </div>
    <br/>
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
        <div className='ticketContainer' onClick={showThree}>
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
        <div className='ticketContainer' onClick={showFour}>
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
        <div className='ticketContainer' onClick={showFive}>
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
        <div className='ticketContainer' onClick={showSix}>
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
        <div className='ticketContainer' onClick={showSeven}>
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
        <div className='ticketContainer' onClick={showEight}>
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
        <div className='ticketContainer' onClick={showNine}>
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
        <div className='ticketContainer' onClick={showTen}>
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
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <h1 style={{fontSize: '24px', fontWeight: '2px', color: '#34485A'}}>
              Task status
              </h1>
            <span style={{fontSize: '15px', fontWeight: '2px', color: '#34485A'}}>
              (One at a time.)
              </span>
            </div>
            <div style={{display: activeTicket === "COne" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='COne'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#0001'].title}
              </h3>
                <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}}  onClick={completeNoOne}>
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
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}} onClick={completeNoTwo}>
                Complete
              </button>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div style={{display: activeTicket === "CThree" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='CTwo'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#0011'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}} onClick={completeNoThree}>
               Complete
              </button>
            </div>
          </div>
          {/* 4th */}
          <div style={{display: activeTicket === "CFour" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='CTwo'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#0100'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}} onClick={completeNoFour}>
                Complete
              </button>
            </div>
          </div>
          {/* 5th */}
          <div style={{display: activeTicket === "CFive" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='CTwo'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#0101'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}} onClick={completeNoFive}>
                Complete
              </button>
            </div>
          </div>
          {/* 6th */}
          <div style={{display: activeTicket === "CSix" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='CTwo'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#0110'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}} onClick={completeNoSix}>
                Complete
              </button>
            </div>
          </div>
          {/* 7th */}
          <div style={{display: activeTicket === "CSeven" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='CTwo'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#0111'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}} onClick={completeNoSeven}>
                Complete
              </button>
            </div>
          </div>
          {/* Eight */}
          <div style={{display: activeTicket === "CEight" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='CTwo'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#1000'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}} onClick={completeNoEight}>
                Complete
              </button>
            </div>
          </div>
          {/* Nine */}
          <div style={{display: activeTicket === "CNine" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='CTwo'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#1001'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}} onClick={completeNoNine}>
                Complete
              </button>
            </div>
          </div>
          {/* Ten */}
          <div style={{display: activeTicket === "CTen" ? "block" : "none", backgroundColor: '#FFFFFF', borderRadius: '8px', width: '358px', height: '113px', border: '5px solid #ffffff'}} id='CTwo'>
            <div style={{textAlign: 'center', gap: '5px'}}>
              <h3 style={{}}>
                {t['#1010'].title}
              </h3>
              <button style={{ backgroundColor: '#02A53B', width: '326px', height: '43px', border: '0px', color: 'white'}} onClick={completeNoTen}>
                Complete
              </button>
            </div>
          </div>
          <div>
          <h1 style={{fontSize: '24px', fontWeight: '2px', color: '#34485A'}}>
            Completed Tasks
          </h1>
          <div style={{display: completeOne ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#0001'].title}
            </div>
          </div>
          <br/>
          <div style={{display: completeTwo ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#0010'].title}
            </div>
          </div>
          <br/>
          <div style={{display: completeThree ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#0011'].title}
            </div>
          </div>
          <br/>
          <div style={{display: completeFour ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#0100'].title}
            </div>
          </div>
          <br/>
          <div style={{display: completeFive ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#0101'].title}
            </div>
          </div>
          <br/>
          <div style={{display: completeSix ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#0110'].title}
            </div>
          </div>
          <br/>
          <div style={{display: completeSeven ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#0111'].title}
            </div>
          </div>
          <br/>
          <div style={{display: completeEight ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#1000'].title}
            </div>
          </div>
          <br/>
          <div style={{display: completeNine ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#1001'].title}
            </div>
          </div>
          <br/>
          <div style={{display: completeTen ? 'block' : 'none'}}>
            <div style={{ width: '358px', height: '62px', backgroundColor: '#E0E7FF', fontSize: '18px', color: '#001931', display: 'flex', justifyContent: 'center', alignItems: 'center', vertical: 'center'}} id='FirstDone'>
              {t['#1010'].title}
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
  );
};

export default Tickets;

// And incase i don't see ya Good morning, Good Afternoon and good night.
