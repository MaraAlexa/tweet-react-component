import React from 'react';

class LikeButton extends React.Component{
    render(){
        const { count } = this.props;
        return(
            <span className="like-button">
                <i className="fa fa-heart" />
                <span className="like-count">
                  { count ? count : null }
                </span>
            </span>
        )
    }
}

export default LikeButton;
