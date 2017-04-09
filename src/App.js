import React from 'react';
// import Components
import Tweet from './components/tweet/Tweet';
import Envelope from './components/envelope/Envelope';
import CreditCard from './components/creditCard/CreditCard';
import Poster from './components/poster/Poster';
import SingleLineEmail from './components/email/SingleLineEmail';


// import data from data folder
import dataTweet from './components/data/dataTweet';
import returnLabel from './components/data/returnLabel';
import recipientLabel from './components/data/recipientLabel';
import creditCardData from './components/data/creditCardData';
import posterData from './components/data/posterData';
import emailData from './components/data/emailData';

// begin envelope exercise

class App extends React.Component {
  render() {
    return(
      <div>
        <Tweet tweet={dataTweet}/>
        <Envelope fromPerson={returnLabel} toPerson={recipientLabel} />
        <CreditCard cardInfo={creditCardData}/>
        <Poster posterInfo={posterData}/>
        <SingleLineEmail emailInfo={emailData}/>
      </div>
    )
  }
}

export default App;
