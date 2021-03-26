import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = (index) => {
    setActiveIndex(index);
    console.log('item clicked: ', index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : null;

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={handleTitleClick.bind(this, index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
