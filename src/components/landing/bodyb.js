import React from 'react'

import "./style/bodybstyle.css"

function Bodyb()
{
    return (
        <div className='proj-body'>
            <h1 className='proj-title'>My Projects</h1>

            <div className='container proj-cards'>
                <div class="card proj1-card">
                    <img class="card-img-top card-image" src="./images/vanillaShahdResturant.jpg" alt='website screenpshot' />
                    <div class="card-body">
                        <h5 class="card-title">resturant web app</h5>
                        <p class="card-text">Project of website for resturant web app with vanilla Javascript.</p>
                        <a href="http://shahdresturant.epizy.com/" class="btn btn-primary">Link to project</a>
                    </div>
                </div>

                <div class="card proj2-card">
                    <img class="card-img-top card-image" src="./images/ScreenshotREACTaShahd.jpg" alt='website screenpshot' />
                    <div class="card-body">
                        <h5 class="card-title">resturant web app (REACT)</h5>
                        <p class="card-text">Project of website for resturant web app with REACT JS framework.</p>
                        <a href="https://react-restaurant-git-master-ahmedgohary.vercel.app/" class="btn btn-primary">Link to project</a>
                    </div>
                </div>

                <div class="card proj2-card">
                    <img class="card-img-top card-image" src="./images/reviewSite.jpg" alt='website screenpshot' />
                    <div class="card-body">
                        <h5 class="card-title">Customer reviews web app with vanilla Javascript</h5>
                        <p class="card-text">Project of website for Customer reviews made with with vanilla Javascript.</p>
                        <a href="/review-app" class="btn btn-primary">Link to project</a>
                    </div>
                </div>
            </div>
            <div>
                {/* <div>
                    <h1>
                        Customer reviews web app with vanilla Javascript
                    </h1>
                    <img src="" alt="" srcset="" />
                    <a href="/review-app" target="_blank" rel="noopener noreferrer">Link to project</a>
                </div>
                <div>
                    <h1>
                        resturant web app with REACT JS
                    </h1>
                    <a href="https://react-shahd-git-main-marlojoman.vercel.app/" target="_blank" rel="noopener noreferrer">Link to REACT project</a>
                </div> */}
            </div>

        </div>
    )
}

export default Bodyb