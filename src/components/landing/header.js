import React from 'react'
import "./style/style.css"

function Header()
{
    return (
      <>
        <header class="mheader">
          <h1>Ahmed Gohary</h1>
          <h6>Frontend Web Developer</h6>

          <div class="personal-image">
            <img class="profile-img" src="./images/000.jpg" alt="" />
          </div>

          <div class="und-pic">
            <div class="hi-myname">
              <img src="./images/Hi-my-name-is-Ahmed-8-10-20225.png" alt="" />
            </div>

            <div class="contact-container">
              <h3>Contact Information</h3>
              <p class="info-row">
                <strong>Email:</strong> gogoahmed13@gmail.com
              </p>
              <p class="info-row">
                <strong>Phone:</strong> +201090371068
              </p>
              <p class="info-row">
                <strong>Address:</strong> Cairo, Egypt
              </p>
              <p class="info-row">
                <strong>Github:</strong> github.com/anaahmedgohary
              </p>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header