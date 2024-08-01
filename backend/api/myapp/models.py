from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Usuario(models.Model):
    nome = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    senha = models.CharField(max_length=255)
    cpf = models.CharField(max_length=11)

    def set_password(self, raw_password):
        self.senha = make_password(raw_password)
    
    def check_password(self, raw_password):
        return check_password(raw_password, self.senha)

class Vaga(models.Model):
    nome_vaga = models.CharField(max_length=255)
    tipo = models.CharField(max_length=255, default='CLT')
    empresa = models.CharField(max_length=255)
    detalhes = models.TextField()
    salario = models.CharField(max_length=20)
    compativel = models.BooleanField(default=False)

class VagaC(models.Model):
    empresa = models.CharField(max_length=255)
    tempo = models.CharField(max_length=50)

class Entrevista(models.Model):
    titulo = models.CharField(max_length=255)
    data = models.CharField(max_length=255)
