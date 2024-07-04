import React from "react";

import { Button, Form, Col } from "react-bootstrap";


import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";






function PaymentScreen({ history }) {
  









  const submitHandler = (e) => {
    e.preventDefault();


   
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Selecione um metodo</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal ou cartao de credito"
              id="paypal"
              name="paymentMethod"
              checked
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-3">
          Continuar
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;