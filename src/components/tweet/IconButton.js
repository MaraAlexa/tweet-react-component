import React from 'react';

function IconButton(props){
  return(
    <button>
      <i className="target-icon"></i>
      { props.children }
    </button>
  )
}

export default IconButton;
