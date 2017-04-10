import React from 'react';
import NavItem from './NavItem';

function Nav({children}) {
  React.Children.forEach(children, (child) => {
    if(child.type !== NavItem) {
      throw new Error('Nav component only accepts NavItems as children')
    }
  })

  // insert a separator between every NavItem
  let items = React.Children.toArray(children);
  for(let i=items.length - 1; i>=1; i--){
    items.splice(i, 0, <span key={i} className='separator'>|</span>)
  }
  return (
    <div>{items}</div>
  )
}

Nav.propTypes = {
  children: React.PropTypes.node.isRequired
}

export default Nav;
