import './Header.module.scss';
import { useState } from 'react';
import Navigation from '../routes/routes.js';
import NavBar from './nav-bar/NavBar.js';
import { useId } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    source: string,
    buttonContent?: React.ReactNode,
} 

// Header holds the state
function Header({ source, buttonContent }: HeaderProps) {
    const [isActive, setIsActive] = useState(false);

    return (
        <header className='flex-column'>
            <div className='flex-row'>
                <button onClick={() => setIsActive(prev => !prev)}>
                    {buttonContent ?? (isActive ? 'Close Menu' : 'Open Meny')}
                </button>
                <img src={source} alt='Header image' className='avatar'/>
                {isActive && <NavBar onClose={() => setIsActive(false)}/>}
            </div>
             <SearchBar />
        </header>
    )
}

function SearchBar() {
    const searchInputId = useId();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <form method='post' onSubmit={handleSubmit} className='flex-row'>
            <label htmlFor={searchInputId}>Search</label>
            <div className='flex-row'>
                <FontAwesomeIcon icon={faSearch} className='search-icon' />
                <input id={searchInputId} name="q" type='search'/>
            </div>
        </form>
    )
}

export default Header;