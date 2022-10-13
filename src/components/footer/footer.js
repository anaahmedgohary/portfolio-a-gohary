import React from 'react';
import "./style/footer.css";

const Footer = () => {
    return (
        <div className='portfolio-footer'>
            <div className='my-contacts container'>
                <h5>Contact Me</h5>
                <div className='footer-CE-div'>
                    <p className="footer-info-row">
                        <label>Email</label>
                        <a className='btn-success btn' href="mailto:gogoahmed13@gmail.com" target="_blank" rel="noopener noreferrer">
                            gogoahmed13@gmail.com
                        </a>
                    </p>
                    <p className="footer-info-row">
                        <label>Phone</label>
                        <a className='btn-success btn' href="tel:+201090371068">+201090371068</a>
                    </p>
                    
                    <p className="footer-info-row">
                        <label>Linkedin</label>
                        <a className='btn-success btn' href="https://www.linkedin.com/in/ahmed-gohary-a67963192/" target="_blank" rel="noopener noreferrer">
                            Linkedin profile link
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
