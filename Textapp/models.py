from django.db import models


class File(models.Model):
    Name = models.CharField(max_length=50)
    f_size = models.CharField(max_length=50)
    content = models.CharField(max_length=500)
    full_content = models.TextField(max_length=500)
    modified_date = models.DateField()
    created_date = models.DateField()
    Hashvalue = models.CharField(max_length=50)








