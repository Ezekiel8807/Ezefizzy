import './home.css'
import Handles from '../../comps/handles/Handles'

const Home = () => {

    return (
        <div className='home'>

            <div className="my-brief">
                <div className="row">
                    <div className="col-md-6">
                        <div className="index-image">
                            <img src = {"asset/img/images.jpeg"} alt="best-emoji"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='about_me'>
                            <div className="about-me">
                                <h1>Hey, <br/> i'm Ayebidun Ezekiel.</h1>
                                <p>fullstack web developer and technical writer, very 
                                    passionate about it and open for collaboration.
                                </p>
                            </div>

                            <div className="resume-explore">
                                <button className="resume"><a href="asset/doc/resume.pdf" download>Resume</a></button>
                                <button className="explore"><a href="/explore">Explore</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Handles />
        </div>
    )
}

export default Home;