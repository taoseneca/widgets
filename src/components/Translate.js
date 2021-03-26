import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

//

const languages = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Maori', value: 'mi' },
];

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState('Hello');

  return (
    <div>
      <br />
      <br />
      <br />
      <div className='ui form'>
        <div className='field'>
          <label>Enter words to translate</label>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label='Select a language'
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
      />

      <hr />

      <h3 className='ui header'>Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
