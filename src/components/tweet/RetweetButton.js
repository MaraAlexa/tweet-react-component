import React from 'react';

class RetweetButton extends React.Component{
    render(){
        return(
            <span className="retweet-button">
                <i className="fa fa-retweet" />
                <span className="retweet-count">
                    {this.props.count}
                </span>
            </span>
        )
    }
}

export default RetweetButton;
