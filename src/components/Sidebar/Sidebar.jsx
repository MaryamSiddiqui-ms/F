import {useState, useEfect} from 'react';
import "./sidebar.css"
import Links from '../Links/Links';

const Sidebar = ({ links, active }) => {
    const [isOpen, setIsOpen] = useState(false);
   

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }



    return (

        <div className='sidebar-container'>
            <div className="menu-icon-container" onClick={handleToggle}>
                <i className="fa-solid fa-bars menu-icon"></i>
            </div>
            <Links arrayLinks={links} active={active} />
        </div>

    )
}

export default Sidebar;