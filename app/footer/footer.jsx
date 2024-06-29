'use client'

import './footer.css'
import user from '../images/user.svg'
import Image from 'next/image'

export default function Footer(){
    return(
        <div className="footer excluded">
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>Hi, I'm developer with 3 years of experience in creating visually stunning and highly functional web applications . I specialize in bringing creative designs to life and ensuring seamless user experiences</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email">
                        <Image src={user} alt=''/>
                        <input id="email" type="email" placeholder='Enter your email' autoComplete='email'/>
                    </div>
                    <div className="footer-sub">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bot-left">
                    <p>&copy; 2024 Afzal Akbar. All rights reserved</p>
                </div>
                <div className="footer-bot-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}