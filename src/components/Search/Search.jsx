import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from './SearchStyles'


function Search() {
  const [input, setInput] = useState('')
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }


  return (
    <Form onSubmit={submitHandler}>
      <div>
          <input onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            spellCheck="false" />
      </div>
    </Form>
  )
}


export default Search;