import React from 'react';

class NameWithHandle extends React.Component {
    render(){
        // take the name and the handle proprieties from the author obj and assign them to vars called naame and handle
        const {name, handle} = this.props.author;
        return(
            <span className="name-with-handle">
                <span className="name">{name}</span>
                <span className="handle">@{handle}</span>
            </span>
        )
    }
}

export default NameWithHandle;
