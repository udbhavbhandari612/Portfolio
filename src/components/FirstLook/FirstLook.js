import React, { useEffect, useRef } from 'react'
import './FirstLook.scss'
import { TweenLite, Bounce, gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default function FirstLook() {
    const techs = ['Web Development', 'Front-End Technologies', 'Back-End Technologies'];
    let tech = techs[Math.floor(Math.random() * 100) % 3];
    const techText = useRef(null);

    const TypeWriterAnimation = () => {
        let i = 0;
        let increment = () => {
            if (tech.length === i) {
                clearInterval(interval1);
                setTimeout(() => {
                    reset();
                }, 1500);

            } else {
                techText.current.innerHTML += tech[i];
                i++;
            }
        }

        let interval1 = setInterval(increment, 150);
        let interval2 = null;

        let reverse = () => {
            if (i === -1) {
                i = 0;
                clearInterval(interval2);
                tech = techs[Math.floor(Math.random() * 100) % 3];
                setTimeout(() => {
                    interval1 = setInterval(increment, 150);
                }, 1000);
            } else {
                techText.current.innerHTML = techText.current.innerHTML.slice(0, i);
                i--;
            }
        }

        let reset = () => {
            interval2 = setInterval(reverse, 100);
        }

    }

    const AnimateTexts = () => {

        TweenLite.to('.first-look', 1, { opacity: 1, scale: 1, ease: Bounce.easeOut, delay: 0.5, lazy: true })
    }

    useEffect(() => {

        AnimateTexts();
        setTimeout(() => {
            TypeWriterAnimation();
        }, 2000);

    })


    return (
        <div className="first-look">
            <div className='first-look-container'>
                <span style={{ fontFamily: 'Dancing Script' }}>Hi,</span><br />
                I am Udbhav<br />
                <span>Just another <span className="code">{"<CODER/>"}</span></span><br />
                <span>doing</span><br />
                <div style={{ whiteSpace: 'nowrap', lineHeight: '1.3em', fontWeight: 700 }}>
                    {'{ '}
                    <div className='code'>
                        <div ref={techText} className="techText"></div><span className='cursor'>|</span>
                    </div>
                    {'}'}
                </div>
            </div>
        </div>
    )
}
