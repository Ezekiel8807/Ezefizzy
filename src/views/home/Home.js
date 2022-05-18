import './home.css'
import Header from '../../comps/header/Header'
import Footer from '../../comps/footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Header />

            <div className="my-brief">
                <div className="row">
                    <div className="col-md-6">
                        <div className="index-image">
                            <img src = {"asset/img/images.jpeg"} alt="best-emoji"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-me">
                            <h2>Hey, <br/> l'm Ayebidun Ezekiel.</h2>
                            <p>A fullstack web developer with over 5years of experience, very 
                                passionate about it and open to learn new stuff.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="resume-explore">
                <button className="resume"><a href="/resume">Resume</a></button>
                <button className="explore"><a href="explore.html">Explore</a></button>
            </div>

            <Footer />

        </div>
    )
}

export default Home;