from django.db import models

class Empresa(models.Model):
    nome = models.CharField(max_length=100)
    endereco = models.CharField(max_length=255, blank=True, null=True)
    telefone = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    cnpj = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.nome

class Candidato(models.Model):
    nome = models.CharField(max_length=100)
    endereco = models.CharField(max_length=255, blank=True, null=True)
    telefone = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    cpf = models.CharField(max_length=14, unique=True)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.nome
