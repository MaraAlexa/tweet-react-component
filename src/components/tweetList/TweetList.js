import React from 'react';
import Tweet from '../tweet/Tweet';
import {css} from 'glamor';

let tweetListStyle = css({
  marginTop: '30px'
})


function TweetList({tweets}) {
  return(
    <div {...tweetListStyle}>
      {
        tweets.map(tweet =>
          <div key={tweet.id}>
            <Tweet tweet={tweet} />
          </div>
        )
      }
    </div>
  )
}

// PROPTYPES VALIDATIONS
TweetList.proptypes = {
  // FileList takes one prop called files which is an array of file objects (githubData)
  tweets: React.PropTypes.array
}
export default TweetList;
