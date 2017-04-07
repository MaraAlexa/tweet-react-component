import React from 'react';

class AddressLabel extends React.Component {
  render(){
    var {name, street, city, postalCode} = this.props.mailingLabel;
    return(
      <div className={`mailing-label ${this.props.className}`}>
        <p>{name}</p>
        <p>{street}</p>
        <p>{city}, {postalCode}</p>
      </div>
    )
  }
}

export default AddressLabel;
