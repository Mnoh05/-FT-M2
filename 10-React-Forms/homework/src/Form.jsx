import React, { useState } from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if(!input.password){
    errors.password = 'Password is required'
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid'
  }

  return errors;
};


export default function  Form() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username:'',
    password:'',
  })
  
  const handleInputChange =  function(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({ ...input,[e.target.name]: e.target.value})
    )
  }
  return (
      <form>
          <div>
            <label>Username:</label>
            <input type="text" name='username' onChange={handleInputChange} value ={input.username}
            className = {errors.username && "danger"} />
          </div>
          {
            errors.username && <p>{errors.username}</p>
          }
          <div>
            <label>Password:</label>
            <input type='password' name ="password" onChange={handleInputChange} value = {input.password}
            className = {errors.password && "danger"}/>
          </div>
          {
            errors.password && <p>{errors.password}</p>
          }
          <button type='submit' >Enviar</button>
      </form>
  )
}
