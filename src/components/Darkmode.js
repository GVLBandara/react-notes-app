import React, { useState } from 'react';

const Darkmode = ({ handleDarkMode }) => {

    const [Lmode, setLmode] = useState(true);
    const handleMode = () => {
        let m = !Lmode;
        setLmode(m);
        handleDarkMode(m);
    }

    return (
        <div className="note">
            <button className='save' onClick={handleMode}>Save</button>
        </div>);
};

export default Darkmode;