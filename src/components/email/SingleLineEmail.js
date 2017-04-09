import React from 'react';
import { css } from 'glamor';

let displayInline = css({
  display: 'flex',
  justifyContent: 'space-between',
  '& input': { marginTop: '20px', position: 'relative', top: '20px' }
})
let messageStyle = css({
  color: 'gray',
  marginLeft: '50px'

})

class SingleLineEmail extends React.Component {
  render(){
    const { sender, subject, date, message } = this.props.emailInfo
    return(
      <div className="email">
        <hr/>
        <div {...displayInline}>
          <input type="checkbox"/>
          <p>{sender}</p>
          <p>{subject}</p>
          <p>{date}</p>
        </div>
        <p {...messageStyle}>{message}</p>
        <hr/>
      </div>
    )
  }
}

export default SingleLineEmail;
