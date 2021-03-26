import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (!(ref.current && ref.current.contains(event.target))) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;

    return (
      <div onClick={() => onSelectedChange(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div className='ui form' ref={ref}>
      <div className='field'>
        <label className='label'>{label}</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}>
          <i className='dropdown icon'></i>
          <div className='text'>Selected: {selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
