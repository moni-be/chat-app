import React from 'react';

function Contact(){
    return(
        <div className="Contact">         
            <img class="avatar"
              src="https://randomuser.me/api/portraits/women/76.jpg"
              alt="Nelson Muntz" />      
            <p class="name">Violet Ford</p> 
            <div class="status status-text">
              <span class="status status-online">online</span> 
              <span class="status status-offline">offline</span> 
            </div>
      </div>
    );

}


export default Contact;