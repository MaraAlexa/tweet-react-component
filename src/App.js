import React from 'react';
// import Components
import Tweet from './components/tweet/Tweet';

import Envelope from './components/envelope/Envelope';
import CreditCard from './components/creditCard/CreditCard';
import Poster from './components/poster/Poster';
import SingleLineEmail from './components/email/SingleLineEmail';
import Nav from './components/nav/Nav';
import NavItem from './components/nav/NavItem';
import ErrorBox from './components/error/ErrorBox';
import Dialog from './components/dialog/Dialog';
import Title from './components/dialog/Title';
import Body from './components/dialog/Body';
import Footer from './components/dialog/Footer';
import Toggle from './components/toggle/Toggle';
import FileList from './components/githubFileList/FileList';
import TweetList from './components/tweetList/TweetList';
import Board from './components/trelloCardsList/Board';
import NewsBoard from './components/hackerNews/NewsBoard';
import Pinterest from './components/pinterest/Pinterest';
import GenreCloud from './components/internetRadio/GenreCloud';
import Parent from './components/counter/Parent';
import Layout from './components/layout/Layout';
import LifecycleDemo from './components/lifecycle/LifecycleDemo';



// import data from data folder
import dataTweet from './components/data/dataTweet';
import returnLabel from './components/data/returnLabel';
import recipientLabel from './components/data/recipientLabel';
import creditCardData from './components/data/creditCardData';
import posterData from './components/data/posterData';
import emailData from './components/data/emailData';
import githubData from './components/data/githubData';
import tweetListData from './components/data/tweetListData';
import board from './components/data/trelloAllCards';
import hackerNewsData from './components/data/hackerNewsData';
import pinterestData from './components/data/pinterestData';
import genresData from './components/data/genresData';


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
        <Nav>
          <NavItem url='/'>Home</NavItem>
          <NavItem url='/about'>About</NavItem>
          <NavItem url='/contact'>Contact</NavItem>
        </Nav>
        <ErrorBox>
          <p>Something has gone wrong</p>
          <p>Really bad!</p>
        </ErrorBox>

        <Dialog>
          <Title>Important Title</Title>
          <Body>Some content</Body>
          <Footer>Footer</Footer>
        </Dialog>

        <Toggle />

        <FileList files={githubData}></FileList>

        <TweetList tweets={tweetListData}></TweetList>
        <Board board={board} />
        <NewsBoard data={hackerNewsData}/>

        <Pinterest data={pinterestData} />

        <GenreCloud genres={genresData}/>
        <Parent />
        <Layout />
        <LifecycleDemo />

      </div>
    )
  }
}

export default App;
