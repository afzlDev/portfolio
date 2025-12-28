import React from 'react';
import './portfolio.css';
import { portfolioData } from './portfolio_data';

export default function Portfolio() {
    return (
        <div className='P_Root'>
            <div className='P_Title'>
                <h1>Portfolio</h1>
            </div>
            <div className='P_Container'>
                <div className='P_Item'>
                    <img src={portfolioData[0].imageUrl} alt="Project One" className='P_Image' />
                    <h2 className='P_ItemTitle'>{portfolioData[0].title}</h2>
                    <p className='P_Description'>{portfolioData[0].description}</p>
                    <a href={portfolioData[0].projectUrl} className='P_Link' target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className='P_Item'>
                    <img src={portfolioData[1].imageUrl} alt="Project Two" className='P_Image' />
                    <h2 className='P_ItemTitle'>{portfolioData[1].title}</h2>
                    <p className='P_Description'>{portfolioData[1].description}</p>
                    <a href={portfolioData[1].projectUrl} className='P_Link' target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className='P_Item'>
                    <img src={portfolioData[2].imageUrl} alt="Project Three" className='P_Image' />
                    <h2 className='P_ItemTitle'>{portfolioData[2].title}</h2>
                    <p className='P_Description'>{portfolioData[2].description}</p>
                    <a href={portfolioData[2].projectUrl} className='P_Link' target="_blank" rel="noopener noreferrer">View Project </a>
                </div>
            </div>
        </div>
    );
}