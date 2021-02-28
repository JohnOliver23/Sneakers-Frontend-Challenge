import React from 'react';

//import { Container } from './styles';
import { Cart, Action } from '../../services/types';
import {
  Container,
  ContainerCenter,
  ContainerDetails,
  ContainerImg,
} from '../Checkout/styles';
import { ContainerPaymentMethod, ContainerTotalCost } from './styles';
import { Row, Col } from 'react-bootstrap';
import OrderDetails from '../../components/OrderDetails';
import Button from '../../components/Button';
interface ReviewProps {
  navigation: any;
  cart: Cart | undefined;
  setCart: React.Dispatch<Action>;
}
const Review: React.FC<ReviewProps> = ({
  navigation,
  cart,
  setCart,
}: ReviewProps) => {
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
                <h3 className="checkout-title">Review and Confirmation</h3>
                <OrderDetails cart={cart} />
                <ContainerPaymentMethod>
                  <Col md={6}>
                    <ContainerTotalCost>
                      <div>
                        <h4>Total cost</h4>
                        <p>Delivery included</p>
                      </div>
                      <h2>$ {cart.totalCost}</h2>
                    </ContainerTotalCost>
                  </Col>
                  <Col md={6}>
                    <Button>Place order</Button>
                  </Col>
                </ContainerPaymentMethod>
              </ContainerDetails>
            </Col>
          </Row>
        </ContainerCenter>
      </Container>
    );
  }
  return <div />;
};

export default Review;
