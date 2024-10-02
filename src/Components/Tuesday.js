// src/components/Monday.js

import React from 'react';
import './Day.css';

const Monday = () => {
    const periods = [
        { time: '09:00 - 10:00', subject: 'Math', staff: 'Mr. John' },
        { time: '10:00 - 11:00', subject: 'English', staff: 'Ms. Smith' },
        // Add more periods here
    ];

    return (
        <div className="day-container">
            <h2>Monday</h2>
            {periods.map((period, index) => (
                <div className="period" key={index}>
                    <div className="period-time">{period.time}</div>
                    <div className="period-subject">{period.subject}</div>
                    <div className="period-staff">{period.staff}</div>
                </div>
            ))}
        </div>
    );
};

export default Monday;
