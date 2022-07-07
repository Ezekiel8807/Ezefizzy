import './article.css'
import { BsGlobe } from "react-icons/bs"

const Article = ({ artImg, artHead, artDisc, artWeb }) => {

    return(
        <div className='article'>

            <div className='art-img'>
                <img src={ artImg } alt="art-img" />
            </div>

            <h3 className='art-disc-head'>{ artHead }</h3>
            <p className='art-disc'>{ artDisc }</p>
   
            <div className='art-foot'><a href={ artWeb }><BsGlobe className='icon' /> Learn more </a></div>
            
        </div>
    )
}

export default Article;