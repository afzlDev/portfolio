import './about.css'

export default function About(){
    return(
        <div className="about" id='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-para">
                    <p>I am passionate about leveraging technology to solve real-world problems. With a keen interest in both frontend and backend development, I enjoy exploring new technologies and frameworks to continuously improve my skills.</p>
                 </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"55%"}}/></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>NEXT JS</p><hr style={{width:"55%"}}/></div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>
        </div>
    )
}