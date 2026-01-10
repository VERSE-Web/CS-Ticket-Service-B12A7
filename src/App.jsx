import React, { Suspense } from "react";
import Tickets from "./components/tickets";
import './App.css'

const ticketsPromise = fetch('https://raw.githubusercontent.com/VERSE-Web/B12A7-CS-Ticket-Service-JSON-Info-API/refs/heads/main/data.json')
  .then(res => res.json())

function App() {
  return (
    <>
      <Header />
      <br/>
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
// need it