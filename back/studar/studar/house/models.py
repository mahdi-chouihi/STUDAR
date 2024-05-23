import datetime
from django.db import models
from ads.models import User
class House(models.Model):
    id_house = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='house', db_column='userId')
    monthly_rent = models.FloatField()
    security_deposit = models.FloatField()
    bedrooms = models.IntegerField()
    gender = models.CharField(max_length=45)
    date_available = models.DateField()
    photo1 = models.CharField(max_length=255)
    photo2 = models.CharField(max_length=255,default="Unknown")
    photo3 = models.CharField(max_length=255,default="Unknown")
    note = models.CharField(max_length=255, blank=True)
    location = models.CharField(max_length=1000)
    Property_Type = models.CharField(max_length=45)
    datePosted = models.DateField(default=datetime.date.today)
    university = models.CharField(max_length=45)
    a_c = models.IntegerField(db_column='a/c')  # Using BooleanField for clarity
    furnished = models.IntegerField()
    wifi = models.IntegerField()
    balcony = models.IntegerField()
    waterelect = models.IntegerField()  # Assuming water/electricity

    class Meta:
        db_table = 'house'
