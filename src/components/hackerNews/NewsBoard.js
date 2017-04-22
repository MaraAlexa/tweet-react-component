import React from 'react';
import Header from './Header';
import NewsList from './NewsList';


class NewsBoard extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <NewsList news={this.props.data}/>
      </div>
    )
  }
}

export default NewsBoard;
