import React from 'react';

class Content extends React.Component {

  render(){
    return(
      <div className='content'>
        <h1>Content</h1>
        <button onClick={this.props.onToggleHide}>Hide Sidebar</button>

        <input type="text" value={this.props.inputValue} onChange={this.props.handleChange}/>
        <p>Current input state: {this.props.inputValue}</p>
      </div>
    )
  }
}

export default Content;
