import React from 'react';
import Pet from './Pet';
import Clock from './Clock';


function FarmPage(props){
  return (
    <div className="Farm">
      <h1>very doomed farm page</h1>
      <p>too doomed</p>
      <Clock />
      <Pet tag="running" name="Salina" limbs="4" birthday="today"/>
    </div>
  );
};
export default FarmPage;
