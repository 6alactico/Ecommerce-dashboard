import { NavLink } from "react-router-dom";
import './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface NavProps {
    onClose?: () => void;
}

function NavBar({ onClose }: NavProps) {
    return (
        <nav className="nav-bar">
            <ul>
                <li className="close-btn">
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </li>
                <li>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/orders'>Orders</NavLink>
                </li>
                <li>
                    <NavLink to='/revenue'>Revenue</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;