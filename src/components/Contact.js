import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
  render() {
    return (
    <div className="Contact">         
      <img className="avatar" 
      src={this.props.avatar} alt={this.props.alt} />
      <div className="status status-text">   
        <p className="name">{this.props.name}</p>
        <span className={this.state.online ? 'status-online' : 'status-offline'}
              onClick={event => {
                const newOnline = !this.state.online;
                this.setState({online: newOnline});
              }}>  
              {/*    <span className={this.props.online ? 'status-online' : ''}> </span> */}
          </span>    
          <p className='status-text'
          onClick={event => {
                const newOnline = !this.state.online;
                this.setState({online: newOnline});
              }}>{this.state.online ? 'online' : 'offline'}
           </p>  
        
      </div> 

    </div> 
    );
  }

}


export default Contact;

/* function Contact(props){
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
*/