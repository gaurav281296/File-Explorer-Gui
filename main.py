import eel
import os
eel.init('front-end')

@eel.expose
def listfiles(path):
    print(os.getcwd())
    listOfFiles = list()
    for root, directories, files in os.walk(str(path)):
        for directory in directories:
            listOfFiles.append(os.path.join(root, directory))
    return listOfFiles

eel.start('index.html', size=(1000, 600))
