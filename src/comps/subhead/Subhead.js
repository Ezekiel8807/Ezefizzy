import './subhead.css'

const Subhead = ({ subheading }) => {
    return (
        <div className='subhead'>
            <h1>{ subheading }</h1>
            <div className='line'></div>
        </div>
    )
}

export default Subhead