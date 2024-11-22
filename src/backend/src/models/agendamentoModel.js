const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  nomeCliente: { type: String, required: true },
  nomePrestador: { type: String, required: true },
  data: { type: Date, required: true },
  horario: { type: String, required: true },
  prestadorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prestador', required: true }  
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

const getAll = async () => {
  try {
    const agendamentos = await Agendamento.find()
      .populate({ path: 'prestadorId', select: 'nome', strictPopulate: false })
      .populate({ path: 'clienteId', select: 'nome', strictPopulate: false });

    return agendamentos;
  } catch (error) {
    throw error;
  }
};

const createAgendamento = async (data) => {
  try {
    const createdAgendamento = new Agendamento(data);
    return await createdAgendamento.save();
  } catch (error) {
    throw error;
  }
};

const deleteAgendamento = async (id, prestadorId) => {
  try {
    return await Agendamento.findOneAndDelete({ _id: id, prestadorId });
  } catch (error) {
    throw error;
  }
};

const updateAgendamento = async (id, data) => {
  try {
    return await Agendamento.findOneAndUpdate(
      { _id: id, prestadorId: data.prestadorId },
      data,
      { new: true, runValidators: true }
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  createAgendamento,
  deleteAgendamento,
  updateAgendamento,
};
