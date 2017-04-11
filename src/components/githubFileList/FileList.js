import React from 'react';
import FileListItem from './FileListItem';
import {css} from 'glamor';

let fileListStyle = css({
  fontFamily: 'Helvetica, arial',
  width: '980px',
  color: '#333',
  margin: '0 auto',
  border: '1px solid #ccc',
  '& td': {borderBottom: '1px solid #ccc'},
  // delete the border bottom from the last item
  borderCollapse: 'collapse'
})


class FileList extends React.Component {

  render(){
    const { files } = this.props;
    return(
      <table {...fileListStyle} className="file-list">
        <tbody>

          { files.map(file => (
            <FileListItem key={file.id} file={file}></FileListItem>
          )) }

        </tbody>
      </table>
    )
  }
}

// PROPTYPES VALIDATIONS
FileList.proptypes = {
  // FileList takes one prop called files which is an array of file objects (githubData)
  files: React.PropTypes.array
}
export default FileList;
