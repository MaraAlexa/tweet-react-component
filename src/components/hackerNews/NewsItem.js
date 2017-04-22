import React from 'react';
import Time from '../tweet/Time';

class NewsItem extends React.Component {

  render(){
    let item = this.props.item
    return(
      <div>
        <h3>{item.title}</h3>
        <p>{item.url}</p>
        <span>{item.points}</span>
        <span> by {item.author} </span>
        <Time time={item.timestamp} isUnixTime={true}/>
        <span> comments {item.comments}</span>
      </div>
    )
  }
}

export default NewsItem;
