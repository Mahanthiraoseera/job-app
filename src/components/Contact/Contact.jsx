import React from 'react'
import './Contact.css';
import images from '../../constants/images';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className='contact-div'>
            <div className='flex-main'>
                <div className="flex-sub">
                    <div className='flex-one'>
                        <div className='chat-div-one'>
                        <img src={images.msg} alt='chat' />
                        <h2>Contact Us</h2>
                        <p className='chat-para'>We are on a mission to standardize lab education</p>
                        <button className='chat-btn'>Join us!</button>
                    </div>
                    <div className='chat-div-two'>
                        <img src={images.phone} alt='chat' />
                        <h2>Call Us</h2>
                        <p className='chat-para-two'>Speak to our lab experts, we are happy to help</p>
                        <button className='chat-btn-two'>Drive in</button>
                    </div>
                </div>
                <div className='chat-div-three'>
                    <img src={images.watsapp} alt='chat' />
                    <h2>Don't like forms?</h2>
                    <p className='chat-para-three'>We got you covered. Drop a quick mail or just chat with us on Watsapp. We are available for you</p>
                    <button className='chat-btn-three'>Chat</button>
                    <button className='chat-btn-four'>I Prefer Email</button>
                </div>
            </div>
            </div>








            <div className='chat-text-div'>
                <h1 className='search-header'>Let's Get In Touch</h1>
                <div className='flex-chat'>
                    <div>
                        <label className='labels'>First Name</label><br/>
                        <input className='label-texts' type='text'/>
                    </div>
                    <div>
                        <label className='labels'>Last Name</label>
                        <input className='label-texts' type='text'/><br/>
                    </div>
                </div>
                <div className='flex-chat'>
                    <div>
                        <label className='labels'>Email</label><br/>
                        <input className='label-texts' type='email'/>
                    </div>
                    <div>
                        <label className='labels'>Phone Number</label>
                        <input className='label-texts' type='number'/><br/>
                    </div>
                </div>
                <div>
                    <label className='labels-radio'>Select Subject?</label>
                    <div className='flex-one-radio'>
                        <div className='flex-one'>
                            <input id='radio-one' className='radio-size' name='radio' value='general' type='radio' />
                            <label className='radio-label' htmlFor='radio-one'>General Inquiry</label>
                        </div>
                        <div className='flex-one'>
                            <input id='radio-two' className='radio-size' name='radio' value='complain' type='radio'/>
                            <label className='radio-label' htmlFor='radio-two'>Complain</label>
                        </div>
                        <div className='flex-one'>
                            <input id='radio-three' className='radio-size' name='radio' value='specific' type='radio'/>
                            <label className='radio-label' htmlFor='radio-three'>Specific</label>
                        </div>
                        <div className='flex-one'>
                            <input id='radio-four' className='radio-size' name='radio' value='other' type='radio'/>
                            <label className='radio-label' htmlFor='radio-four'>Other</label>
                        </div>
                    </div>
                <div className='flex-chat-msg'>
                        <label className='labels'>Message</label><br/>
                        <input className='label-text-msg' type='text' placeholder='Write your message'/>
                </div>
                <div className='flex-chat-btn'>
                        <button className='msg-btn-ele'>Send Message</button>
                 </div>
                </div>

            </div>
            </div>
        </div>

  )
}

export default Contact;