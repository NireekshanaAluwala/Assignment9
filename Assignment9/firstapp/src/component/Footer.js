import React from 'react';

const Footer = (props) => {
    return (
        <React.Fragment>
          <center>
              <hr/>
    <h3> &copy; Nireekshana {props.year}  {props.month}</h3>
          </center>
          <hr/>
        </React.Fragment>
    )
}
export default Footer;