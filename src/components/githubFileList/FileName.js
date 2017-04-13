import React from 'react';


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
