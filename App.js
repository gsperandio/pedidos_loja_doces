import express from 'express'; // Importando  express
import ClienteController from './Controllers/ClienteController.js';
import PedidoController from './Controllers/PedidoController.js'



const server = express(); // Iniciando o express

server.use(express.json()) // para poder utilizar o server em json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

server.get('/clientes', ClienteController.read);
server.post('/clientes', ClienteController.create);
server.put('/clientes/:id_cliente', ClienteController.update);
server.delete('/clientes/:id_cliente', ClienteController.delete);

server.get('/pedidos', PedidoController.read);
server.post('/pedidos', PedidoController.create);
server.put('/pedidos/:id_pedido', PedidoController.update);
server.delete('/pedidos/:id_pedido', PedidoController.delete);

server.listen(5000);
