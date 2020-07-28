import React, { useEffect, useRef } from 'react'
import { gsap, Power3 } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import './Home.scss'
import Navbar from '../Navbar/Navbar'
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import FirstLook from '../FirstLook/FirstLook';
import Footer from '../Footer/Footer';

export default function Home() {
    const stot = useRef(null);

    useEffect(() => {
        AnimateBanner();
        gsap.registerPlugin(ScrollToPlugin)
        TriggerNavAnimations();
        stotTrigger();
    })

    const stotTrigger = () => {
        if (window.scrollY > 50)
            stot.current.style.opacity = '1';
        else
            stot.current.style.opacity = '0';
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50)
                stot.current.style.opacity = '1';
            else
                stot.current.style.opacity = '0';
        })
    }

    const TriggerNavAnimations = () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#top',
                start: 'top +=50',
                end: 'top -=50',
                scrub: true,
            }
        }).to('.nav', {
            background: 'black',
            boxShadow: '0 0 10px 1px #E53935',
            duration: 0.5,
        })
    }

    const AnimateBanner = () => {
        gsap.from('.banner', { opacity: 0, y: '-2em', duration: 0.5, ease: Power3.easeInOut })
    }

    const handleLinks = (type) => {
        let y = 0;
        if (type === '1') {
            y = document.getElementById('aboutMe').offsetTop;
            gsap.to(window, 0.8, { scrollTo: y - 100, ease: Power3.easeOut })

        }
        else if (type === '2') {
            y = document.getElementById('projects').offsetTop;
            gsap.to(window, 0.8, { scrollTo: y - 80, ease: Power3.easeOut })
        }
        else if (type === 'top') {
            gsap.to(window, 0.8, { scrollTo: 0, ease: Power3.easeOut })
        }

    }

    return (
        <div style={{ overflowX: 'hidden' }}>
            <img src={require('../../Assets/banner.jpg')} className='banner' alt="" />

                <Navbar handleLinks={(type) => handleLinks(type)} />
       
            <div id='top' />
            <div className='trigger-banner'>
                <FirstLook />
            </div>
            <div id='aboutMe' /><AboutMe />
            <div id='projects' /><Projects />
            <Footer/>
            <div className='stot' ref={stot}>
                <button type="button" class="btn btn-outline-primary rounded-circle" title='Go to top'
                    onClick={() => handleLinks('top')} style={{ padding: '5px 7px' }}>
                    <i className="fas fa-chevron-circle-up fa-2x"></i>
                </button>
            </div>
        </div >
    )
}

