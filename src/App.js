import React from 'react';
import Tweet from './components/tweet/Tweet';
import Envelope from './components/envelope/Envelope';
import AddressLabel from './components/address/AddressLabel';
// import data from data folder
import dataTweet from './components/data/dataTweet';
import returnLabel from './components/data/returnLabel';
import recipientLabel from './components/data/recipientLabel';



// begin envelope exercise

class App extends React.Component {
  render() {
    return(
      <div>
        <Tweet tweet={dataTweet}/>
        <Envelope fromPerson={returnLabel} toPerson={recipientLabel} />
      </div>
    )
  }
}

export default App;
