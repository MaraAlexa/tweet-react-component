import React from 'react';
import {css} from 'glamor';

let boxStyling = css({
  border: '1px solid blue',
  padding: "10px",
  margin: "10px",
  width: "450px"
})

function ErrorBox({children}) {
  return(
    <div {...boxStyling}>{children}</div>
  )
}

export default ErrorBox;
