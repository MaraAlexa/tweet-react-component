import React from 'react';
import logo from '../img/react-logo.svg';
import { css } from 'glamor';

let posterStyle = css({
  width: '400px',
  border: '1px solid black',
  marginTop: '30px',
  background: 'black',
  color: 'white',
  textAlign: 'center',
  '& img': {
    width: '100px', display: 'block',
    margin: '10px auto', border: '1px solid lightblue',
    padding: '25px 50px'
  }
})

class Poster extends React.Component {
  render(){
    const { title, text } = this.props.posterInfo
    return (
      <div {...posterStyle}>
        {/* <img src={require('../img/react-logo.svg')} alt="" /> */}
        <img src={logo} alt=""/>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    )
  }
}

export default Poster;
