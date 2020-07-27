import React, { useState } from 'react'
import PropTypes from 'prop-types';

function Input({ addPost }) {
  const [input, setInput] = useState('');

  function onChange(event) {
    setInput(event.target.value);
  }

  function onKeyDown(event) {
    const title = event.target.value;
    if (event.key === 'Enter' && title) {
      addPost(title);
      setInput('');
    }
  }

  return (
    <div className="Input">
      <div className="Input__header">
        Create Post
      </div>
      <textarea
        className="Input__field"
        rows="4"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div className="Input__container__button">
        <button className="Input__button" onClick={() => addPost(input)}>Post</button>
      </div>
    </div >
  )
}

Input.prototype = {
  addPost: PropTypes.func.isRequired
};

export default Input;