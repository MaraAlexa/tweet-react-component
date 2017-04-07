import React from 'react';

class AddressLabel extends React.Component {
  render(){
    const { person } = this.props
    return(
      <div>
        <p>{person.name}</p>
        <p>{person.street}</p>
        <p>{person.city}, {person.postalCode}</p>
      </div>
    )
  }
}

export default AddressLabel;
