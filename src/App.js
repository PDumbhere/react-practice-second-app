
import './App.css';
import React from 'react';
import emoji from './emoji';
import './style.css';
import Entry from './components/Entry';

function App() {
  return (
    <div>
      <h1><span>List Of Emojies With Details</span></h1>
      <dl className="dictionary">
        {emoji.map(x => <Entry 
           id={x.id}
           name={x.name}
           emoji={x.emoji}
           description={x.description}/>)}

      </dl>
    </div>
  );
}

export default App;
