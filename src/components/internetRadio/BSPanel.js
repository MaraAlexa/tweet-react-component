import React from 'react'
import {css} from 'glamor'

const BSPanel = (props) =>
  (
    <div className="panel panel-default genre-cloud">
      <div className="panel-heading">
        <h3 className="panel-title">{props.title}</h3>
      </div>

      <div className="panel-body">
        {props.children}
      </div>
  </div>
  )

export default BSPanel;
