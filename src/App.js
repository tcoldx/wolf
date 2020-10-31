import React, {useEffect, useState} from 'react';
import './App.css';


import SideBar from './components/sidebar/sidebar.component';
import Content from './components/Content/content.component';
import { BrowserRouter as Router, Switch, Route, link} from "react-router-dom"; 
import { render } from '@testing-library/react';


function App() {

  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  
  const initialUrl = 'dragon-ball-api.herokuapp.com/api'

// similar to ComponentDidUpdate and ComponentDidMount
  
    return (
    <div className='App'>
    <Router>
  <div className='app-container'>
    <SideBar/>
    <Content>
    </Content>
  </div>
  </Router>
  </div>
    )
  }
  export default App;
