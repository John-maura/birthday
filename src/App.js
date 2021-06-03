import React, { useState } from 'react';
import data from './data';
import List from './list';
import './App.css';

function App(){
  const[people,setPeople]=useState(data);
  return <main>
    <section className="container">
      <h3 className="text-center">{people.length} birthdays today</h3>
      <List people={people}/>
      <div className="text-center">
      <button className="btn  btn-outline-dark"onClick={()=>setPeople([])}>Clear All</button>
      </div>
    </section>
  </main>
}

export default App;
