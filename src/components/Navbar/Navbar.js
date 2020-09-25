import React, { useEffect } from 'react';
import { TimelineLite, Power3 } from 'gsap';
import './Navbar.scss';


export default function Navbar({ handleLinks }) {
    const logoTl = new TimelineLite();
    const linksTl = new TimelineLite();

    useEffect(() => {
        AnimateLogo();
        AnimateLinks();
    })

    const AnimateLogo = () => {
        logoTl
            .to('.brand-logo', { rotate: '-10deg', duration: 1.5, opacity: 1, ease: 'elastic.out(0.8,0.2)', delay: 0.5, lazy: true })
            .to('.brand-underline', { width: '100%', duration: 1, delay: -0.5, ease: Power3.easeOut, lazy: true })

    }
    const AnimateLinks = () => {
        linksTl.to('.link', { opacity: 1, duration: 1, delay: 1, ease: Power3.easeOut, lazy: true })
    }


    return (
        <div className='navbar'>
            <div className='brand-logo'
                onMouseLeave={() => logoTl.play()}
                onMouseOver={() => logoTl.reverse()}>
                Portfolio<br />
                <div className='brand-underline' />
            </div>
            <div className='links'>
                <div onClick={() => handleLinks('1')} className='link'>About Me</div>
                <div onClick={() => handleLinks('2')} className='link'>Projects</div>
                <div onClick={() => handleLinks('3')} className='link'>Contact Me</div>
                <div onClick={() => handleLinks('4')} className='link'>
                <a href={require('../../Assets/Resume_Udbhav(Original).docx')} download='resume'>Resume&nbsp;<i className="fa fa-download" aria-hidden="true"></i></a></div>
            </div>
            <div className='menu-toggler' onClick={() => handleLinks('5')}><i className="fas fa-bars fa-lg"></i></div>
        </div>
    )
}
