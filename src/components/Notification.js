// Notification.js
import React from 'react';

function Notification({ message, onClose }) {
    return (
        <div className='notification'>
            <div className='notification-content'>{message}</div>
            {/* <button className='notification-close' onClick={onClose}>
                Close
            </button> */}
        </div>
    );
}

export default Notification;
