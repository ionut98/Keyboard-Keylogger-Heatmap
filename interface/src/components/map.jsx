const squareCoords = (leftcornerX, leftCornerY) => [
	// left upper corner
	leftcornerX,
	leftCornerY,
	// left lower corner
	leftcornerX,
	leftCornerY + 40,
	// right lower corner
	leftcornerX + 40,
	leftCornerY + 40,
	// right upper corner
	leftcornerX + 40,
	leftCornerY
];

const heatMapColorforValue = (keyPressedValue) => {
	// between 0 - 100 (ONLY FOR PROOF OF CONCEPT)
	const h = 100 - keyPressedValue * 2;
	return 'hsla(' + h + ', 100%, 50%, 0.5)';
};

const squareKeys = [
	{
		name: 'esc',
		leftUpperCorner: {
			x: 17,
			y: 15
		}
	},
	{
		name: '`',
		leftUpperCorner: {
			x: 17,
			y: 95
		}
	},
	{
		name: '1',
		leftUpperCorner: {
			x: 71,
			y: 95
		}
	},
	{
		name: '2',
		leftUpperCorner: {
			x: 125,
			y: 95
		}
	},
	{
		name: '3',
		leftUpperCorner: {
			x: 179,
			y: 95
		}
	},
	{
		name: '4',
		leftUpperCorner: {
			x: 233,
			y: 95
		}
	},
	{
		name: '5',
		leftUpperCorner: {
			x: 287,
			y: 95
		}
	},
	{
		name: '6',
		leftUpperCorner: {
			x: 341,
			y: 95
		}
	},
	{
		name: '7',
		leftUpperCorner: {
			x: 395,
			y: 95
		}
	},
	{
		name: '8',
		leftUpperCorner: {
			x: 449,
			y: 95
		}
	},
	{
		name: '9',
		leftUpperCorner: {
			x: 503,
			y: 95
		}
	},
	{
		name: '0',
		leftUpperCorner: {
			x: 557,
			y: 95
		}
	},
	{
		name: '-',
		leftUpperCorner: {
			x: 611,
			y: 95
		}
	},
	{
		name: '=',
		leftUpperCorner: {
			x: 665,
			y: 95
		}
	},
	{
		name: 'q',
		leftUpperCorner: {
			x: 98,
			y: 150
		}
	},
	{
		name: 'w',
		leftUpperCorner: {
			x: 152,
			y: 150
		}
	},
	{
		name: 'e',
		leftUpperCorner: {
			x: 206,
			y: 150
		}
	},
	{
		name: 'r',
		leftUpperCorner: {
			x: 260,
			y: 150
		}
	},
	{
		name: 't',
		leftUpperCorner: {
			x: 314,
			y: 150
		}
	},
	{
		name: 'y',
		leftUpperCorner: {
			x: 368,
			y: 150
		}
	},
	{
		name: 'u',
		leftUpperCorner: {
			x: 422,
			y: 150
		}
	},
	{
		name: 'i',
		leftUpperCorner: {
			x: 476,
			y: 150
		}
	},
	{
		name: 'o',
		leftUpperCorner: {
			x: 530,
			y: 150
		}
	},
	{
		name: 'p',
		leftUpperCorner: {
			x: 584,
			y: 150
		}
	},
	{
		name: '[',
		leftUpperCorner: {
			x: 638,
			y: 150
		}
	},
	{
		name: ']',
		leftUpperCorner: {
			x: 692,
			y: 150
		}
	},
	{
		name: 'a',
		leftUpperCorner: {
			x: 112,
			y: 203
		}
	},
	{
		name: 's',
		leftUpperCorner: {
			x: 166,
			y: 203
		}
	},
	{
		name: 'd',
		leftUpperCorner: {
			x: 220,
			y: 203
		}
	},
	{
		name: 'f',
		leftUpperCorner: {
			x: 274,
			y: 203
		}
	},
	{
		name: 'g',
		leftUpperCorner: {
			x: 328,
			y: 203
		}
	},
	{
		name: 'h',
		leftUpperCorner: {
			x: 382,
			y: 203
		}
	},
	{
		name: 'j',
		leftUpperCorner: {
			x: 436,
			y: 203
		}
	},
	{
		name: 'k',
		leftUpperCorner: {
			x: 490,
			y: 203
		}
	},
	{
		name: 'l',
		leftUpperCorner: {
			x: 544,
			y: 203
		}
	},
	{
		name: ';',
		leftUpperCorner: {
			x: 598,
			y: 203
		}
	},
	{
		name: "'",
		leftUpperCorner: {
			x: 652,
			y: 203
		}
	},
	{
		name: 'z',
		leftUpperCorner: {
			x: 139,
			y: 257
		}
	},
	{
		name: 'x',
		leftUpperCorner: {
			x: 193,
			y: 257
		}
	},
	{
		name: 'c',
		leftUpperCorner: {
			x: 247,
			y: 257
		}
	},
	{
		name: 'v',
		leftUpperCorner: {
			x: 301,
			y: 257
		}
	},
	{
		name: 'b',
		leftUpperCorner: {
			x: 355,
			y: 257
		}
	},
	{
		name: 'n',
		leftUpperCorner: {
			x: 409,
			y: 257
		}
	},
	{
		name: 'm',
		leftUpperCorner: {
			x: 463,
			y: 257
		}
	},
	{
		name: ',',
		leftUpperCorner: {
			x: 517,
			y: 257
		}
	},
	{
		name: '.',
		leftUpperCorner: {
			x: 571,
			y: 257
		}
	},
	{
		name: '/',
		leftUpperCorner: {
			x: 625,
			y: 257
		}
	},
	// arows
	{
		name: 'up',
		leftUpperCorner: {
			x: 895,
			y: 257
		}
	},
	{
		name: 'left',
		leftUpperCorner: {
			x: 841,
			y: 312
		}
	},
	{
		name: 'down',
		leftUpperCorner: {
			x: 895,
			y: 312
		}
	},
	{
		name: 'right',
		leftUpperCorner: {
			x: 949,
			y: 312
		}
	},
	// numpad,
	{
		name: 'numLock',
		leftUpperCorner: {
			x: 1016,
			y: 95
		}
	},
	{
		name: '/numpad',
		leftUpperCorner: {
			x: 1070,
			y: 95
		}
	},
	{
		name: '*numpad',
		leftUpperCorner: {
			x: 1124,
			y: 95
		}
	},
	{
		name: '-numpad',
		leftUpperCorner: {
			x: 1178,
			y: 95
		}
	},
	{
		name: '7numpad',
		leftUpperCorner: {
			x: 1016,
			y: 149
		}
	},
	{
		name: '8numpad',
		leftUpperCorner: {
			x: 1070,
			y: 149
		}
	},
	{
		name: '9numpad',
		leftUpperCorner: {
			x: 1124,
			y: 149
		}
	},
	{
		name: '4numpad',
		leftUpperCorner: {
			x: 1016,
			y: 203
		}
	},
	{
		name: '5numpad',
		leftUpperCorner: {
			x: 1070,
			y: 203
		}
	},
	{
		name: '6numpad',
		leftUpperCorner: {
			x: 1124,
			y: 203
		}
	},
	{
		name: '1numpad',
		leftUpperCorner: {
			x: 1016,
			y: 257
		}
	},
	{
		name: '2numpad',
		leftUpperCorner: {
			x: 1070,
			y: 257
		}
	},
	{
		name: '3numpad',
		leftUpperCorner: {
			x: 1124,
			y: 257
		}
	},
	{
		name: 'delnumpad',
		leftUpperCorner: {
			x: 1124,
			y: 311
		}
	}
];

