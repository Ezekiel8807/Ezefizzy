import './about.css'
import Handles from '../../comps/handles/Handles';

const About = () => {
    const mystyle = {
        'color': '#fdb837',
        'font-size': '16px'
    }
    return(
        <div className="about-container">

            <div className="row about">
                <div className="col-md-6">
                    <div className="about-image">
                        <img src="asset/img/images.jpeg" alt="proImage"/>
                    </div>

                    <h1>Ayebidun Ezekiel</h1>

                    <a className='resume' href="asset/doc/resume.pdf" download>Resume</a><br/>
                </div>

                <div className='col-md-6'>
                    <div className="profolio">
                        <div className="row">
                            <div class="col-md-12">
                                <div class="skills">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="myskills">

                                                <div class="header-title">
                                                    <h5> Makeup Skills</h5>
                                                    <hr/>
                                                </div>

                                                <ul>
                                                    <li>
                                                        <div class="skills-bar">
                                                            <label>HTML</label><br/>
                                                            <progress class="bar" value="100" max="100"/>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="skills-bar">
                                                            <label>CSS</label><br/>
                                                            <progress className="bar" value="100" max="100"/>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="skills-bar">
                                                            <label>JAVASCRIPT</label><br/>
                                                            <progress className="bar" value="90" max="100"/>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="pro-skill">
                                                
                                                <div className="header-title">
                                                    <h5>Program skills</h5>
                                                    <hr/>
                                                </div>

                                                <ul>
                                                    <li>
                                                        <div className="skills-bar">
                                                            <label>NODE JS</label><br/>
                                                            <progress class="bar" value="80" max="100"/>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="skills-bar">
                                                            <label>REACT</label><br/>
                                                            <progress className="bar" value="70" max="100"/>
                                                        </div>
                                                    </li>
                                                            
                                                    <li>
                                                        <div className="skills-bar">
                                                            <label>PYTHON</label><br/>
                                                            <progress className="bar" value="50" max="100"/>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="get-us" >
			    
                <h1 className="title">Get in Touch</h1>   

                <p> Thank you for the time you spent with us so far, we are always here to serve you to your best interest and satisfaction.</p> 


                <ul className="addresses">

                    <li>
                        <i style={ mystyle } className="fa-solid fa-location-dot"></i>
                        <span> 3, Olatunja Street, Ijako bus stop, Sano Ota, Ogun State, Nigeria.</span>
                    </li>
                    
                    <li>
                        <i style={ mystyle } className="fa-solid fa-graduation-cap"></i>
                        <span> Olusegun Agagun University Of Science And Technology, Okitipupa, Ondo State, Nigeria.</span>
                    </li>
                    
                    <li>
                        <i style={ mystyle } className="fa-solid fa-phone"></i>
                        <span> +2348100196214 </span>
                    </li>
                    
                </ul>

		    </div>

            <Handles />
        </div>
    )
}

export default About;