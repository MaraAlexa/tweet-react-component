import React from 'react';
import {css} from 'glamor';

let commitMessageStyle = css({
  paddingLeft: '10px',
  overflow: 'hidden'
})

function CommitMessage ({ commit }) {

  return (
    <span {...commitMessageStyle}>{commit.message}</span>
  )
}

// Proptypes VALIDATIONS
CommitMessage.proptypes = {
  file: React.PropTypes.object.isRequired
}

export default CommitMessage;
