import React from 'react';
import {css} from 'glamor';

let navStyle = css({

    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    width: "100%",
    background: 'pink'

})

const NavItem  = ({linksData}) => {
  return <div {...navStyle}>
      <p>Boards: {linksData.no_of_boards}</p>
      <p>Pins: {linksData.pins}</p>
      <p>Likes: {linksData.likes}</p>
      <p>Followers: {linksData.followers}</p>
      <p>Following: {linksData.following}</p>

    </div>
}


export default NavItem;
