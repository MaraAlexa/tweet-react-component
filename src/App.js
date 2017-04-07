import React from 'react';
import Tweet from './components/tweet/Tweet';
import AddressLabel from './components/address/AddressLabel';
const dataTweet = {
    message: "Something about dogs",
    gravatar: "mara",
    author: {
        handle: "dogperson",
        name: "DogLover123"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2017-01-11 21:30:45"
}

const person = {
  name: 'Full Name',
  street: '123 Fake St.',
  city: 'Boston',
  postalCode: 'MA 02118'
}

// begin envelope exercise

class App extends React.Component {
  render() {
    return(
      <div>
        <Tweet tweet={dataTweet}/>
        <AddressLabel person={person} />
      </div>
    )
  }
}

export default App;
