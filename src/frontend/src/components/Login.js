import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); 

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email, password });
            if (response.status === 200) {
                login(response.data.token, response.data.user.nome, response.data.user._id);
                navigate('/boasvindas');
            }
        } catch (error) {
            console.error("Erro no Login:", error);
            if (error.response) {
                if (error.response.status === 401) {
                    alert("Senha incorreta!");
                } else if (error.response.status === 404) {
                    alert("Usuário não encontrado!");
                } else if (error.response.data && error.response.data.message) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro ao tentar realizar o login: " + error.message);
                }
            }
        }
    }

    return (
        <Container fluid className="d-flex justify-content-center min-vh-100">
            <Row className="text-center w-75 mt-5" xs={1} md={6}>
                <Col md={6} lg={4} className="mx-auto mt-5">
                    <Col lg={8} className="mx-auto">
                        <Image className="rounded mx-auto d-block" src="./icon.png" style={{ width: '75%' }} />
                        <figcaption className="figure-caption" style={{ color: '#F79824', fontSize: '50px', textAlign: 'center', fontFamily: 'Luckiest Guy' }}>
                            Agenda <br /> Fácil
                        </figcaption>
                    </Col>
                    <Form className="shadow p-4 rounded text-start mt-3" style={{ border: '2px solid #7E5A9B', color:'#7E5A9B' }} onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                style={{ border: '2px solid #7E5A9B', borderRadius: '8px' }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                style={{ border: '2px solid #7E5A9B', borderRadius: '8px' }}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button
                                type="submit"
                                className="btn-sm mt-2"
                                style={{
                                    backgroundColor: '#F79824',
                                    borderColor: '#F79824',
                                    fontSize: '20px',
                                    borderRadius: '8px',
                                }}
                            >
                                Entrar
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
