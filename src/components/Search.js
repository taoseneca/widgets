import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term) {
      search();
    }
  }, [term]);

  const renderedResults = results.map((article) => {
    return (
      <div className='item' key={article.pageid}>
        <div className='right floated content'>
          <a href={`https://en.wikipedia.org?curid=${article.pageid}`} className='ui button'>
            Go
          </a>
        </div>

        <div className='content'>
          <div className='header'>{article.title}</div>
          {article.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter search term</label>
          <input
            type='text'
            className='input'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
