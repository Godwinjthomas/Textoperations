from __future__ import absolute_import, unicode_literals

import datetime
import hashlib
import time
from tarfile import BLOCKSIZE

from Textapp.models import File
import glob
import os

import psycopg2
from celery import shared_task

files = list()


@shared_task
def function():
    k = 0
    path = r'C:\Users\godwin\OneDrive\Desktop\Textfiles'

    for filename in glob.glob(os.path.join(path, '*.txt')):
        hasher = hashlib.md5()
        with open(filename, 'rb') as afile:
            buf = afile.read()
            hasher.update(buf)
            hash = hasher.hexdigest()

            if File.objects.filter(Hashvalue=hash).exists():
                print("Existing File")
            else:
                with open(filename, 'r')as f:
                    name = os.path.basename(filename)
                    txt = f.readline()
                    fulltext = f.read()
                    size = os.path.getsize(filename)
                    modified_date = (datetime.datetime.fromtimestamp(os.path.getmtime(filename)))
                    create_date = (datetime.datetime.fromtimestamp(os.path.getctime(filename)))

                    obj = File(Name=name, f_size=size, content=txt, full_content=fulltext, modified_date=modified_date,
                               created_date=create_date, Hashvalue=hash)
                    obj.save()
                f.close()
        afile.close()
