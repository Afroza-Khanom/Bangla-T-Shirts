import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Brother {ring}</h2>
        </div>
    );
};

export default Brother;