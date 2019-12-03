import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';
import Q from '@nmq/q/client';

const socket = io.connect('http://localhost:3000');

const useSocket = event => {

  const [socketMessage, setSocketMessage] = useState({});

  useEffect(() => {
    socket.on('incoming', message => {
      setSocketMessage(message);
    });
  });

  const subscribe = (e, cb) => {
    // runs cb with payload when an event fires
  };

  const publish = (e, payload) => {
    // emits the event and payload to the server for broadcasting
  };

  return[socketMessage];

};

export default useSocket;

