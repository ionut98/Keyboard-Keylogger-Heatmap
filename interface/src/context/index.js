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
				const message = JSON.parse(lastMessage.data);
				if (message.type === 'key') {
					const lastKeyPressed = message.data.keyPressed;
					if (lastKeyPressed[0] === "'") {
						updateKeys(dispatch)(lastKeyPressed[1]);
					} else {
						updateKeys(dispatch)(lastKeyPressed);
					}
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
