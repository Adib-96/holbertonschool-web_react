import React from 'react';
import './Notifications.css'
export const Notifications =  () => {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button onClick={() => console.log('Close button has been clicked')
            }>X</button>
        </div>
    )
}

export default Notifications;