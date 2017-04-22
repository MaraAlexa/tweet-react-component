import React from 'react';
import NewsItem from './NewsItem';

class NewsList extends React.Component {
  render() {
    return (
        <ol>
          {
            this.props.news.map(item =>
              <NewsItem key={item.id} item={item} />
            )
          }
        </ol>
    )
  }
}

export default NewsList;
