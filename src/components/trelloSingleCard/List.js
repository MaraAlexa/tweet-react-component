import React from "react";
import {css} from 'glamor';

let boardStyle = css({
  border: '3px solid #00BCD4',
  marginTop: '30px',
  width: '300px',
  padding: '20px',
  background: 'lightgray',
  '& .title-wrap': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  '& .card-list': {
    listStyle: 'none',
    padding: '0',
    '& li': {
      background: 'white',
      margin: '10px auto',
      padding: '5px',
      borderRadius: '4px',
      boxShadow: '0px 2px 3px gray'
    }
  },
  '& a': {
    textDecoration: 'none',
    color: 'gray'
  }

})

class List extends React.Component {
  render() {
    const { title, cards } = this.props.list;
    return (
      <div className="board" {...boardStyle}>

        <div className="title-wrap">
          <h4 className="title">{title}</h4>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <ul className='card-list'>
          {cards.map(card => (
            <li key={card.id}>{card.title}</li>
          ))}
        </ul>
        <a href="#">Add a card...</a>

      </div>
    );
  }
}

export default List;
