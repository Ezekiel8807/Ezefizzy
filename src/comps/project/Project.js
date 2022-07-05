import './project.css'
import {BsGithub, BsGlobe } from "react-icons/bs"

const Project = ({ proTitle, proImg, proDisc, proGit, proWeb }) => {

    return(
        <div className='project'>
            <h2 className='pro-title'> {proTitle} </h2>

            <div className='pro-img'>
                <img src={ proImg } alt="pro-img" />
            </div>

            <h3 className='disc-head'>About</h3>
            <p className='pro-disc'>{ proDisc }</p>

            
            <ul className='pro-foot'>
                <li className='githubLink'><a href={ proGit }><BsGithub className='icon' /> Github repo</a></li>
                <li className='webLink'><a href={ proWeb }><BsGlobe className='icon' /> Live website </a></li>
            </ul>
        </div>
    )
}

export default Project;