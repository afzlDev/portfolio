"use client";
import { useState, useEffect } from 'react';
import './navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar() {

    const [fix, setFix] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setFix(true);
            } else {
                setFix(false);
            }
        };

        // Add event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup: Remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={fix ? 'navbar fixed' : 'navbar'}>
            <div className="list">
                <ul className='nav-menu'>
                    <li className='nav-text Home'>
                        <AnchorLink offset="100" href="#home" className='AnchorLink'>
                            <p>Home</p>
                        </AnchorLink>
                    </li>
                    <li className='nav-text Service'>
                        <AnchorLink offset="100" href="#about" className='AnchorLink'>
                            <p>About Me</p>
                        </AnchorLink>
                    </li>
                    <li className='nav-text AboutMe'>
                        <AnchorLink offset="100" href="#services" className='AnchorLink'>
                            <p>Services</p>
                        </AnchorLink>
                    </li>
                    <li className='nav-text Portfolio'>
                        <AnchorLink offset="100" href="#portfolio" className='AnchorLink'>
                            <p>Portfolio</p>
                        </AnchorLink>
                    </li>
                    <li className='nav-text Contact'>
                        <AnchorLink offset="100" href="#contact" className='AnchorLink'>
                            <p>Contact</p>
                        </AnchorLink>
                    </li>
                </ul>
                <AnchorLink offset="100" href="#contact" className='AnchorLink-contact'>
                    <div className='nav-contact'>Connect With Me</div>
                </AnchorLink>
            </div>
        </div>
    );
}
