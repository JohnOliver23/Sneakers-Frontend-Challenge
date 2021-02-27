/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { IoIosSearch } from 'react-icons/io';
import {
  Container,
  ContainerCenter,
  ContainerSneakers,
  NoSearchTitle,
} from './styles';
import Input from '../../components/Input';
import { Sneaker, Action, Cart } from '../../services/types';
import CardSneaker from '../../components/CardSneaker';

interface SneakerProps {
  navigation: any;
  sneakers: Sneaker[];
  sneakersToShow: Sneaker[];
  setSneakersToShow: React.Dispatch<Action>;
  setCart: React.Dispatch<React.SetStateAction<Cart | undefined>>;
}

const Sneakers: React.FC<SneakerProps> = ({
  navigation,
  sneakers,
  sneakersToShow,
  setSneakersToShow,
  setCart,
}: SneakerProps) => {
  const handleSearchChange = useCallback(
    (value: string) => {
      const newSneakers = sneakers.filter(sneaker =>
        sneaker.description
          .toLowerCase()
          .includes(value.length > 0 ? value.toLocaleLowerCase() : ''),
      );
      setSneakersToShow({ type: 'UPDATE-ALL', payload: newSneakers });
    },
    [sneakers, setSneakersToShow],
  );
  return (
    <Container>
      <ContainerCenter>
        <Input
          icon={IoIosSearch}
          name="search"
          placeholder="Search for your sneaker"
          onChange={e => handleSearchChange(e.target.value)}
        />
        {sneakersToShow.length > 0 ? (
          <ContainerSneakers>
            {sneakersToShow.map((sneaker: Sneaker, index: number) => (
              <CardSneaker
                key={index}
                sneaker={sneaker}
                navigation={navigation}
                setCart={setCart}
              />
            ))}
          </ContainerSneakers>
        ) : (
          <NoSearchTitle>
            There are no results for the selected filter
          </NoSearchTitle>
        )}
      </ContainerCenter>
    </Container>
  );
};

export default Sneakers;
