import React from 'react'
import {css} from 'glamor'
import Sidebar2 from './Sidebar2'
import Content2 from './Content2'

let layoutStyle = css({
  border: '2px solid pink',
  display: 'flex',
  height: '500px',
  '& .sidebar': {
    flex: '1 1 30%',
    background: 'antiquewhite'
  },
  '& .content': {
    flex: '1 1 70%',
    background: 'aliceblue'
  }
})

class Layout2 extends React.Component {

  constructor(props){
    super(props);
    // initial state
    this.state = {
      hidden: false,
    }
  }


  //changing state
  onToggleHide = () => {
    console.log('toggle hide works')
    this.setState({
      hidden: !this.state.hidden //the opossite of the current state
    })
  }

  render(){
    return(
      <div {...layoutStyle}>
        <Sidebar2
          hidden={this.state.hidden} 
          onToggleHide={this.onToggleHide}
        />

        <Content2 />
      </div>
    )
  }
}

export default Layout2;
