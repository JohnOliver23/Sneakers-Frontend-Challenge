/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { Col } from 'react-bootstrap';
import { Container, ContainerSelects, ContainerCenter } from './styles';
import { Sneaker } from '../../services/types';
import Button from '../Button';
import Select from '../Select';
import { SneakerNumbers, SneakerQuantity } from '../../utils/util';

interface SneakerCardProps {
  sneaker: Sneaker;
  navigation: any;
}

const CardSneaker: React.FC<SneakerCardProps> = ({
  sneaker,
  navigation,
}: SneakerCardProps) => {
  const mapAllNumbers = useCallback(
    () =>
      SneakerNumbers.map(number => (
        <option
          selected={number === 41 ? true : false}
          key={number}
          value={number}
        >
          {number}
        </option>
      )),
    [],
  );
  const mapAllQuantity = useCallback(
    () =>
      SneakerQuantity.map(number => (
        <option
          selected={number === 1 ? true : false}
          key={number}
          value={number}
        >
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
          <ContainerSelects>
            <div>
              <p>Size</p>
              <Select value={41} list={mapAllNumbers()} />
            </div>
            <div>
              <p>Quantity</p>
              <Select value={1} list={mapAllQuantity()} />
            </div>
          </ContainerSelects>
          <h3>R$ {sneaker.price}</h3>
          <Button>Add to Cart</Button>
        </ContainerCenter>
      </Container>
    </Col>
  );
};

export default CardSneaker;
