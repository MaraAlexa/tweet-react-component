import React from 'react';
import { css } from 'glamor';

let stampStyle = css({
  position: 'absolute',
  top: 240,
  right: 100,
  border: "1px solid black",
  padding: 20,
  width: 80,
  textAlign: "center"
})


class Stamp extends React.Component {
  render(){
    return(
      <div {...stampStyle} className="stamp">Stamp</div>
    )
  }
}

export default Stamp;

// .stamp {
//
// }
