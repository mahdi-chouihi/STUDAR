from django.db import models

class User(models.Model):
    userId = models.AutoField(primary_key=True)
    email = models.CharField(max_length=255, null=True)
    password = models.CharField(max_length=32, null=True)
    job = models.CharField(max_length=10,default="Unknown")
    picture = models.CharField(max_length=255, null=True)
    fullName = models.CharField(max_length=45, default="Unknown")  # Default value set here
    gender = models.CharField(max_length=45,default="Unknown")
    city = models.CharField(max_length=45, null=True)
    university = models.CharField(max_length=45, null=True)
    phone = models.BigIntegerField(default="Unknown")


    class Meta:
        db_table = 'user'

class AD_roommate(models.Model):
    Ad_Id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ad_roommates', db_column='Id')
    facebook = models.CharField(max_length=45, null=True)
    instagram = models.CharField(max_length=45, null=True)
    study_level = models.CharField(max_length=45)
    note = models.CharField(max_length=45, null=True)

    class Meta:
        db_table = 'AD_roommate'



