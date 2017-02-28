import React from 'react';
import {Link} from 'react-router';

class ContactPage extends React.Component{
  render(){
    return (
      <div>
        <h3>Contact Us</h3>
        <p>Gaurav Kulkarni</p>
        <Link to="about" className="btn btn-primary btn-lg"> About Us </Link>
      </div>
    );
  }
}

export default ContactPage;
