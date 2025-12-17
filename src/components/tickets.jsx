import React, { use } from 'react';

const Tickets = ({ ticketsPromise }) => {
    const data = use(ticketsPromise);
    const tickets = data.tickets; 

    return (
        <div>
            <h1>Number of tickets: {tickets.length}</h1>
        </div>
    );
};

export default Tickets;
