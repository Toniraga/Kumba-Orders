import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineCodeSandbox, AiOutlineUser } from 'react-icons/ai'

import './sideNav.css';

const SideNav = () => {
    return (
        <div className='side_nav'>
            <div> 
                <AiOutlineUser color='#6b6bbd' fontSize='30px' />
                <Link to='/profile'> Profile </Link> 
            </div>
            <div> 
                <AiOutlineCodeSandbox color='#6b6bbd' fontSize='30px' />
                <Link to='/'> Summary </Link> 
            </div>
            <p><Link to='https://www.linkedin.com/in/tony-eraga-aa2011132/' target='_blank'> @toniraga </Link> </p>
        </div>
    )
}

export default SideNav
