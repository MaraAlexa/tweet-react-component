import React from 'react'
import {css} from 'glamor'
import Sidebar from './Sidebar'
import Content from './Content'

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

class Layout extends React.Component {

  constructor(props){
    super(props);
    // initial state
    this.state = {
      isSidebarHidden: false,
      text: ''
    }
  }
  // change of state functions
  toggleSidebar = () => {
    this.setState({
      isSidebarHidden: !this.state.isSidebarHidden //the opossite of the current state
    })
  }

  handleChange = (e) =>{
    let value = e.target.value
    this.setState({
      text: value.replace(/[0-9]/g, '')
    })
  }

  render(){
    return(
      <div {...layoutStyle}>
        {
          !this.state.isSidebarHidden ? <Sidebar /> : console.log('Sidebar is hidden')
        }

        <Content onToggleHide={this.toggleSidebar} inputValue={this.state.text} handleChange={this.handleChange} />

      </div>
    )
  }
}

export default Layout;
