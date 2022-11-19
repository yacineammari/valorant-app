import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <h4>Valorant App</h4>
        <hr/>
        <div className='footer-info-container'>
            <div className='about-section'>
                <h4>About</h4>
                <p>
                Valorant-API is a non-official API and not endorsed by Riot Games in any way.
                This Website is an unofficial fan site of Valorant that use the Valorant-API.
                2020-2022 riot games, inc. riot games, valorant, and any associated logos are trademarks, service marks, and/or registered trademarks of riot games, inc.
                </p>
            </div>
            <div className='links-section'>
                <h4>Links</h4>
                <a href='https://valorant-api.com/' target='_blank'>Valorant-API</a>
                <a href='https://www.linkedin.com/in/ammari-yacine-858439156/' target='_blank'>My Linkedin</a>
                <a href='https://github.com/yacineammari' target='_blank'>My Github</a>
            </div>
        </div>
        <hr/>
        <span>© 2022 Yacine Ammari</span>
    </div>
  )
}

export default Footer