import React, { useContext } from 'react';
import { Context as AppContext } from '../context/index';
import ImageMapper from 'react-image-mapper';

import keyboard from './keyboard.png';
import MAP from './map';

const KeyboardLayout = () => {
	const context = useContext(AppContext);
	const { keysStats } = context;

	const style = {
		keyboard: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 100,
			textAlign: 'center'
		},
		container: {
			justifyContent: 'center'
		}
	};

	return (
		<div style={style.container}>
			<div style={style.keyboard}>
				<ImageMapper src={keyboard} map={MAP(keysStats)} />
			</div>
		</div>
	);
};

export default KeyboardLayout;
