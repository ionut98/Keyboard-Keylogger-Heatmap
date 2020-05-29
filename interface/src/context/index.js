import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import useWebSocket from 'react-use-websocket';

const Context = createContext();

const Provider = ({ children }) => {
	const { lastMessage } = useWebSocket('ws://localhost:30401/interface');

	return (
		<Context.Provider
			value={{
				lastMessage
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
