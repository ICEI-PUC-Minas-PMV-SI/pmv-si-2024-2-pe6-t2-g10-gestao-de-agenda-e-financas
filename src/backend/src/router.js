const express = require('express');
const router = express.Router();

const prestadorController = require('./controllers/prestadorController');
const servicoController = require('./controllers/servicosController');
const agendamentosController = require('./controllers/agendamentosController');
const financeiroController = require('./controllers/financeiroContoller')
const clienteController = require('./controllers/clienteController');
const caixaController = require('./controllers/caixaController');
const loginController = require('./controllers/loginController');
const authMiddleware = require('./middleware/authMiddleware');

// Cad. de Prestadores de Serviços
router.get('/prestador', prestadorController.getAllPrestador);
router.post('/prestador', prestadorController.createPrestador);
router.delete('/prestador/:id', prestadorController.deletePrestador);
router.put('/prestador/:id', prestadorController.updatePrestador);

// Serviços
router.post('/servicos', authMiddleware, servicoController.createServico);
router.get('/servicos', authMiddleware, servicoController.getAllServicos);
router.put('/servicos/:id', authMiddleware, servicoController.updateServico);
router.delete('/servicos/:id', authMiddleware, servicoController.deleteServico);
router.get('/servicos/prestador/:id', authMiddleware, servicoController.getAllServicosByPrestador);

//Agendamentos
router.get('/agendamentos', authMiddleware, agendamentosController.getAll);
router.post('/agendamentos', authMiddleware, agendamentosController.createAgendamento);
router.delete('/agendamentos/:id', authMiddleware, agendamentosController.deleteAgendamento);
router.put('/agendamentos/:id', authMiddleware, agendamentosController.updateAgendamento);


// Rotas do CRUD de Clientes
router.post('/clientes', clienteController.createCliente);
router.get('/clientes', clienteController.getAllClientes);
router.get('/clientes/:id', clienteController.getClienteById);
router.put('/clientes/:id', clienteController.updateCliente);
router.delete('/clientes/:id', clienteController.deleteCliente);

// Caixa
router.get('/caixa', caixaController.getAllCaixa);
router.post('/caixa', caixaController.createCaixa);
router.put('/caixa/:id', caixaController.updateCaixa);
router.delete('/caixa/:id', caixaController.deleteCaixa);

// Rotas dos relatórios
router.get('/financeiro/:id/faturamento/:data', financeiroController.getFaturamentoDia);
router.get('/financeiro/:id/faturamento', financeiroController.getFaturamentoPorIntervalo);

// Login

router.post("/login", loginController.login);

module.exports = router;