import React from 'react';

class Content extends React.Component {
  handleClick = () => {
    this.props.onToggleHide(); // setState => isSidebarHidden : true or !true

  }
  render(){
    return(
      <div className='content'>
        <h1>Content</h1>
        <button onClick={this.handleClick}>Hide Sidebar</button>
      </div>
    )
  }
}

export default Content;
