import eel
import os
eel.init('front-end')

@eel.expose
def listfiles(path):
    folders = list()
    for r, d, f in os.walk(str(path)):
        for folder in d:
            folders.append(os.path.join(r, folder))
    return folders

eel.start('index.html', size=(1000, 600))
