import ClienteModel from "../Models/ClienteModel.js";

class ClienteController{
    construtor(){

    }

    create(req,res){
        const nome_cliente = req.body.nome_cliente;
        const endereco = req.body.endereco

        ClienteModel.create(nome_cliente,endereco).then(
            resposta => {
                console.debug("Inserindo um Cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Inserindo um Cliente");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
    
    read(req,res){
        ClienteModel.read().then(
            resposta => {
                console.debug("Lendo Clientes");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: lendo Clientes");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    update(req,res){
        const id_cliente = req.params.id_cliente;
        const nome_cliente = req.body.nome_cliente;
        const endereco = req.body.endereco;

        ClienteModel.update(id_cliente,nome_cliente,endereco).then(
            resposta => {
                console.debug('Atualizando Clientes')
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug('Erro atualizando Clientes')
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    delete(req,res){
        const id_cliente = req.params.id_cliente;

        ClienteModel.delete(id_cliente).then(
            resposta => {
                console.debug('Deletando Cliente')
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug('Erro deletando Cliente')
                res.status(resposta[0]).json(resposta[1])
            }
        );
        
    }
}

export default new ClienteController();