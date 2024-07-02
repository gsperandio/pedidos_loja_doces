import PedidoModel from "../Models/PedidoModel.js";

class PedidoController{
    construtor(){

    }

    create(req,res){
        const descricao = req.body.descricao;
        const valor_total = req.body.valor_total;
        const id_cliente = req.body.id_cliente;

        PedidoModel.create(descricao,valor_total,id_cliente).then(
            resposta => {
                console.debug("Inserindo um Pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Inserindo um Pedido");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
    
    read(req,res){
        PedidoModel.read().then(
            resposta => {
                console.debug("Lendo Pedidos");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: lendo Pedidos");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    update(req,res){
        const id_pedido = req.params.id_pedido;
        const descricao = req.body.descricao;
        const valor_total = req.body.valor_total;
        const id_cliente = req.body.id_cliente;

        PedidoModel.update(id_pedido,descricao,valor_total,id_cliente).then(
            resposta => {
                console.debug('Atualizando Pedidos')
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug('Erro atualizando Pedidos')
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    delete(req,res){
        const id_pedido = req.params.id_pedido;

        PedidoModel.delete(id_pedido).then(
            resposta => {
                console.debug('Deletando Pedido')
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug('Erro deletando Pedido')
                res.status(resposta[0]).json(resposta[1])
            }
        );
        
    }
}

export default new PedidoController();