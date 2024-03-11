import React from 'react'
import './footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Youtube from '../../assets/youtube.png'
import Logo from '../../assets/logo.png'


const Footer = () => {
    return (
        <div className='Footer-container'>
            <hr />
            <div className='Footer'>
                <div className='Social-links'>
                    {/* <img src={Youtube} alt='' /> */}
                    {/* <img src={Instagram} alt='' /> */}
                    {/* <img src={LinkedIn} alt='' /> */}
                </div>
                <div className='Logo-f'>
                    <img style={{ justifyContent: 'center' }} src={Logo} alt='' />
                </div>
            </div>
            <div className='blur blur-f-1 '></div>
            <div className='blur blur-f-2 '></div>
        </div>
    )
}

export default Footer