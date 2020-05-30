import React, { useContext, useEffect } from 'react';
import { Context as AppContext } from '../context/index';
import ImageMapper from 'react-image-mapper';

import keyboard from './keyboard.png';
import MAP from './map';

const KeyboardLayout = () => {
	const context = useContext(AppContext);
	const { keysStats } = context;

	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100
	};

	return (
		<div style={style}>
			<ImageMapper src={keyboard} map={MAP(keysStats)} />
		</div>
	);
};

export default KeyboardLayout;
