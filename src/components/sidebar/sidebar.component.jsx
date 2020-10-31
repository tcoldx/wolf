import React from 'react';

import './sidebar.styles.scss';
import { withRouter } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const SideBar = ( {history} ) => {
  console.log(history)
  return (
    <div className='sidebar'>
      <div onClick={() => history.push(`/`)}className='sidebar-item'>
        <div className='inner-text'>
      Dashboard
      <FaAngleRight className="icon-re" size={15} color='black'/>
      </div>
      </div>
      <div onClick={() => history.push(`/stealth`)} className='sidebar-item'>
        <div className='inner-text'>
      Stealth
      </div>
      </div>
      <div onClick={() => history.push(`/action`)} className='sidebar-item'>
        <div className='inner-text'>
      Action
      </div>
      </div>
       <div onClick={() => history.push(`/adventure`)} className='sidebar-item'>
         <div className='inner-text'>
      Adventure
      </div>
      </div>
      <div onClick={() => history.push(`/stats`)} className='sidebar-item'>
        <div className='inner-text'>
      Top stats
      </div>
      </div>
    </div>
)
}

export default withRouter(SideBar);
