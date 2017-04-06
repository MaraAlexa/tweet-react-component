import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import './index.css';
// BEGIN PROPTYPES
class Time extends React.Component{
    computeTimeString() {
        return moment(this.props.time).fromNow(); //;
    }
    render(){
        return(
            <span className="time">
                {this.computeTimeString()}
            </span>
        )
    }
}

class ReplyButton extends React.Component{
    render(){
        return(
            <i className="fa fa-reply reply-button" />
        )
    }
}
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
class MoreOptionsButton extends React.Component{
    render(){
        return(
            <i className="fa fa-ellipsis-h more-options-button" />
        )
    }
}


class Message extends React.Component {
    render(){
        return(
            <div className="message">
                {this.props.message}
            </div>
        )
    }
}

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
                    </div>
                </div>
            </div>
        )
    }
}

const dataTweet = {
    message: "Something about dogs",
    gravatar: "mara",
    author: {
        handle: "dogperson",
        name: "DogLover123"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2017-01-11 21:30:45"
}

ReactDOM.render(
  <Tweet tweet={dataTweet}/>,
  document.getElementById('root')
);
