import React from 'react';
import PropTypes from 'prop-types';

function Contact(props){
    return(
        <div className="Contact">         
            <img className="avatar" 
            src={props.avatar} alt={props.alt} />
        <div className="status status-text">   
          <p className="name">{props.name}</p>
          <span className={props.online ? 'status-online' : 'status-offline'}></span>
          <p className='status-text'>{props.online ? 'online' : 'offline'}</p>     
        </div> 

      </div>  
    );

}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  online: PropTypes.bool,
};


export default Contact;