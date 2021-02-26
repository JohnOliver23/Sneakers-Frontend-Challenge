import React, { useReducer, useEffect, useState } from 'react';
import { useStep } from 'react-hooks-helper';
import Header from '../../components/Header';
import Sneakers from '../Sneakers';
import { genericReducer } from '../../services/reducers';
import { Cart } from '../../services/types';
import { getSneakers } from '../../services/api';

const steps = ['sneakers', 'checkout'];

const MultiStepForm: React.FC = () => {
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
  };
  switch (index) {
    case 0:
      return (
        <>
          <Header title="Sneakers" />
          <Sneakers {...propsSneakers} />
        </>
      );
    case 1:
      return <p>oi</p>;
    default:
      return null;
  }
};

export default MultiStepForm;
