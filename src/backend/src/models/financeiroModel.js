const mongoose = require('mongoose');

const agendamentoModel = require('./agendamentoModel');

const getFaturamentoDia = async (id, data) => {
    const inicioDia = new Date(data);
    inicioDia.setHours(0, 0, 0, 0); 

    const fimDia = new Date(dia);
    fimDia.setHours(23, 59, 59, 999);

    const agendamentos = await agendamentoModel.find({
        id: id,
        data: { $gte: inicioDia, $lte: fimDia }
    });

    // const faturamento = agendamentos.reduce((total, agendamento) => total + agendamento.preco, 0);

    return { agendamentos };
}

const getFaturamentoPorIntervalo = async (id, dataInicial, dataFinal) => {
    const inicioIntervalo = new Date(dataInicial);
    inicioIntervalo.setHours(0, 0, 0, 0);

    const fimIntervalo = new Date(dataFinal);
    fimIntervalo.setHours(23, 59, 59, 999);

    const agendamentos = await Agendamento.find({
        id: id,
        data: { $gte: inicioIntervalo, $lte: fimIntervalo }
    });
    
    // const faturamento = agendamentos.reduce((total, agendamento) => total + agendamento.preco, 0);

    return { agendamentos };
}

module.exports = {
    getFaturamentoDia,
    getFaturamentoPorIntervalo,
}