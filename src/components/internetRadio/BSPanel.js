import React from 'react'
import {css} from 'glamor'

const BSPanel = ({title, children}) =>
  (
    <div className="panel panel-default genre-cloud">
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>

      <div className="panel-body">
        {children}
      </div>
  </div>
  )

export default BSPanel;
