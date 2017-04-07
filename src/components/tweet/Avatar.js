import React from 'react';

class Avatar extends React.Component {
    render(){
        const url = `https://www.gravatar.com/avatar/${this.props.username}`
        return(
            <img
                src={url}
                className="avatar"
                alt="avatar"
            />
        )
    }
}

export default Avatar;
