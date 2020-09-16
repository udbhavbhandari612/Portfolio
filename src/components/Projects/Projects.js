import React, { useEffect } from 'react'
import './Projects.scss'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


const longName = 'Project Name that might exceed the line boundaries';
const longDesc = 'Project Description that might exceed the line boundaries, not one time but many a time. You can see this';
var projects = [
    { title: 'Project 1', description: 'This is a demo project', link: '#', github: '#', imgPaths: ['Projects/1'], technologies: ['Firebase', 'ReactJS', 'GSAP'], languages: ['JavaScript', 'HTML', 'CSS'] },
    { title: 'Project 2', description: 'This is a demo project', link: '#', github: '#', imgPaths: ['Projects/2'], technologies: ['Firebase', 'ReactJS', 'GSAP'], languages: ['JavaScript', 'HTML', 'CSS'] },
    { title: 'Project 3', description: longDesc + longDesc + longDesc + longDesc + longDesc + longDesc, link: '#', github: '#', imgPaths: ['Projects/3'], technologies: ['Firebase', 'ReactJS', 'GSAP'], languages: ['JavaScript', 'HTML', 'CSS'] },
    { title: longName, description: 'This is a demo project', link: '#', github: '#', imgPaths: ['Projects/4'], technologies: ['Firebase', 'ReactJS', 'GSAP'], languages: ['JavaScript', 'HTML', 'CSS'] },
]

export default function Projects() {

    useEffect(() => {
        AnimateHeading();
        SkewPerScrollVelocity();
    }, [])

    const SkewPerScrollVelocity = () => {
        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".card", "skewY", "deg"),
            clamp = gsap.utils.clamp(-20, 20); 

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
                }
            }
        });

        gsap.set(".card", { transformOrigin: "center center", force3D: true });

    }

    const AnimateHeading = () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.projects-container',
                start: 'top+=100 bottom',
                toggleActions: 'restart none none reset'
            }
        })
            .fromTo('.projects-heading', 1, { y: -50 }, { opacity: 1, y: 0, ease: Power3.easeOut })
            .to('.projects-underline', 0.8, { width: '80%', ease: Power3.easeOut })
    }

    const concatStringArray = (list) => {
        let result = '';
        list.forEach((entry, index) => {
            if (index !== list.length - 1)
                result += entry + ', ';
            else
                result += entry;
        });
        return result;
    }

    return (
        <div className='projects-container'>
            <h4 className='projects-heading'>PROJECTS<div className='projects-underline'></div></h4>
            <div className="cards-group">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className='img-top-container'>
                                    <div className='overlay'>
                                        {project.description}
                                    </div>
                                    <div className='overlay overlay2'>
                                        Hover or Click for short description
                                    </div>
                                    <img src={require(`../../Assets/${project.imgPaths[0]}.jpg`)} className="card-img-top" alt=' ' />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" title={project.title}>{project.title}</h5>
                                    <div>
                                        <button type="button" className="btn btn-outline-secondary btn-block"><i className="fab fa-github"></i> Source Code on GitHub</button>
                                        <button type="button" className="btn btn-outline-success btn-block"><i className="fas fa-external-link-alt"></i> Visit Site</button>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted"><b>Technologies:</b> <span style={{ color: '#1976D2' }}>{concatStringArray(project.technologies)}</span></small><br />
                                    <small className="text-muted"><b>Languages:</b> <span style={{ color: '#1976D2' }}>{concatStringArray(project.languages)}</span></small>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </div >
    )
}
