import React from 'react';
import '../App.css';
import CareItem from '../care/CareItem'
import { careInfo } from '../constants/careConst'


function CareBlock() {

    return (
        <section className="care">
            <h2 className="care__title">Мы обо всем позаботились</h2>
            <div className="care__block">
                {careInfo.map((care, id) =>
                    < CareItem
                        key={id}
                        careSrc={care.careSrc}
                        careAlt={care.careAlt}
                        title={care.title}
                        description={care.description}
                    />
                )}
            </div>

        </section>
    );
}

export default CareBlock;