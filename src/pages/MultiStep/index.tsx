import React, { useReducer, useEffect, useState } from 'react';
import { useStep } from 'react-hooks-helper';
import Header from '../../components/Header';
import Sneakers from '../Sneakers';
import Checkout from '../Checkout';
import { genericReducer } from '../../services/reducers';
import { Cart } from '../../services/types';
import { getSneakers } from '../../services/api';
import Step from '../../components/Step';

const steps = ['Cart', 'Payment Options', 'Receipt'];

const MultiStep: React.FC = () => {
  const { navigation, index } = useStep({ initialStep: 0, steps });
  const [sneakers, setSneakers] = useReducer(genericReducer, []);
  const [sneakersToShow, setSneakersToShow] = useReducer(genericReducer, []);
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    (async () => {
      const res = await getSneakers();
      if (res && res.status === 200) {
        setSneakers({ type: 'UPDATE-ALL', payload: res.data.results });
        setSneakersToShow({ type: 'UPDATE-ALL', payload: res.data.results });
      }
    })();
  }, []);

  const propsSneakers = {
    navigation,
    sneakers,
    sneakersToShow,
    setSneakersToShow,
    setCart,
  };
  const propsCheckout = {
    cart,
    navigation,
    setCart,
  };
  const { previous } = navigation;
  switch (index) {
    case 0:
      return (
        <>
          <Header title="Sneakers" />
          <Sneakers {...propsSneakers} />
        </>
      );
    case 1:
      return (
        <>
          <Header title="Checkout" previous={previous} />
          <Step activeStep={1} steps={steps} />
          <Checkout {...propsCheckout} />
        </>
      );
    default:
      return null;
  }
};

export default MultiStep;
