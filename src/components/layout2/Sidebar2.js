import React from 'react'
import {css} from 'glamor'

let sidebarStyle = css({
  '.hidden': {
    display: 'none'
  }
})

const Sidebar2 = ({ hidden, onToggleHide, children}) => (
  <div {...sidebarStyle} className={`sidebar ${hidden ? 'hidden': ''}`}>
    {!hidden && <div className='sidebar__content'>
                  {children}
                  <button onClick={onToggleHide} className="sidebar__hide">Hide</button>
                </div>
      }

    {hidden && <button onClick={onToggleHide} className="sidebar__show">Show</button>}
  </div>
)

export default Sidebar2;
