'use client'

import './hero.css';
import Image from 'next/image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import prof from '../images/prof.jpeg';

export default function Hero() {


    return (
        <div className="hero" id="home">
            <Image className="profile-image" src={prof} alt="profile" priority={true}/>
            <h1 className='home-h1'>
                <span>
                    Welcome to Afzal's portfolio website.
                </span>
                <br />
                showcasing my expertise and experience as a Developer.
            </h1>
            <p>
            I am Afzal Akbar, a dedicated Developer from Kerala, India, with 3 years of invaluable experience in the field.
            </p>
            <div className="hero-action">
                <AnchorLink offset="100" href="#contact" className="AnchorLink">
                    <div className="hero-contact">Connect With Me</div>
                </AnchorLink>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
}
