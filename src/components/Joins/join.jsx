import React, { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wtit43s', 'template_6ypdhh2', form.current, '1XJds5GcnjBeAgJsB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='Join' id='join-us'>
            <div className='left-j'>
                <hr />
                <div>
                    <span className='strock-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='strock-text'>WITH US?</span>
                </div>
            </div>
            <div className='right-j'>
                {/* used emailjs for sending mail through jS */}
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type='email' name='user_email' placeholder='Enter your email address ' />
                    <button className='btn btn-j'>Join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join