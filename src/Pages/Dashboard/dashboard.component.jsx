import React from 'react';

import './dashboard.styles.scss';

import { FaDatabase } from "react-icons/fa";
import { GiWhirlpoolShuriken } from 'react-icons/gi';
import { AiFillDollarCircle } from 'react-icons/ai';
import  { GiHoodedFigure } from 'react-icons/gi';


const Dashboard = () => (
    <div className='dashboard-content'>
      <div className='header'><h1>Dashboard</h1>
      <input type='search'></input>
      </div>
      <div className='content-item'>
        <h1></h1>
        <div className='logo-circ'>
          <div className='logo-inner'>
          <FaDatabase size={40} color='black'/>
          </div>
          </div>
      </div>


    <div className='content-item cont-item-2'>
    <div className='logo-circ'>
      <div className='logo-inner'>
        <AiFillDollarCircle size={40} />
      </div>
     </div>
    </div>


    <div className='content-item cont-item-3'>
    <div className='logo-circ'>
    <div className='logo-inner'>
        <GiHoodedFigure size={40} />
        </div>
      </div>
    </div>


    <div className='content-item cont-item-4'>
      <div className='logo-circ circ-bottom'>
      <div className='logo-inner'>
        </div>
      </div>
      <div className='logo-circ circ-bottom'>
      <div className='logo-inner'>
        
        </div>
      </div>
      <div className='logo-circ circ-bottom'>
      <div className='logo-inner'>
        
        </div>
      </div>
     </div>

     </div>
)

export default Dashboard;