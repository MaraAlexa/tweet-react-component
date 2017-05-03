import React from 'react'

class Parent extends React.Component {
  constructor(props){
    super(props);
    // initial state
    this.state = {actionCount: 0}
  }
  handleAction = (action) => {
    console.log('Child says:', action);

    this.setState({
      actionCount: this.state.actionCount + 1
    })

  }
  handleReset = () => {
    this.setState({
      actionCount: 0
    })

  }
  render(){
    return(
      <div>
        <Child onAction={this.handleAction} onReset={this.handleReset}/>
        <p>
          Clicked:
          {/* display */}
          {this.state.actionCount}
        </p>
      </div>
    )
  }
}

class Child extends React.Component{
  alertParent = () => {
    this.props.onAction('this is child action')
  }
  resetToZero = () => {
    this.props.onReset();
  }

  render(){
    return(
      <div>
        <button onClick={this.alertParent}>Click Me</button>
        <button onClick={this.resetToZero}>Reset Me</button>
      </div>

    )
  }
}

export default Parent;
