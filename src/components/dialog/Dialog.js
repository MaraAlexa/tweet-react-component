import React from 'react';
import Title from './Title';
import Body from './Body';
import Footer from './Footer';
import {css} from 'glamor';

let dialogStyle = css({
  border: '1px solid gray',
  padding: '10px',
})

function Dialog({children}){
  // check if children are  of type <Title> <Body> and <Footer>
  let title, body, footer;
  title = body = footer = null;
  // React provides utility functions for "dealing with the Children Data"
  React.Children.forEach(children, (child) => {
    switch (child.type) {
      case Title:
        title = child;
        break;
      case Footer:
        footer = child;
        break;
      case Body:
        body = child;
        break;
      default:
        throw new Error("Dialog can only contain Title, Body and Footer components")
    }
  })

  return(
    <div {...dialogStyle}>
      <div>{title}</div>
      <div>{body}</div>
      <div>{footer}</div>
    </div>
  )
}

export default Dialog;
