import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';
import Q from '@nmq/q/client';

const socket = io.connect('http://localhost:3000');
// const queue = new Q('deeds');


const useForm = cb => {

  const [values, setValues] = useState({});
  
  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    
    Q.publish('deeds', 'work', values);
    socket.emit('words', values);

  };

  
  return [values, handleChange, handleSubmit];
};

export default useForm;