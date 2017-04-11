import React from 'react';
import {css} from 'glamor';


function FileName ({ file }) {
  return (
    <span>{file.name}</span>
  )
}

// Proptypes VALIDATIONS
FileName.proptypes = {
  file: React.PropTypes.object.isRequired
}

export default FileName;
