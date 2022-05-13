import React, { useState } from 'react';
import AppointAvailable from './AppointAvailable';
import AppointBanner from './AppointBanner';

const Appointmen = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <AppointAvailable date={date}></AppointAvailable>
        </div>
    );
};

export default Appointmen;