import React from 'react';

class LifecycleDemo extends React.Component{
  constructor(props){
    super(props);
    // initial state
    this.state = {

      counter: 0
    }
  }
 // all the lifecycle methods:
  componentWillMount = () => {
    console.log('About to mount');
  }
  componentDidMount = () => {
    console.log('Mounted');
  }
  
  componentWillReceiveProps = (nextProps) => {
    console.log('Current Props:', this.props);
    console.log('Next Props:', nextProps);
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('Will Update');
    return true;
  }
  componentWillUpdate = (nextProps, nextState) => {
    console.log('...updating');
  }
  componentDidUpdate = (nextProps, nextState) => {
    console.log('Updated.');
  }
  componentWillUnmount = (nextProps, nextState) => {
    console.log('Goodbye world.');
  }

  // change state function
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
    console.log('rendering to the DOM...')
    return(
      <div>
        <h1>LifecycleDemo</h1>
        <span>
          Counter: {this.state.counter}
        </span>
        <button onClick={this.handleClick}>
          Click to increment
        </button>
      </div>
    )
  }
}

export default LifecycleDemo;
