const newsItem1 = {
  id: 1,
  title: 'Why I am suing the US Government',
  link: 'bunniesstudios.com',
  points: 1346,
  author: 'Ivank',
  updated_at: '2017-04-18 09:28:09',
  flag: 'flag',
  hide: 'hide',
  numberOfComments: 257,
  instapaper: 'instapaper',
  saveToPocket: 'save to pocket'
};

const newsItem2 = {
  id: 2,
  title: 'A practical security guide for web developers',
  link: 'github.com',
  points: 1096,
  author: 'zian',
  updated_at: '2017-04-18 09:50:19',
  flag: 'flag',
  hide: 'hide',
  numberOfComments: 123,
  instapaper: 'instapaper',
  saveToPocket: 'save to pocket'
};

const newsItem3 = {
  id: 3,
  title: 'Super formula',
  link: 'wikipedia.org',
  points: 887,
  author: 'someother',
  updated_at: '2017-03-18 5:40:10',
  flag: 'flag',
  hide: 'hide',
  numberOfComments: 13,
  instapaper: 'instapaper',
  saveToPocket: 'save to pocket'
};

const newsItems = [
  newsItem1, newsItem2,newsItem3
];

const headerLinks = [
  {id:1, link:'new'}, {id: 2, link: 'comments'},
  {id: 3, link: 'show'}, {id:4, link: 'ask'},
  {id: 5, link: 'jobs'}, {id: 6, link: 'submit'}
];
const logo = 'http://logo-react.com';
const title = 'Hacker News';

const hackerNewsData = {
    logo, title, headerLinks,newsItems
}


export default hackerNewsData;
