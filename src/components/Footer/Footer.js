import React, { useEffect, useState } from 'react'
import './Footer.scss'
import { gsap, Bounce } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import * as emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
    const [sending, setSending] = useState(false);

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

    const submitResponse = (e) => {
        e.preventDefault();
        setSending(true);
        let templateParams = {
            from_name: e.target['name'].value.trim(),
            from_email: e.target['email'].value.trim(),
            to_name: 'Udbhav Bhandari',
            message: e.target['comment'].value.trim(),
        }

        emailjs.send(
            'service_ber9gvx',
            'template_7xydjv8',
            templateParams,
            'user_oXKmlNQ582qGid4NXID4O'
        ).then(res => {
            e.target.reset();
            const alert = document.getElementById('alertSection');
            alert.style.maxHeight = '10em';
            setTimeout(() => {
                alert.style.maxHeight = '0';
            }, 3000);
            setSending(false);
        })
            .catch(err => {
                alert('Error Occured! Please try again\n' + err.message)
                setSending(false);
            })
    }

    return (
        <div className='footer-container'>
            <span className='heading-container'>
                <h3 className='footer-heading'>Contact Me</h3>
            </span>
            <div className='footer-form'>
                <form className='form' onSubmit={(event) => { submitResponse(event) }}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Name</label><span className='red-star'> *</span>
                            <input type="text" className="form-control" id='name' placeholder='Your Name' required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label><span className='red-star'> *</span>
                            <input type="email" className="form-control" id='email' placeholder='Your Email' required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Suggestion / message</label><span className='red-star'> *</span>
                        <textarea type="text" className="form-control" id='comment' placeholder="Your comment" required />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={sending}>
                        {
                            sending ?
                            <span>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span> Sending...</span>
                            </span>
                            :
                            "Submit"
                        }
                        </button>
                    <div id='alertSection'>
                        <div className="alert alert-success mt-4" role="alert">
                        <b>Response sent successfully!</b>
                    </div>
                    </div>
                </form>

            </div>
            <div className='social-connect'>
                <ul className="social-network social-circle">
                    <li><a href="https://www.facebook.com/udbhav.bhandari/" target="_blank" rel="noopener noreferrer" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://github.com/udbhavbhandari612" target="_blank" rel="noopener noreferrer" className="icoGit" title="GitHub"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/udbhavbhandari/" target="_blank" rel="noopener noreferrer" className="icoInsta" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/udbhav-bhandari-4608b416a/" target="_blank" rel="noopener noreferrer" className="icoLinkedIn" title="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div className="text-center">
                © 2020 Copyright:&nbsp;&nbsp;
                <a href="#" style={{ textDecoration: 'none' }}>Udbhav Bhandari</a>
            </div>
        </div>
    )
}
