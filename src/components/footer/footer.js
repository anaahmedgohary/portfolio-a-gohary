import React from 'react';
import "./style/footer.css";

const Footer = () => {
    return (
        <div className='portfolio-footer'>
            <div className='my-contacts container'>
                <h5>Contact</h5>
                <div>
                    <p className="footer-info-row">
                        <strong>Email:   </strong>
                        <a className='btn-success btn' href="mailto:gogoahmed13@gmail.com" target="_blank" rel="noopener noreferrer">
                            gogoahmed13@gmail.com
                        </a>
                    </p>
                    <p className="footer-info-row">
                        <strong>Phone: </strong>
                        <a className='btn-success btn' href="tel:+201090371068">+201090371068</a>
                    </p>
                    
                    <p className="footer-info-row">
                        <strong>Linkedin:</strong>
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
