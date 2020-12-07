import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineCodeSandbox, AiOutlineUser } from 'react-icons/ai'

import './sideNav.css';

const SideNav = () => {
    return (
        <div className='side_nav'>
            <div> 
                <AiOutlineUser color='#6b6bbd' fontSize='20px' />
                <Link to='/profile'> Profile </Link> 
            </div>
            <div> 
                <AiOutlineCodeSandbox color='#6b6bbd' fontSize='20px' />
                <Link to='/'> Summary </Link> 
            </div>
            <p> @toniraga </p>
        </div>
    )
}

export default SideNav
