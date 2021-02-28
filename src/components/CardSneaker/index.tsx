/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { Col } from 'react-bootstrap';
import { Container, ContainerSelects, ContainerCenter } from './styles';
import { Sneaker, PaymentMethod } from '../../services/types';
import Button from '../Button';
import Select from '../Select';
import { SneakerNumbers, SneakerQuantity, customer } from '../../utils/util';
import { useFormik } from 'formik';
import { formatPrice } from '../../services/functions';
import { Action } from '../../services/types';

interface SneakerCardProps {
  sneaker: Sneaker;
  navigation: any;
  setCart: React.Dispatch<Action>;
}

const CardSneaker: React.FC<SneakerCardProps> = ({
  sneaker,
  navigation,
  setCart,
}: SneakerCardProps) => {
  const { next } = navigation;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      size: 41,
      quantity: 1,
    },

    onSubmit: async values => {
      let cart = {
        sneaker,
        quantity: values.quantity,
        size: values.size,
        customer,
        totalCost: formatPrice(sneaker.price, values.quantity),
        paymentMethod: PaymentMethod.ONLINE,
      };
      setCart({ type: 'UPDATE-ALL', payload: cart });
      next();
    },
  });

  const mapAllNumbers = useCallback(
    () =>
      SneakerNumbers.map(number => (
        <option key={number} value={number}>
          {number}
        </option>
      )),
    [],
  );
  const mapAllQuantity = useCallback(
    () =>
      SneakerQuantity.map(number => (
        <option key={number} value={number}>
          {number}
        </option>
      )),
    [],
  );
  return (
    <Col md={4}>
      <Container>
        <img src={sneaker.thumbnailURL} alt={`picture${sneaker.id}`} />
        <h4>{sneaker.description}</h4>
        <ContainerCenter>
          <form onSubmit={formik.handleSubmit}>
            <ContainerSelects>
              <div>
                <p>Size</p>
                <Select
                  name="size"
                  onChange={formik.handleChange}
                  value={formik.values.size}
                  list={mapAllNumbers()}
                />
              </div>
              <div>
                <p>Quantity</p>
                <Select
                  name="quantity"
                  onChange={formik.handleChange}
                  value={formik.values.quantity}
                  list={mapAllQuantity()}
                />
              </div>
            </ContainerSelects>
            <h3>$ {sneaker.price}</h3>
            <Button type="submit">Add to Cart</Button>
          </form>
        </ContainerCenter>
      </Container>
    </Col>
  );
};

export default CardSneaker;
