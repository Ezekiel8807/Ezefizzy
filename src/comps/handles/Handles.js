import './handles.css'
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs"

const Handles = () => {
    return(
        <div className="platform">

            <div className="line-circle">
                <a href="https://github.com/Ezekiel8807" target='_blank' rel="noreferrer">
                    <BsGithub />
                </a>
            </div>

            <div className="line-circle">
                <a href="https://www.linkedin.com/in/Ezekiel8807" target='_blank' rel="noreferrer">
                <BsLinkedin />
                </a>
            </div>
        
            
            <div className="line-circle">
                <a href="https://www.twitter.com/AyebidunEzekiel" target='_blank' rel="noreferrer">
                    <BsTwitter />
                </a>
            </div>
            
            <div className="line-circle">
                <a href="https://www.facebook.com/Ezekiel8807" target='_blank' rel="noreferrer">
                <BsFacebook />
                </a>
            </div>

            <div className="line-circle">
                <a href="mailto:ayeoluwaseyi@gmail.com" target='_blank' rel="noreferrer">
                <BsEnvelopeFill />
                </a>
            </div>


        </div>   
    )
}

export default Handles;