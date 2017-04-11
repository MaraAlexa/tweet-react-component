import React from 'react';
import {css} from 'glamor';
import FileName from './FileName';
import FileIcon from './FileIcon';
import CommitMessage from './CommitMessage';
import Time from './Time';

let fileLitsItemStyle = css({
  padding: '4px',
  maxWidth: '180px'

})

class FileListItem extends React.Component {

  render(){
    const { file } = this.props;
    return(
      <tr className="file-list-item">
        <td className="file-name">
          <FileIcon file={file} />
        </td>
        <td {...fileLitsItemStyle} className="file-name">
          <FileName file={file} />
        </td>
        <td>
          <CommitMessage commit={file.latestCommit}/>
        </td>
        <td>
          <Time time={file.updated_at}/>
        </td>

      </tr>
    )
  }
}

// Proptypes VALIDATIONS
FileListItem.proptypes = {
  file: React.PropTypes.object.isRequired
}

export default FileListItem;