const rectKeys = [
	{
		name: 'tab',
		coords: [ 17, 149, 17, 189, 84, 189, 84, 149 ]
	},
	{
		name: 'capslock',
		coords: [ 17, 203, 17, 243, 98, 243, 98, 203 ]
	},
	{
		name: 'Lshift',
		coords: [ 17, 257, 17, 297, 125, 297, 125, 257 ]
	},
	{
		name: 'backspace',
		coords: [ 719, 95, 719, 135, 814, 135, 814, 95 ]
	},
	{
		name: '\\',
		coords: [ 745, 149, 745, 190, 814, 190, 814, 149 ]
	},
	{
		name: 'enter',
		coords: [ 706, 203, 706, 244, 814, 244, 814, 203 ]
	},
	{
		name: 'Rshift',
		coords: [ 679, 257, 679, 297, 814, 297, 814, 257 ]
	},
	{
		name: 'Lctrl',
		coords: [ 17, 311, 17, 351, 71, 351, 71, 311 ]
	},
	{
		name: 'Lalt',
		coords: [ 150, 311, 150, 351, 206, 351, 206, 311 ]
	},
	{
		name: 'Ralt',
		coords: [ 556, 311, 556, 351, 611, 351, 611, 311 ]
	},
	{
		name: 'Rctrl',
		coords: [ 760, 311, 760, 351, 813, 351, 813, 311 ]
	},
	{
		name: 'space',
		coords: [ 220, 311, 220, 351, 544, 351, 544, 311 ]
	},
	{
		name: '0numpad',
		coords: [ 1016, 311, 1016, 351, 1110, 351, 1110, 311 ]
	},
	{
		name: '+numpad',
		coords: [ 1178, 149, 1178, 245, 1218, 245, 1218, 149 ]
	},
	{
		name: 'enternumpad',
		coords: [ 1178, 257, 1178, 351, 1218, 351, 1218, 257 ]
	}
];

const MAP = (keysStats) => {
	console.log(keysStats, '<=== IN Map');
	return {
		name: 'keyboard-map',
		areas: [
			...squareKeys.map((key) => ({
				name: key.name,
				shape: 'poly',
				coords: squareCoords(key.leftUpperCorner.x, key.leftUpperCorner.y),
				preFillColor: heatMapColorforValue(keysStats[key.name])
			})),
			...rectKeys.map((key) => ({
				name: key.name,
				shape: 'poly',
				coords: key.coords,
				preFillColor: heatMapColorforValue(keysStats[key.name])
			}))
		]
	};
};

export default MAP;
