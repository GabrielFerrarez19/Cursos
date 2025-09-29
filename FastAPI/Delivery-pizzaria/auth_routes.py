from fastapi import APIRouter, Depends, HTTPException
from schemas import UsuarioSchema
from models import Usuario 
from dependencies import pegar_sessao
from main import bcrypt_context
from sqlalchemy.orm import Session

auth_router = APIRouter(prefix="/auth", tags=["auth"])

@auth_router.get("/")
async def home():
    """
    Essa é a rota de autenticação
    """
    return {"message": "Autenticado"}


@auth_router.post("/create-user")
async def create_user(usuario_schema: UsuarioSchema, session: Session = Depends(pegar_sessao)):
    usuario = session.query(Usuario).filter(Usuario.email == usuario_schema.email).first()
    if usuario:
        raise HTTPException(status_code=400, detail="Usuário já existe")
    else:
        senha_criptografada = bcrypt_context.hash(usuario_schema.senha)    
        novo_usuario = Usuario(usuario_schema.name, usuario_schema.email, senha_criptografada, usuario_schema.ativo, usuario_schema.admin)
        session.add(novo_usuario)
        session.commit()
        return {"message": f"Usuário criado com sucesso {novo_usuario.email}"}