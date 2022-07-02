import './project.css'

const Project = ({ proTitle, proImg, proDisc }) => {

    return(
        <div className='project'>
            <h2 className='pro-title'> {proTitle} </h2>

            <div className='pro-img'>
                <img src={ proImg } alt="pro-img" />
            </div>

            <p className='pro-disc'>{ proDisc }</p>

            <div className='pro-foot'>

            </div>
        </div>
    )
}

export default Project;