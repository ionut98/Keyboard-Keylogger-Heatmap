import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import useWebSocket from 'react-use-websocket';

const Context = createContext();

const Provider = ({
  children,
}) => {

  const {
    lastMessage,
  } = useWebSocket('ws://localhost:30401/interface');

  const keyLoggerObject = JSON.parse(lastMessage);

  return(
    <Context.Provider
      value={{
        keyLoggerObject,
      }}
    >
      {children}
    </Context.Provider>
  )
};

Provider.propTypes = {
  children: PropTypes.node,
};

export {Provider, Context};
