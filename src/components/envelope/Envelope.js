import React from 'react';
import AddressLabel from '../address/AddressLabel';
import Stamp from './Stamp';
import { css } from 'glamor';

let receiverStyle = css({
  color: 'blue',
  marginLeft: '300px'
})

let envelopeStyle = css({
  marginTop: '3rem',
  border: '1px solid black',
  padding: '20px'
})


class Envelope extends React.Component {
  render() {
    const {toPerson, fromPerson} = this.props;
    return(
      <div className={`${envelopeStyle}`}>
        <AddressLabel className='from-label' mailingLabel={fromPerson} />
        <AddressLabel className={`to-label ${receiverStyle}`} mailingLabel={toPerson} />
        <Stamp />
      </div>
    )
  }
}


export default Envelope;
