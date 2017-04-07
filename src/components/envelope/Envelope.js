import React from 'react';
import AddressLabel from '../address/AddressLabel';
import Stamp from './Stamp';

class Envelope extends React.Component {
  render() {
    const {toPerson, fromPerson} = this.props;
    return(
      <div className="envelope">
        <AddressLabel className='from-label' mailingLabel={fromPerson} />
        <AddressLabel className='to-label' mailingLabel={toPerson} />
        <Stamp />
      </div>
    )
  }
}


export default Envelope;
