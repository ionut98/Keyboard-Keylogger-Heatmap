import sys
import time
import logging
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from datetime import datetime


class OnKeyLogFileModifedHandler(FileSystemEventHandler):
    def on_modified(self, event):
        print(f'{datetime.now()} Event type: {event.event_type}  path : {event.src_path}')
        print(event.is_directory)  # This attribute is also available


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s - %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')
    path = '.'
    event_handler = OnKeyLogFileModifedHandler()
    observer = Observer()

    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
