import React from 'react';
import Title from './Title';
import Body from './Body';
import Footer from './Footer';

function Dialog({children}){
  // check if children are  of type <Title> <Body> and <Footer>
  let title, body, footer;
  title = body = footer = null;

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
    <div>
      <div>{title}</div>
      <div>{body}</div>
      <div>{footer}</div>
    </div>
  )
}

export default Dialog;
