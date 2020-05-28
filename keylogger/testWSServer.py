import asyncio
import datetime
import random
import websockets
from threading import Timer

websocket_object = None


# for printing the object structure
def dump(obj):
    for attr in dir(obj):
        print("obj.%s = %r" % (attr, getattr(obj, attr)))


async def time(websocket, path):
    websocket_object = websocket
    while True:
        now = datetime.datetime.utcnow().isoformat() + "Z"
        await websocket.send(now)
        await asyncio.sleep(random.random() * 3)


async def send_data():
    if websocket_object is not None:
        await websocket_object.send('DIN FUNCTIE')


# send_delayed = Timer(2.0, send_data)
# send_delayed.start()

# web socket final config
start_server = websockets.serve(time, "127.0.0.1", 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
