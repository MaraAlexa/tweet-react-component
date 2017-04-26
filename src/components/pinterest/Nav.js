import React from 'react'
import NavItem from './NavItem';

const Nav  = ({navData}) =>
    <div>
      {<NavItem linksData={navData} />}
    </div>

export default Nav;
