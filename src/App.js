import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate'
// import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  { title: 'What is React?', content: 'React is a frontend javascript framework' },
  { title: 'Why use React?', content: 'React is a favorite JS library among engineers' },
  { title: 'How do you use React?', content: 'You use React by creating components' },
];

const options = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'The Color Blue', value: 'blue' },
];

const App = () => {

  

  return (
    <div>
      <Translate/>
    </div>
  );
};

export default App;
