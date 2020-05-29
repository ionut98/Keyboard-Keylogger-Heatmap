import React, { useContext } from 'react';
import {Context as AppContext} from '../context/index';

const KeyboardLayout = () => {

  const context = useContext(AppContext);
  const {
    keyLoggerObject,
  } = context;

  return(
    <div>
      {keyLoggerObject}
    </div>
  )

};

export default KeyboardLayout;
