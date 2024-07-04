import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";

function PedidoScreen() {

  const navigate = useNavigate();

  const order = useSelector((state) => state.order);
  const { orderDetails, error, loading } = order;

  const userLogin = useSelector((state) => state.user);
  const { userDetails } = userLogin;

  useEffect(() => {
    if (!userDetails) {
      navigate("/login");
    }
  }, [navigate, userDetails]);

  let updatedOrderDetails = orderDetails;
  if (updatedOrderDetails && updatedOrderDetails.orderItems && updatedOrderDetails.orderItems.length > 0) {
    const itemsPrice = updatedOrderDetails.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    ).toFixed(2);
    updatedOrderDetails = { ...updatedOrderDetails, itemsPrice };
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <h1>Pedido: {orderDetails._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Envio</h2>
              <p>
                <strong>Nome: {orderDetails.User.name}</strong>
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${orderDetails.User.username}`}>{orderDetails.User.username}</a>
              </p>
              <p>
                <strong>Endereco de envio: </strong>
                {orderDetails.shippingAddress.address}, {orderDetails.shippingAddress.city},{" "}
                {orderDetails.shippingAddress.postalCode},{" "}
                {orderDetails.shippingAddress.country}
              </p>
              {orderDetails.isDeliver ? (
                <Message variant="success">
                  Entregado em {orderDetails.deliveredAt ? orderDetails.deliveredAt.substring(0, 10) : null}
                </Message>
              ) : (
                <Message variant="warning">Nao entregado</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Pedidos</h2>
              {orderDetails.orderItems.length === 0 ? (
                <Message variant="info">Pedidos estao vazios</Message>
              ) : (
                <ListGroup variant="flush">
                  {orderDetails.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} X R$ {item.price} = R$ {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Soma dos pedidos</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Custo dos produtos:</Col>
                  <Col>R${updatedOrderDetails.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Frete:</Col>
                  <Col>R${orderDetails.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Imposto:</Col>
                  <Col>R${orderDetails.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>R${orderDetails.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PedidoScreen;
