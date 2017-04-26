import React from 'react';
import Card from './Card';
import {css} from 'glamor';

let cardsStyle = css({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  padding: 0,
  '& li': {
    border: "1px solid gray",
    listStyleType: 'none',
    margin: "15px",
    padding: "10px"
  }


})

class CardList extends React.Component{
  render(){
    return(
      <ul {...cardsStyle}>
        {
          this.props.cards.map((item, key) =>
            <Card key={item.id} card={item} /> )
        }

      </ul>
    )
  }
}

export default CardList;
