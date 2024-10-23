import { useState } from 'react';
import styles from '../CadastroClientes.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import api from '../services/api';

function CadastroClientes() {
  const [clienteNome, setClienteNome] = useState('');
  const [clienteEmail, setClienteEmail] = useState('');
  const [clienteTelefone, setClienteTelefone] = useState('');

  async function handleCadastroCliente(e) {
    e.preventDefault();

    const response = await api.post('/clientes', {
      nome: clienteNome,
      email: clienteEmail,
      telefone: clienteTelefone,
    });
  }

  return (
    <Container className={styles.container} controlId="container">
      <Row className='row justify-content-md-center'>
        <h1 className="mb-4 mt-3" style={{ color: '#7E5A9B', fontSize: '60px' }}>CADASTRO</h1>

        <Form onSubmit={handleCadastroCliente}>
          <Form.Group className="mb-3 mt-3" controlId="clienteNome">
            <Form.Label>Nome</Form.Label>
            <div className='input'>
              <Form.Control
                type="text"
                name='clienteNome'
                onChange={(e) => setClienteNome(e.target.value)}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="clienteEmail">
            <Form.Label>Email</Form.Label>
            <div className='input'>
              <Form.Control
                type="email"
                onChange={(e) => setClienteEmail(e.target.value)}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="clienteTelefone">
            <Form.Label>Telefone</Form.Label>
            <div className='input'>
              <Form.Control
                type="tel"
                name='clienteTelefone'
                onChange={(e) => setClienteTelefone(e.target.value)}
                required
              />
            </div>
          </Form.Group>

          <div className='d-grid gap-2 d-md-flex justify-content-md-end mb-3'>
            <Button type='submit' className="btn btn-success">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
              </svg>
              SALVAR
            </Button>

            <Button type='button' className="btn btn-danger" onClick={() => {
              setClienteNome('');
              setClienteEmail('');
              setClienteTelefone('');
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
              </svg>
              CANCELAR
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}

export default CadastroClientes;




/*import { useState } from 'react';
import '../CadastroClientes.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import api from '../services/api';

function CadastroClientes() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleCadastroClientes(e) {
    e.preventDefault();

    const response = await api.post('/clientes', {
      nome,
      email,
      telefone,
    });


  }

  return (
    <Container className= 'w-50 p-5'>
      <Row className='row justify-content-md-center'>
        <h1 className="mb-4 mt-3" style={{ color: '#7E5A9B', fontSize: '60px' }}>CADASTRO</h1>

        <Form onSubmit={handleCadastroClientes}>
          <Form.Group className="mb-3 mt-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <div className='input'>
            <Form.Control
              type="text"
              name='nome'
              onChange={(e) => setNome(e.target.value)} 
              required 
            /></div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone</Form.Label>
            <div className='input'>
            <Form.Control
              type="text"
              name='telefone'
              onChange={(e) => setTelefone(e.target.value)} 
              required 
            /></div>
          </Form.Group>

        
                 <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <div className='input'>
            <Form.Control 
              type="email"
              onChange={(e) => setEmail(e.target.value)} 
              required 
            /></div>
          </Form.Group>

          <div className='d-grid gap-2 d-md-flex justify-content-md-end mb-3'>
          <Button type='submit'className="btn btn-success d-flex align-items-end"
            onClick={(e) => handleCadastroClientes(e)}>
            <svg xmlns=""  height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
            </svg> SALVAR</Button>
            
            <Button type='submit'className="btn btn-danger"  
            onClick={(e) => handleCadastroClientes(e)}><svg xmlns="" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/>
            </svg> CANCELAR</Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}

export default CadastroClientes;*/
