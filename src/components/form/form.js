import React from 'react';
import { useState } from 'react';

const Form = props => {
  const [userInput, handleInput] = useState({
    url: 'a',
    method: 'b',
    jsonInput: 'c',
  });

  const handleAllInput = event => {
    const name = event.target.name;
    const input = event.target.value;
    handleInput({...userInput, [name]: input})
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.submitForm(userInput);
  };

  return(
    <form
      className = "resty-form"
      onSubmit = { (event) => handleSubmit(event) }
    >
      <input 
        type = "text"
        name = "url"
        onChange = { event => handleAllInput(event) }
        placeholder = "URL"
      />
      <ul>
        <li>
          <label>
            <input
              type = "radio"
              name = "method"
              value = "get"
              onChange = { event => handleAllInput(event) }
            />
            GET
          </label>
        </li>
        <li>
          <label>
            <input
              type = "radio"
              name = "method"
              value = "post"
              onChange = { event => handleAllInput(event) }
            />
            POST
          </label>
        </li>
        <li>
          <label>
            <input
              type = "radio"
              name = "method"
              value = "put"
              onChange = { event => handleAllInput(event) }
            />
            PUT
          </label>
        </li>
        <li>
          <label>
            <input
              type = "radio"
              name = "method"
              value = "patch"
              onChange = { event => handleAllInput(event) }
            />
            PATCH
          </label>
        </li>
        <li>
          <label>
            <input
              type = "radio"
              name = "method"
              value = "delete"
              onChange = { event => handleAllInput(event) }
            />
            DELETE
          </label>
        </li>
      </ul>
      <textarea
        name = "jsonInput"
        onChange = { event => handleAllInput(event) }
        placeholder = "JSON body" 
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;