"use client";
import Image from "next/image";
import call from '../images/call.svg';
import location from '../images/location.svg';
import mail from '../images/mail.svg';
import './contact.css';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "52d026c2-c173-400b-ad3a-2d029b5d42f3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Submitted successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to reach out with any opportunities you have in mind.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <Image src={mail} alt="" />
                            <p>afzaldevc00l@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <Image src={call} alt="" />
                            <p>+91 9946841285</p>
                        </div>
                        <div className="contact-detail">
                            <Image src={location} alt="" />
                            <p>Kochi, Kerala</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right" onSubmit={onSubmit} id="form">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your Name" name="Name" autoComplete="name"/>
    
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter your Email" name="Email" autoComplete="email" />
    
                    <label htmlFor="message">Write your Message</label>
                    <textarea id="message" placeholder="Enter your Message" name="Message" style={{ color: "white" }}></textarea>
    
                    <button type="submit">SUBMIT NOW</button>
</form>

                <ToastContainer 
                    limit={2}
                    theme="dark"
                    stacked/>
            </div>
        </div>
    );
}
