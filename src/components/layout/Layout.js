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
      isSidebarHidden: false
    }
  }

  toggleSidebar = () => {
    this.setState({
      isSidebarHidden: !this.state.isSidebarHidden
    })
  }
  render(){
    return(
      <div {...layoutStyle}>
        {
          !this.state.isSidebarHidden ? <Sidebar /> : null
        }

        <Content onToggleHide={this.toggleSidebar} />
      </div>
    )
  }
}

export default Layout;
