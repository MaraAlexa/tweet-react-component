import React from 'react';
import Header from './Header';
import News from './News';
// import {css} from 'glamor';

export default class HackerNewsBoard extends React.Component{
  render() {
    const { data } = this.props
    return(
      <div className="news-board">
        <div className="header">
          <Header data={data} />
          <News data={data} />
        </div>
      </div>
    )
  }
}
