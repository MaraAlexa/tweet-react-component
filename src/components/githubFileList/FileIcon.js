import React from 'react';
import {css} from 'glamor';


function FileIcon ({ file }) {
  // make a var called icon and assign it to the code for the file icon
  // if the icon its of type folder, assign icon to the code for a folder icon
  let icon = 'fa-file-text-o';
  if(file.type === 'folder') {
    icon = 'fa-folder';
  }
  return (
      <i className={ `fa ${icon}`}/>  
  )
}

// Proptypes VALIDATIONS
FileIcon.proptypes = {
  file: React.PropTypes.object.isRequired
}

export default FileIcon;
