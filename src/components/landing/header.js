import React from 'react'
import "./style/style.css"

function Header()
{
    return (
      <>
        <header class="mheader">
          <h1>Ahmed Gohary</h1>

          <div class="personal-image">
            <img class="profile-img" src="./images/000.jpg" alt="" />
          </div>

          <div class="und-pic container">
            <div class="hi-myname">
              <img src="./images/Hi-my-name-is-Ahmed-8-10-20225.png" alt="" />
            </div>

            <div class="contact-container container">
              <div class="contact-info">
                <h3>Contact Information</h3>
                <p class="column">Email: gogoahmed13@gmail.com</p>
                <p class="column">phone: +201155267277</p>

                <p class="column">Address: Cairo, Egypt</p>
                            <p class="column">github.com
                                /anaahmedgohary</p>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header