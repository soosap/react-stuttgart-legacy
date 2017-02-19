import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      
      <div>
        <h1 className="ui inverted centered header">#ReactStuttgart-Team</h1>  
        <div className="ui inverted right floated horizontal list">
          <div className="disabled item" href="#">© ReactStuttgart </div>
          <a className="item" href="#">Terms</a>
          <a className="item" href="#">Community</a>
          <a className="item" href="#">Contact Us</a>
        </div>
        <div className="ui inverted horizontal list">
          <a className="item" href="#">About Us</a>
          <a className="item" href="#">Be a Speaker</a>
        </div>
      </div>
     
    );
  }
}

export default Footer;
