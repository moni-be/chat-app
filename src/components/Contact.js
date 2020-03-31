import React from 'react';

function Contact(){
    return(
        <div className="Contact">         
            <img class="avatar"
              src="https://randomuser.me/api/portraits/women/76.jpg"
              alt="Nelson Muntz" />
        <div class="status status-text">   
          <p class="name">Violet Ford </p>
          <p class="status-text">
            <span class="status-online"></span>
            online
        {/*   <span class="status status-offline">offline</span>  */}
          </p>
        </div> 

      </div>  
    );

}


export default Contact;