import React from 'react';
import Contact from './components/Contact';
import './components/Contact.css';

function App() {
  return (
    <div className="App">
      <Contact
       name="Violet Ford"
       avatar="https://randomuser.me/api/portraits/women/76.jpg"
       alt="Violet Ford"      
       online
      />

      <Contact
       name="Violet Ford"
       avatar="https://randomuser.me/api/portraits/men/42.jpg"
       alt="Brandon Meyer"     
       offline
      />

      <Contact
       name="Isabella Thomas"
       avatar="https://randomuser.me/api/portraits/women/25.jpg"
       alt="Isabella Thomas"      
       online
      />



    </div>
  );
}

export default App;
