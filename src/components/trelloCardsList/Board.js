import React from 'react';
import List from './../trelloSingleCard/List';

class Board extends React.Component {
  render(){
    let { board: {name, lists} } = this.props;
    return(
      <div className="board">
        <h4 className="board-title">{name}</h4>
        <div className="board-lists">

          {lists.map(list =>
            <List key={list.id} list={list} />
                    )}
        </div>
      </div>
    )
  }
}

export default Board;
