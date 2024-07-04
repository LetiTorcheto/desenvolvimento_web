import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "../redux/slices/receptorSlice";
import { listMyOrders, getOrderDetails } from "../redux/slices/pedidoSlice";
import Message from "../components/Message";
import Loader from "../components/Loader";
import CancelIcon from '@mui/icons-material/Cancel';

function PerfilScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { userDetails, loading, error } = user;

  const order = useSelector((state) => state.order);
  const { listorder, loading: loadingOrders, error: errorOrders } = order;

  useEffect(() => {
    if (!userDetails) {
      navigate("/login");
    } else {
      dispatch(listMyOrders());
      setName(userDetails.name);
      setEmail(userDetails.username);
    }
  }, [dispatch, navigate, userDetails]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Senha não corresponde");
    } else {
      if (userDetails) {
        const userData = {
          id: userDetails._id,
          name: name,
          email: email,
          password: password,
        };
        dispatch(updateUser(userDetails._id, userData));
        setMessage("");
      }
    }
  };

  const handleDeleteUser = () => {
    if (userDetails) {
      dispatch(deleteUser(userDetails._id));
      navigate('/');
      window.location.reload();
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>Perfil de usuário</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="passwordConfirm">
            <Form.Label>Confirmar senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="mt-3">
            Atualizar
          </Button>
        </Form>
        <Button type="button" variant="danger" className="mt-3" onClick={handleDeleteUser}>
          <div style={{ fontSize: "7px" }}><CancelIcon /> Conta </div>
        </Button>
      </Col>

      <Col md={9}>
        <h2>Minhas ordens</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Data</th>
                <th>Entregado</th>
              </tr>
            </thead>
            <tbody>
              {listorder
                .filter((order) => order.isPaid)
                .map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt ? order.createdAt.substring(0, 10) : null}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt ? (
                          order.paidAt.substring(0, 10)
                        ) : null
                      ) : (
                        <i className="fas fa-times" style={{ color: "red" }}></i>
                      )}
                    </td>
                    <td>
                      <LinkContainer to={`/orderDetail`}>
                        <Button className="btn-sm" onClick={() => dispatch(getOrderDetails(order._id))}>Detalhes</Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
}

export default PerfilScreen;
