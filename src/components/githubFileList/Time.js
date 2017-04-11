import React from 'react';
import moment from 'moment';

class Time extends React.Component{
    computeTimeString() {
        return moment(this.props.time).fromNow();
    }
    render(){
        return(
            <span className="time">
                {this.computeTimeString()}
            </span>
        )
    }
}

// Proptypes
Time.proptypes = {
  time: React.PropTypes.string.isRequired
}

export default Time;
