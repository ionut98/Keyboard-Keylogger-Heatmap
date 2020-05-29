import React, { useContext } from 'react';
import { Context as AppContext } from '../context/index';

const KeyboardLayout = () => {
	const context = useContext(AppContext);
	const { lastMessage } = context;
	let lastKeyPressed = null;

	if (lastMessage) {
		lastKeyPressed = JSON.parse(lastMessage.data);
		if (lastKeyPressed.keyPressed[0] === "'") {
			lastKeyPressed = lastKeyPressed.keyPressed[1];
		} else {
			lastKeyPressed = lastKeyPressed.keyPressed;
		}
	}
	return <div>{lastKeyPressed !== null && lastKeyPressed}</div>;
};

export default KeyboardLayout;
