import Handles from '../../comps/handles/Handles'
import './contact.css'

const Contact = () => {
    return (
        <div className="contact container">
            <form className="contact-form form-control">
                <h1>Message Me</h1>
                <input className="form-control" pattern='[A-Za-z ]{8,}' type="text" placeholder="Fullname" title='Can only accept letters' required/>
                <input className="form-control" type="email" placeholder="Email" required/>
                <textarea className="form-control" cols="10" rows="3" placeholder="Message" required></textarea>

                <div className="contact-btn">
                    <input className="conBtn form-control" type="submit" value="Message"/>
                </div>
            </form>
            <Handles />
        </div>
    )
}

export default Contact