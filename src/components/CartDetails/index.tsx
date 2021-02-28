import React from 'react';
import { Cart } from '../../services/types';
import { Container, Content, ContainerDetails, ContainerImg } from './styles';
import { Col } from 'react-bootstrap';

interface CartDetailsProps {
  cart: Cart;
}

const CartDetails: React.FC<CartDetailsProps> = ({
  cart,
}: CartDetailsProps) => {
  return (
    <Container>
      <Content>
        <Col md={4} className="container-img">
          <ContainerImg url={cart.sneaker.thumbnailURL} />
        </Col>
        <ContainerDetails>
          <div>
            <h3>Cart total</h3>
            <h4>{cart.sneaker.description}</h4>
            <p>
              x {cart.quantity} {cart.sneaker.color} {cart.size}
            </p>
            <p>item #{cart.sneaker.id}</p>
          </div>
          <div className="delivery-details">
            <h3>Delivery Details</h3>
            <p>{cart.customer.name}</p>
            <p>Phone no: {cart.customer.phone}</p>
            <p>
              Address: {cart.customer.address.street},{' '}
              {cart.customer.address.number}
            </p>
            <div className="total-cost">
              <div>
                <h4>Total cost</h4>
                <p>Delivery included</p>
              </div>
              <h2>$ {cart.totalCost}</h2>
            </div>
          </div>
        </ContainerDetails>
      </Content>
      <div className="total-cost-mobile">
        <div>
          <h4>Total cost</h4>
          <p>Delivery included</p>
        </div>
        <h2>$ {cart.totalCost}</h2>
      </div>
    </Container>
  );
};

export default CartDetails;
