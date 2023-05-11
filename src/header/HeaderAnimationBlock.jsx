import '../App.css';
import { animationPunktList } from '../constants/headerConst/headerConstants.js'
import React, { useState, useEffect } from 'react';
import HeaderAnimationPunct from './HeaderAnimationPunct'

function HeaderAnimationBlock() {

    const [selectedPunkt, setSelectedPunkt] = useState(0);


    useEffect(() => {
        if (selectedPunkt < 0) {
            setTimeout(() => setSelectedPunkt(3), 4000);
        } else if (selectedPunkt > 2) {
            setTimeout(() => setSelectedPunkt(0), 4000);
        } else {
            setTimeout(() => setSelectedPunkt(selectedPunkt + 1), 4000);
        }
    }, [selectedPunkt]);

    const handlePrevPunkt = () => {
        setSelectedPunkt(selectedPunkt === 0 ? 3 : selectedPunkt - 1);
    };

    const handleNextPunkt = () => {
        setSelectedPunkt(selectedPunkt === 3 ? 0 : selectedPunkt + 1);
    };


    return (
        <div className='header__animation'>
            <button onClick={handlePrevPunkt} className='header__animation-button header__animation-button_type_left'></button>
            {animationPunktList.map((punkt, index) =>
                <HeaderAnimationPunct
                    key={index}
                    type={punkt.type}
                    text={punkt.text}
                    isActive={index === selectedPunkt}
                />)}
            <button onClick={handleNextPunkt} className='header__animation-button header__animation-button_type_right'></button>
        </div>
    );
}

export default HeaderAnimationBlock;
