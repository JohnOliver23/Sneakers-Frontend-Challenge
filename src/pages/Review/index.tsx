import React from 'react';

//import { Container } from './styles';
import { Cart, Action, PaymentMethod } from '../../services/types';
import {
  Container,
  ContainerCenter,
  ContainerDetails,
  ContainerImg,
} from '../Checkout/styles';
import {
  ContainerPaymentMethod,
  ContainerTotalCost,
  ContainerPaymentMethodMobile,
} from './styles';
import { Row, Col } from 'react-bootstrap';
import OrderDetails from '../../components/OrderDetails';
import Button from '../../components/Button';
import { AiFillBank, AiOutlineCreditCard, AiFillApple } from 'react-icons/ai';
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
                    <ContainerPaymentMethodMobile>
                      <h3>Payment Method</h3>
                      <div>
                        {cart.paymentMethod === PaymentMethod.ONLINE ? (
                          <AiFillBank size={50} color="#6B8067" />
                        ) : cart.paymentMethod === PaymentMethod.CARD ? (
                          <AiOutlineCreditCard size={50} color="#6B8067" />
                        ) : (
                          <AiFillApple size={50} color="#6B8067" />
                        )}
                        <h4>{cart.paymentMethod}</h4>
                      </div>
                    </ContainerPaymentMethodMobile>
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
