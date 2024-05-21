from django.http import JsonResponse

def candidatos(req):
    if req.method == "GET":
        candidatos = [
            {"nome": "João", "idade": 25},
            {"nome": "Maria", "idade": 22},
            {"nome": "José", "idade": 30},
        ]
        return JsonResponse(candidatos, safe=False)
    

def empresas(req):
    if req.method == "GET":
        empresas = [
            {"nome": "Empresa 1", "cnpj": "123456789"},
            {"nome": "Empresa 2", "cnpj": "987654321"},
            {"nome": "Empresa 3", "cnpj": "456789123"},
        ]
        return JsonResponse(empresas, safe=False)
