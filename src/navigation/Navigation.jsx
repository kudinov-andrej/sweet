import '../App.css';
import { navigationConst } from '../constants/navigation/navigationConst.js'
import NavigationPunct from './NavigationPunct'
import React from 'react';



function Navigation() {

    return (
        <nav className='navigation'>
            <ul className='navigation__block'>
                {navigationConst.map((punkt, id) =>
                    <NavigationPunct
                        key={id}
                        type={punkt.type}
                        typeImg={punkt.typeImg}
                        link={punkt.link}
                        title={punkt.title}
                        text={punkt.text}
                    />
                )}
            </ul>
        </nav>

    );
}

export default Navigation;
