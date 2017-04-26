import React from 'react';
import {css} from 'glamor';

let navStyle = css({

    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    width: "100%",
    background: 'pink'

})

const NavItem  = ({data}) => {
  console.log(data.nav);
  return <div {...navStyle}>
    <p>Boards: {data.nav.no_of_boards}</p>
    <p>Pins: {data.nav.pins}</p>
    <p>Pins: {data.nav.likes}</p>
    <p>Pins: {data.nav.followers}</p>
    <p>Pins: {data.nav.following}</p>

  </div>
}


export default NavItem;
