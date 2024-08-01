import graphene
import graphql_jwt
from graphene_django import DjangoObjectType
from .authentication_backends import UsuarioBackend
from .models import Vaga, VagaC, Entrevista, Usuario

class UsuarioType(DjangoObjectType):
    class Meta:
        model = Usuario

class VagaType(DjangoObjectType):
    class Meta:
        model = Vaga

class VagaCType(DjangoObjectType):
    class Meta:
        model = VagaC

class EntrevistaType(DjangoObjectType):
    class Meta:
        model = Entrevista

class Query(graphene.ObjectType):
    todas_vagas = graphene.List(VagaType)
    todas_vagasc = graphene.List(VagaCType)
    todas_entrevistas = graphene.List(EntrevistaType)
    vaga_by_id = graphene.Field(VagaType, id=graphene.Int())
    vagac_by_id = graphene.Field(VagaCType, id=graphene.Int())
    entrevista_by_id = graphene.Field(EntrevistaType, id=graphene.Int())
    me = graphene.Field(UsuarioType)

    def resolve_todas_vagas(self, info):
        return Vaga.objects.all()

    def resolve_todas_vagasc(self, info):
        return VagaC.objects.all()

    def resolve_todas_entrevistas(self, info):
        return Entrevista.objects.all()

    def resolve_vaga_by_id(self, info, id):
        try:
            return Vaga.objects.get(pk=id)
        except Vaga.DoesNotExist:
            return None

    def resolve_vagac_by_id(self, info, id):
        try:
            return VagaC.objects.get(pk=id)
        except VagaC.DoesNotExist:
            return None

    def resolve_entrevista_by_id(self, info, id):
        try:
            return Entrevista.objects.get(pk=id)
        except Entrevista.DoesNotExist:
            return None
        
    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')
        return user

class ObtainJSONWebToken(graphql_jwt.JSONWebTokenMutation):
    user = graphene.Field(UsuarioType)

    @classmethod
    def resolve(cls, root, info, **kwargs):
        return cls(user=info.context.user)

class CustomObtainJSONWebToken(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    token = graphene.String()
    user = graphene.Field(UsuarioType)

    def mutate(self, info, email, password):
        user = UsuarioBackend().authenticate(request=None, email=email, password=password)
        if user is None:
            raise Exception('Invalid credentials')

        payload = graphql_jwt.shortcuts.get_payload(user)
        token = graphql_jwt.shortcuts.create_token(payload, user)
        return CustomObtainJSONWebToken(token=token, user=user)

class Mutation(graphene.ObjectType):
    token_auth = CustomObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)