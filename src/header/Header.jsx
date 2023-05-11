import '../App.css';

import HeaderAnimationBlock from './HeaderAnimationBlock';
import HeaderNavigation from './HeaderNavigation';
import HeaderImportentNavigation from './HeaderImportentNavigation';

function Header() {
    return (
        <header className='header' >
            <HeaderAnimationBlock />
            <HeaderNavigation />
            <HeaderImportentNavigation />
        </header>
    );
}

export default Header;