import React from 'react';
import { Cart } from '../../services/types';
import {
  Container,
  Content,
  ContainerDetails,
  ContainerImg,
} from '../CartDetails/styles';
import { Col } from 'react-bootstrap';
// import { Container } from './styles';
interface OrderDetailsProps {
  cart: Cart;
}
const OrderDetails: React.FC<OrderDetailsProps> = ({ cart }) => {
  return (
    <Container>
      <Content>
        <Col md={4} className="container-img">
          <ContainerImg url={cart.sneaker.thumbnailURL} />
        </Col>
        <ContainerDetails>
          <Col md={6}>
            <h3>Order Sumary</h3>
            <h4>{cart.sneaker.description}</h4>
            <p>
              x {cart.quantity} {cart.sneaker.color} {cart.size}
            </p>
            <p>item #{cart.sneaker.id}</p>
          </Col>
          <Col className="payment-method">
            <h3>Payment Method</h3>
            <h4>{cart.paymentMethod}</h4>
          </Col>
        </ContainerDetails>
      </Content>
    </Container>
  );
};

export default OrderDetails;
