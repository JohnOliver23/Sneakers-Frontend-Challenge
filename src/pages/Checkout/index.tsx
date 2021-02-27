import React from 'react';
import { Cart } from '../../services/types';
import {
  Container,
  ContainerCenter,
  ContainerDetails,
  ContainerImg,
} from './styles';
import { Row, Col } from 'react-bootstrap';
import CartDetails from '../../components/CartDetails';
import PaymentMethods from '../../components/PaymentMethods';

interface CheckoutProps {
  navigation: any;
  cart: Cart | undefined;
  setCart: React.Dispatch<React.SetStateAction<Cart | undefined>>;
}

const Checkout: React.FC<CheckoutProps> = ({
  navigation,
  cart,
  setCart,
}: CheckoutProps) => {
  if (cart) {
    return (
      <Container>
        <ContainerCenter>
          <Row>
            <Col md={5}>
              <ContainerImg url={cart.sneaker.maxresURL}></ContainerImg>
            </Col>
            <Col md={7}>
              <ContainerDetails>
                <CartDetails cart={cart} />
                <PaymentMethods />
              </ContainerDetails>
            </Col>
          </Row>
        </ContainerCenter>
      </Container>
    );
  }
  return <div />;
};

export default Checkout;
