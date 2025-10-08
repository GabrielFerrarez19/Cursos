from fastapi import APIRouter, Depends, HTTPException
from schemas import OrderSchema
from dependencies import pegar_sessao
from sqlalchemy.orm import Session
from models import Pedido

order_router = APIRouter(prefix="/order", tags=["order"])


@order_router.get("/")
async def pedidos():
    """
    Essa é a rota de pedidos
    """
    return {"message": "Pedidos"}


@order_router.post("/create-order")
async def create_order(order_schema: OrderSchema, session: Session = Depends(pegar_sessao)):
    """
    Essa é a rota de criação de pedidos
    """
    novo_pedido = Pedido(usuario=order_schema.usuario_id)
    session.add(novo_pedido)
    session.commit()
    raise HTTPException(status_code=201, detail=f"Pedido criado {novo_pedido.id}")
