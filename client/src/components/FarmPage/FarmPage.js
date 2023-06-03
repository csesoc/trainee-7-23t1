import React from 'react';
import Pet from './Pet';
import Clock from './Clock';
import "./farm.css";


function FarmPage(props){
  return (
    <div className="Farm">
        <button class="graveyard">
          <a href="graveyard">
            <b>☗</b>
          </a>
        </button>
        <button class="petcollection">
          <a href="buddydex">
            <b>☰</b>
          </a>
        </button>
          
      <h1>very doomed farm page</h1>
      <p>too doomed</p>
      <Clock />
      <Pet tag="running" name="Salina" limbs="4" birthday="today"/>
    </div>
  );
};
export default FarmPage;
