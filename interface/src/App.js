import React from 'react';
import './App.css';
import { Provider } from './context';
import KeyboardLayout from './components/KeyboardLayout';

const App = (props) => {
  return (
    <Provider {...props}>
      <KeyboardLayout />
    </Provider>
  );
}

export default App;
