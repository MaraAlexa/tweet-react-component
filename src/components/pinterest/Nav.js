import React from 'react'
import NavItem from './NavItem';

const Nav  = ({data}) =>
    <div>
      {<NavItem data={data} />}
    </div>

export default Nav;
