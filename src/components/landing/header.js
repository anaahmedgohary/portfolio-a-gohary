import React from 'react'
import "./style/style.css"

function Header()
{
    return (
      <>
        <header className="mheader">
          <h1 className='my-name-title'>Ahmed Gohary</h1>
          <h6 className='my-job-title'>Frontend Web Developer</h6>

          <div className="personal-image">
            <img className="profile-img" src="./images/000.jpg" alt="profile pic" />
          </div>

          <div className="und-pic">
            <div className="contact-container">
              <h3>Contact Information</h3>
              <div className='info-rows'>
                <p className="info-row">
                  <strong>Email:</strong> gogoahmed13@gmail.com
                </p>
                <p className="info-row">
                  <strong>Phone:</strong> +201090371068
                </p>
                <p className="info-row">
                  <strong>Address:</strong> Cairo, Egypt
                </p>
                <p className="info-row">
                  <strong>
                    <a className='header-con-link' href="https://www.linkedin.com/in/ahmed-gohary-a67963192/" target="_blank" rel="noopener noreferrer">
                    Linkedin
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header