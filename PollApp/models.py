from django.db import models

# Create your models here.
class QuestionModel(models.Model):
    Question = models.CharField(max_length=300)
    Vote1 = models.PositiveIntegerField(default=0)
    Opt1 = models.CharField(max_length=20,default='')
    Vote2 = models.PositiveIntegerField(default=0)
    Opt2 = models.CharField(max_length=20,default='')
    Vote3 = models.PositiveIntegerField(default=0)
    Opt3 = models.CharField(max_length=20,default='')

    def __str__(self):
        return self.Question