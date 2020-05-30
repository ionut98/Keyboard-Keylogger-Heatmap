import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import useWebSocket from 'react-use-websocket';
import { keysReducer, updateKeys } from '../reducers/keysReducer';

const Context = createContext();

const Provider = ({ children }) => {
	const { lastMessage } = useWebSocket('ws://localhost:30401/interface');

	const [ keysStats, dispatch ] = useReducer(keysReducer, {});

	useEffect(
		() => {
			if (lastMessage) {
				const lastKeyPressed = JSON.parse(lastMessage.data);
				if (lastKeyPressed.keyPressed[0] === "'") {
					updateKeys(dispatch)(lastKeyPressed.keyPressed[1]);
				} else {
					updateKeys(dispatch)(lastKeyPressed.keyPressed);
				}
			}
		},
		[ lastMessage ]
	);

	return (
		<Context.Provider
			value={{
				keysStats
			}}
		>
			{children}
		</Context.Provider>
	);
};

Provider.propTypes = {
	children: PropTypes.node
};

export { Provider, Context };
