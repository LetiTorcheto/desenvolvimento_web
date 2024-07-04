import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/Form"; // Verifique se o caminho do componente está correto
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function ShippingScreen() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [contactNumber, setContactNumber] = useState(shippingAddress.contactNumber || '');
  const [country, setCountry] = useState(shippingAddress.country || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address,
        city,
        contactNumber,
        country,
      })
    );

    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Envio</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Endereco</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Endereco"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Digite a cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="contactNumber">
          <Form.Label>Numero de Contato</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Insira o número de contato"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Pais</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Insira o país"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>

        <Button className="my-3" type="submit" variant="primary">
          Continuar
        </Button>
      </Form>
    </FormContainer>
  );
}

export default ShippingScreen;
