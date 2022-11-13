import React, { useEffect, useState } from 'react';
import "./style/footer.css";
import axios from 'axios';

import AOS from 'aos';
import 'aos/dist/aos.css';

// eslint-disable-next-line no-unused-vars
import $ from "jquery";

const Footer = () =>
{
    
    AOS.init(1000);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() =>
    {
        // setName($("#name").val())
        // setEmail($("#email").val())
        // setMessage($("#message").val());
        console.log(name)
        // console.log(email)
        // console.log(message)
        
    },[name, email, message])


    const baseURL = "https://backend-mebattery.vercel.app/portfolio"
   // const localBase = "http://localhost:8080"
    function handelSubmitMsg(e)
    {
        e.preventDefault();

        axios
            .post(`${baseURL}/portfoliomessage`, {
            name: `${name}`,
            email: `${email}`,
            message: `${message}`
        }).then((Response) =>
        {
            console.log(Response);
            
        })
        .catch((error) =>
        {
            console.log(error);
        });

        // sendMssgBtn
       // $('#MSGForm').find('input').attr("disabled", true);
       
      //  $('#sendMssgBtn').hide();
        $('#MSGForm').find('input').val("");
      //  $('#MSGForm').find('input').attr("disabled", true);


         // $('#MSGForm').find('input').attr("readonly", true);
       // $('#MSGForm').find('input').css("display", "none")

        //alert('thank you!');
        $('#thanks4msg').fadeToggle(1000);
        $('#thanks4msg').fadeToggle(6000);

    }

    return (
        <div className='portfolio-footer'>
            <div className='my-contacts container' data-aos='fade-up' data-aos-duration='2000'>
                <h5 id='contactMeA'>Contact Me</h5>
                <div className='footer-CE-div' data-aos='flip-down'>

                    <p className="footer-info-row" data-aos='flip-up'>
                        <label>Email</label>
                        <a className='btn-success btn' href="mailto:gogoahmed13@gmail.com" target="_blank" rel="noopener noreferrer">
                            gogoahmed13@gmail.com
                        </a>
                    </p>

                    <p className="footer-info-row" data-aos='flip-up'>
                        <label>Phone</label>
                        <a className='btn-success btn' href="tel:+201090371068">+201090371068</a>
                    </p>
                    
                    <p className="footer-info-row" data-aos='flip-up'>
                        <label>Linkedin</label>
                        <a className='btn-success btn' href="https://www.linkedin.com/in/ahmed-gohary-a67963192/" target="_blank" rel="noopener noreferrer">
                            Linkedin profile link
                        </a>
                    </p>
                </div>
            </div>
            <div className='message-sender'>
                <div className='titlediv'>
                    <h4>Send me a message !</h4>
                </div>
                <div className='mssageDiv'>
                    <form className='mssage-form' id='MSGForm' onSubmit={handelSubmitMsg}>

                        <div>
                            <label className='form-label' htmlFor="name">Name</label>
                            <input className='form-input' id='name' name='name' type="text" required
                                onChange={(e)=>{setName(e.target.value)}}
                            />
                        </div>
                        <div>
                            <label className='form-label' htmlFor="email">Email</label>
                            <input className='form-input' id='email' name='email' type="text" required
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div>
                            <label className='form-label' htmlFor="message">Message</label>
                            <input className='form-input' id='message' name='message' type="text" required
                                onChange={(e) => { setMessage(e.target.value) }}
                            />
                        </div>
                        <div>
                            <button type='submit' id='sendMssgBtn'>Send</button>
                        </div>

                    </form>
                </div>

                <div className='thanks4msgDiv'>
                    <div id='thanks4msg' style={{ display: 'none' }}>
                        <h5>Thank You</h5>
                        <p>I'll get back to you as soon as possible</p>
                    </div>
                </div>

            </div >
        </div>
    );
}

export default Footer;
