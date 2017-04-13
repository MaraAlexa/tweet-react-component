import React from 'react';

class List extends React.Component {
  render(){
    return(
      <div className="board">
        <h4 className="title">{this.props.list.title}</h4>

        <ul>
          {
            this.props.list.cards.map( (card) =>
              <li key={card.id}>{card.title}</li>
          )
          }
        </ul>
      </div>
    )
  }
}

export default List;
