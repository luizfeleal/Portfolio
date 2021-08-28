import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import './App.css';

function App() {
  const [ativaCor, setAtivaCor] = useState(false);
  useEffect(function() {


    function posicaoScroll() {
        if (window.scrollY > 10) {
            setAtivaCor(true);
        } else {
            setAtivaCor(false);
        }
    }

    window.addEventListener('scroll', posicaoScroll);
}, []);
  return (
    <>
    <Router>
      <Navbar action={ativaCor} />
      <Switch>
        <Route path="/" component= 
        {Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
