const agendamentosModel = require('../models/agendamentoModel');
const { getAll: getAllPrestadores } = require('../models/servicesPrestador'); 
const { getAllClientes } = require('../models/clienteModel'); 

const getAll = async (req, res) => {
  try {
    const agendamentos = await agendamentosModel.getAll();
    return res.status(200).json(agendamentos);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar agendamentos', error });
  }
};

const createAgendamento = async (request, response) => {
  
  const prestadores = await getAllPrestadores();
  const clientes = await getAllClientes();

  const createdAgendamento = await agendamentosModel.createAgendamento(request.body);
  
  return response.status(201).json({
    createdAgendamento,
    prestadores,
    clientes,
  });
};

const deleteAgendamento = async (request, response) => {
  const { id } = request.params;

  await agendamentosModel.deleteAgendamento(id);
  return response.status(204).json();
};

const updateAgendamento = async (request, response) => {
  const { id } = request.params;

  await agendamentosModel.updateAgendamento(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createAgendamento,
  deleteAgendamento,
  updateAgendamento,
};
