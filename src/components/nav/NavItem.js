import React from 'react';

function NavItem({children, url}) {
  return(
    <a href={url}>{children}</a>
  )
}

export default NavItem;
