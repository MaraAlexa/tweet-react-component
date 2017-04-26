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

        <div className="nav">
          <Nav data={this.props.data} />
        </div>

        <CardList />

      </div>
    )
  }
}

export default Pinterest;
