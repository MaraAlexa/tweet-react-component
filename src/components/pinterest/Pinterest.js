import React from 'react';
import Nav from './Nav';
import CardList from './CardList';
import { css } from "glamor";

let pinterestStyle = css({
  border: "2px solid red",
})

class Pinterest extends React.Component{
  render(){

    return(
      <div {...pinterestStyle}>
        <div className="board-title">
          <img src="http://placehold.it/100x100" alt="logo"/>
          <h1>{this.props.data.titleBoard}</h1>
        </div>
        <div className="nav">
          <Nav navData={this.props.data.nav} />
        </div>

        <CardList cards={this.props.data.content} />

      </div>
    )
  }
}

export default Pinterest;
