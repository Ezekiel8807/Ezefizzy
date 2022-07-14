import Handles from '../../comps/handles/Handles'
import './contact.css'
import { useState } from 'react'

const Contact = () => {

    const [ fullname, setFullname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')

    const messageMe = () => {
        if(!fullname | !email | !message ){
            alert('all fields required!')
        }
    }

    return (
        <div className="container contact col-md-6 col-sm-6 ">
            <form onSubmit={ messageMe } className="contact-form form-control">
                <h1>Message Me</h1>
                <input onChange={ (e) => { setFullname(e.target.value)}} className="form-control" pattern='[A-Za-z ]{8,}' type="text" placeholder="Fullname" />
                <input onChange={ (e) => { setEmail(e.target.value)}} className="form-control" type="email" placeholder="Email" />
                <textarea onChange={ (e) => { setMessage(e.target.value)}} className="form-control" cols="10" rows="5" placeholder="Message" ></textarea>

                <div className="contact-btn">
                    <input className="conBtn form-control" type="submit" value="Message"/>
                </div>
            </form>

            <Handles />

        </div>
    )
}

export default Contact;