// This is the gihubFileList data ( an array of objects. Each object is a file with its name,id, type, latestCommit etc )
const githubData = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2017-01-12 21:34:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2017-04-10 21:34:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2017-03-19 21:34:00',
    latestCommit: {
      message: 'Added a readme'
    }
  },
];


export default githubData;
