import React, { useEffect } from 'react'
import './Footer.scss'
import { gsap, Bounce } from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {

    const AnimateHeading = () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.footer-container',
                start: 'top+=100 bottom-=50',
                toggleActions: 'restart none none reset'
            }
        })
            .from('.footer-heading', { opacity: 0, y: -10, duration: 1, ease: Bounce.easeOut })
    }

    useEffect(() => {
        AnimateHeading();
    })

    return (
        <div className='footer-container'>
            <span className='heading-container'>
                <h3 className='footer-heading'>Contact Me</h3>
            </span>
            <div className='footer-form'>
                <form className='form'>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Name</label><span className='red-star'> *</span>
                            <input type="email" className="form-control" id='name' placeholder='Your Name' />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label><span className='red-star'> *</span>
                            <input type="text" className="form-control" id='email' placeholder='Your Email' />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Suggestion / message</label><span className='red-star'> *</span>
                        <textarea type="text" className="form-control" id='comment' placeholder="Your comment" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className='social-connect'>
                <ul className="social-network social-circle">
                    <li><a href="https://www.facebook.com/udbhav.bhandari/" target="_blank" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://github.com/udbhavbhandari612" target="_blank" className="icoGit" title="GitHub"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/udbhavbhandari/" target="_blank" className="icoInsta" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/udbhav-bhandari-4608b416a/" target="_blank" className="icoLinkedIn" title="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div className="text-center">
                © 2020 Copyright:&nbsp;&nbsp;
                <a href="#" style={{textDecoration:'none'}}>Udbhav Bhandari</a>
            </div>
        </div>
    )
}
