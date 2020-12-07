import React from 'react'
import { useSelector } from 'react-redux'
import { FiSettings, FiPhoneCall } from 'react-icons/fi'
import { GiHamburgerMenu, GiHomeGarage } from 'react-icons/gi'
import { AiFillSmile, AiFillFrown } from 'react-icons/ai';

import SideNav from '../../components/sideNav/sideNav'

import './profile.css';

const Profile = () => {
    const { user } = useSelector((state) => state);

    return (
        <div className='profile'>
            <SideNav />
            <div className='profile_main'> 
                <div className='profile_body'> 
                    <div className='profile_details'> 
                        <div className='profile_details_head'> 
                            <div> <FiSettings color='#fff' size='20px' /> </div>
                            <div> <GiHamburgerMenu color='#fff' size='20px' /> </div>
                        </div>
                        <div className='profile_image'> 
                            <div className='__picture'> <img src='https://res.cloudinary.com/kadoshi/image/upload/v1607332153/samples/IMG_20200819_174950_sjdkqf.jpg' alt='' /> </div>
                            <div className='__picture_name'> 
                                { user?.name }
                            </div>
                            <p></p>
                            <div className='__picture_bio'>
                                <h4> BIO </h4>
                                <div> {user.about}. </div>
                            </div>
                            <p></p>
                            <div className='preferences'>  
                                <div> 
                                    <AiFillSmile color='#fff' size='35px' />
                                    <div> 
                                        <p> {user?.likes[0]} </p>
                                        <p> {user?.likes[1]} </p>
                                        <p> {user?.likes[2]} </p>
                                    </div>
                                </div>
                                <div> 
                                    <AiFillFrown color='#fff' size='35px' />
                                    <div> 
                                        <p> {user?.dislikes[0]} </p>
                                        <p> {user?.dislikes[1]} </p>
                                        <p> {user?.dislikes[2]} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile_base'>
                        <div> <FiPhoneCall color='#060646' size='20px' /> <p> {user.phone} </p> </div>
                        <div> <GiHomeGarage color='#060646' size='20px' /> <p> {user.address} </p> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
