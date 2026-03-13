import React from 'react'
import './style.css'
import CinemaTicketBooking from './CinemaTicketBooking'
const Main = () => {
    return (
        <div className=''>
            <CinemaTicketBooking
             layout={{
                rows: 8,
                seatPerRows: 12,
                aislePosition: 5,
            }}
                seatTypes={
                    {
                        regular: { name: 'Regular', price: 150, rows: [0, 1, 2] },
                        permium: { name: 'Premium', price: 250, rows: [3, 4, 5] },
                        vip: { name: 'VIP', price: 350, rows: [6, 7] },
                    }
                }
                bookedSeats={[]}
                currency={"$"}
                onBookingComplete={(booking)=>console.log(booking)}
            />


        </div>
    )
}

export default Main