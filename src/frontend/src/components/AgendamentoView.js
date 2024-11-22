import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../components/styles/AgendamentoView.css';

const AgendamentosView = () => {
    const [agendamentos, setAgendamentos] = useState([]);
    const navigate = useNavigate(); // Hook para navegação

    useEffect(() => {        
            const fetchAgendamentos = async () => {
                try {
                    const token = localStorage.getItem('authToken');
                    const response = await axios.get('http://localhost:3000/agendamentos', {
                        headers: {
                            Authorization: `Bearer ${token}`, 
                        }
                    });
                    setAgendamentos(response.data);
                } catch (error) {
                    console.error('Erro ao buscar agendamentos:', error);
                }
            };
        
            fetchAgendamentos(); 
        }, []); 
        

        const handleDelete = async (id) => {
            try {
                const token = localStorage.getItem('authToken'); 
                await axios.delete(`http://localhost:3000/agendamentos/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    }
                });
                setAgendamentos(agendamentos.filter(agendamento => agendamento._id !== id));
            } catch (error) {
                console.error('Erro ao excluir agendamento:', error);
            }
        };
        

        const handleEdit = (agendamento) => {
            
            const updatedAgendamento = {
                ...agendamento,
                nomeCliente: agendamento.nomeClientes || 'Nome do Cliente não especificado',
                nomePrestador: agendamento.nomePrestador || 'Nome do Prestador não especificado',
            };
        
            
            navigate('/agendamentoCadastro', { state: { agendamento: updatedAgendamento } });
        };
        

    return (
        <div className="agendamentos-view">
            <h1 style={{ color: '#F79824', fontSize: '58px', textAlign: 'center', color: '#7E5A9B' }}>LISTA DE AGENDAMENTOS</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Data do Agendamento</th>
                        <th>Nome Cliente</th>
                        <th>Nome Prestador</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {agendamentos.map((agendamento) => (
                        <tr key={agendamento._id}>
                            <td>{new Date(agendamento.data).toLocaleDateString()}</td>                           
                            <td>{agendamento.nomeCliente }</td>
                            <td>{agendamento.nomePrestador}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    className="me-2"
                                    onClick={() => handleEdit(agendamento)}
                                    style={{ backgroundColor: '#7E5A9B', borderColor: '#7E5A9B', color: 'white' }}
                                >
                                    Editar
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(agendamento._id)}>
                                    Excluir
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AgendamentosView;
