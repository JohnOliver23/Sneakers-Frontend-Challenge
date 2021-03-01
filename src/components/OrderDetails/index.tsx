import React from 'react';
import { Cart, PaymentMethod } from '../../services/types';
import {
  Container,
  Content,
  ContainerDetails,
  ContainerImg,
} from '../CartDetails/styles';
import { Col } from 'react-bootstrap';
import { AiFillBank, AiOutlineCreditCard, AiFillApple } from 'react-icons/ai';
// import { Container } from './styles';
interface OrderDetailsProps {
  cart: Cart;
}
const OrderDetails: React.FC<OrderDetailsProps> = ({ cart }) => {
  return (
    <Container>
      <Content>
        <Col xs={4} className="container-img">
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
            <div>
              {cart.paymentMethod === PaymentMethod.ONLINE ? (
                <AiFillBank size={40} color="#6B8067" />
              ) : cart.paymentMethod === PaymentMethod.CARD ? (
                <AiOutlineCreditCard size={30} color="#6B8067" />
              ) : (
                <AiFillApple size={30} color="#6B8067" />
              )}
              <h4>{cart.paymentMethod}</h4>
            </div>
          </Col>
        </ContainerDetails>
      </Content>
    </Container>
  );
};

export default OrderDetails;
