import React from 'react';
import { css } from 'glamor';

let creditCardStyle = css({
  background: 'blue',
  borderRadius: '8px',
  width: '450px',
  padding: '30px',
  marginTop: '20px',
  color: 'whitesmoke'
})

let h1ToRight = css({
  position: 'relative',
  left: '230px',
  top: '0px'
})

class CreditCard extends React.Component {
  render(){
    const { name, expirationDate, cardNumber, bankName } = this.props.cardInfo;
    return (
      <div className={`${creditCardStyle}`}>
        <h1 {...h1ToRight}>{bankName}</h1>
        <p>{cardNumber}</p>
        <p>Valid thru {expirationDate}</p>
        <p>{name}</p>
      </div>
    )
  }
}

export default CreditCard;
