import React from 'react';
import IconButton from './IconButton';
import Time from './Time';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import LikeButton from './LikeButton';
import MoreOptionsButton from './MoreOptionsButton';
import Message from './Message';
import NameWithHandle from './NameWithHandle';
import Avatar from './Avatar';


class Tweet extends React.Component {
    render(){
        const { tweet } = this.props;
        return(
            <div className="tweet">
                <Avatar username={tweet.gravatar}/>
                <div className="content">
                    <NameWithHandle author={tweet.author}/>
                    <Time time={tweet.timestamp}/>
                    <Message message={tweet.message}/>
                    <div className="buttons">
                        <ReplyButton />
                        <RetweetButton count={tweet.retweets}/>
                        <LikeButton count={tweet.likes}/>
                        <MoreOptionsButton />
                        <IconButton>Do something</IconButton>
                    </div>
                </div>
            </div>
        )
    }
}


// PROPTYPES VALIDATIONS
// check that count is a number
LikeButton.propTypes = {
  count: React.PropTypes.number
}

RetweetButton.propTypes ={
  count: React.PropTypes.number
}

NameWithHandle.propTypes = {
  author: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    handle: React.PropTypes.string.isRequired
  }).isRequired
}

Avatar.propTypes = {
  username: React.PropTypes.string
}

Tweet.propTypes = {
  tweet: React.PropTypes.shape({
    message: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.string.isRequired
  }).isRequired
}

export default Tweet;
