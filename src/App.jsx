import React, { Suspense } from "react";
import Tickets from "./components/tickets";
import vector1 from './assets/vector1.png';
import './App.css'

const ticketsPromise = fetch('https://raw.githubusercontent.com/VERSE-Web/B12A7-CS-Ticket-Service-JSON-Info-API/refs/heads/main/data.json')
  .then(res => res.json())

function App() {
  return (
    <>
      <Header />
      <br/>
      <Maincard />
      <Suspense fallback={<p>HARDSTONE PSYCHO - Don Toliver is my Fav Hip-Hop Album GUTS(Spilled) is my Fav Pop Album.</p>}>
        <Tickets
        ticketsPromise={ticketsPromise} />
      </Suspense>

    </>
  )
}

export default App


const Header = () => {
  return (
    <div className="header">
        <div className="IDKjustneedit">
          <h4>CS — Ticket Support</h4>
        </div>
        <div className="inlinetspls">
          <h5>
            Home
          </h5>
          <h5>
            FAQ
          </h5>
          <h5>
            Changelog
          </h5>
          <h5>
            Blog
          </h5>
          <h5>
            Download
          </h5>
          <h5>
            Contact
          </h5>
          <button className="new-ticket-button">
            + New Ticket
          </button>
        </div>
    </div>
  );
}

function Maincard() {
  return (
    <div className="Container1">
      <div className="Main-div1">
        <div>
          <img src={vector1} alt=""/>
        </div>
        <div>
            <h3>In-Progress</h3>
            <h1><span>0</span></h1>
        </div>
        <div className="Image-1">
            <img src={vector1} alt=""/>
        </div>
      </div>
      <div className="Main-div2">
        <div>
          <img src={vector1} alt=""/>
        </div>
        <div>
            <h3>In-Progress</h3>
            <h1><span>0</span></h1>
        </div>
        <div className="Image-1">
            <img src={vector1} alt=""/>
        </div>        
      </div>
    </div>

  )
}

// need it