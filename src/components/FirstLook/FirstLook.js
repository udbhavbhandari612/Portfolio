import React, { useEffect, useState } from 'react'
import './FirstLook.scss'
import { TweenLite, Bounce, SteppedEase, TweenMax, Power4, gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default function FirstLook() {
    const techs = ['Web Development', 'Front-End Technologies', 'Back-End Technologies']
    const [tech, setTech] = useState('');
    let typwriterTween = null;

    const TypeWriterAnimation = () => {
        setTech(techs[Math.floor(Math.random() * 100) % 3]);
        TweenMax.fromTo('.cursor', 0.6, { opacity: 0 }, { opacity: 1, repeat: -1, repeatDelay: 0.4, ease: Power4.easeInOut });
        typwriterTween = TweenMax.fromTo('.techText', 3.5,
            { width: 0 },
            {
                width: 'auto',
                ease: SteppedEase.config(tech.length),
                delay: 1.5,
                repeat: -1,
                repeatDelay: 2.5,

            }
        );

    }

    const AnimateTexts = () => {

        TweenLite.to('.first-look', 1, { opacity: 1, scale: 1, ease: Bounce.easeOut, delay: 0.5, lazy: true })
    }

    useEffect(() => {

        AnimateTexts();
        TypeWriterAnimation();

    })


    return (
        <div className="first-look">
            <div className='first-look-container'>
                <span style={{ fontFamily: 'Dancing Script' }}>Hi,</span><br />
                I am Udbhav<br />
                <span>Just another <span className="code">{"<CODER/>"}</span></span><br />
                <span>doing</span><br />
                <div style={{whiteSpace:'nowrap'}}>
                    {'{ '}
                    <div className='code'>
                        <div className="techText">{tech}</div><span className='cursor'>|</span>
                    </div>
                    {'}'}
                </div>
            </div>
        </div>
    )
}
