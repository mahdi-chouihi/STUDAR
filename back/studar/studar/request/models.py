from django.db import models
from house.models import  House
from ads.models import User

class Request(models.Model):
    IdRequest = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='request', db_column='userId')
    house = models.ForeignKey(House, on_delete=models.CASCADE,related_name='request', db_column='id_house')
    date = models.DateField(auto_now_add=True)
    note = models.CharField(max_length=45, null=True, blank=True)
    status = models.CharField(max_length=45)

    class Meta:
        db_table = 'Request'
