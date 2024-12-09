import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const ListaServicos = () => {
  const [servicos, setServicos] = useState([]);
  const navigate = useNavigate();

  const servicosViewStyles = {
    marginTop: "100px",
  };
  
  const tableContainerStyles = {
    width: "80%",
    margin: "20px auto", 
  };

  const tableStyles = {
    width: "80%",
    margin: "20px auto",
    borderCollapse: "collapse",
  };

  const thTdStyles = {
    border: "1px solid black",
    padding: "10px",
    fontWeight: "bold",
  };

  const trEvenStyles = {
    backgroundColor: "#7E5A9B",
  };

  const trOddStyles = {
    backgroundColor: "white",
  };
  
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  };

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await api.get("/servicos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setServicos(response.data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    };
    fetchServicos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      await api.delete(`/servicos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServicos(servicos.filter((servico) => servico._id !== id));
      alert("Serviço excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    }
  };
  
  const handleEdit = (servico) => {
    navigate("/servico", { state: { servico } });
  };
  
  const handleAdd = () => {
    navigate("/servico");
  };

  return (
    <div style={servicosViewStyles}>
      <h1
        style={{
          fontSize: "58px",
          textAlign: "center",
          color: "#7E5A9B",
        }}
      >
        LISTA DE SERVIÇOS
      </h1>
      <div style={tableContainerStyles}>
        <div style={buttonContainerStyle}>
          <Button variant="light" className="svg-button" style={{ padding: 0, border: 'none' }} onClick={handleAdd}>
            <svg width="79" height="83" viewBox="0 0 79 83" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <rect width="79" height="83" rx="8" fill="#7E5A9B" />
              <image
                x="13"
                y="14"
                width="53"
                height="55"
                href="data:image/png;base64,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"
              />
              <defs>
                <pattern id="pattern0_10_473" patternContentUnits="objectBoundingBox" width="1" height="1" >
                  <use href="#image0_10_473" transform="matrix(0.0162146 0 0 0.015625 -0.0188679 0)" />
                </pattern>
              </defs>
            </svg>
          </Button>
        </div>
        <Table striped bordered hover style={tableStyles}>
          <thead>
            <tr>
              <th style={thTdStyles}>Descrição</th>
              <th style={thTdStyles}>Preço</th>
              <th style={thTdStyles}>Duração</th>
              <th style={thTdStyles}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map((servico, index) => (
              <tr key={servico._id} style={index % 2 === 0 ? trEvenStyles : trOddStyles}>
                <td style={thTdStyles}>{servico.descricao}</td>
                <td style={thTdStyles}>{servico.preco}</td>
                <td style={thTdStyles}>{servico.duracao}</td>
                <td style={thTdStyles}>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleEdit(servico)}
                    style={{
                      backgroundColor: "#7E5A9B",
                      borderColor: "#7E5A9B",
                      color: "white",
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(servico._id)}
                    style={{
                      backgroundColor: '#d9534f',
                      borderColor: '#d9534f',
                      color: 'white' 
                    }}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListaServicos;