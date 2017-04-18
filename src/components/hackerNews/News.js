import React from 'react';
import moment from 'moment';

export default class News extends React.Component{
  render() {
    return(
        <div className="NewsItems">
          {this.props.data.newsItems.map( (newsItem) =>
            <NewsItem key={newsItem.id} item={newsItem} />
          )}
        </div>
    )
  }
}

class NewsItem extends React.Component {
  computeTimeString() {
    return moment(this.props.item.updated_at).fromNow();
  }
  render() {
    const {item} = this.props;
    return(
      <div className="newsItem">
        <ul>
          <li>
            <p>{item.id} {item.title}</p>
            <small>({item.link})</small>
            <small>{item.points} by {item.author} {this.computeTimeString()} | {item.numberOfComments} comments </small>
          </li>
        </ul>
      </div>
    )
  }
}
