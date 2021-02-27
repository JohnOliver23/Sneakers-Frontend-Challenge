import React from 'react';

import { Container, ContainerOption, ContainerButton } from './styles';
import { Cart } from '../../services/types';
import OnlineBankingCards from '../../assets/images/OnlineBankingCards.png';
import CardPayments from '../../assets/images/CardPayments.png';
import ApplePay from '../../assets/images/ApplePay.png';
import Button from '../Button';

interface PaymentMethodsProps {
  navigation: any;
  cart: Cart | undefined;
  setCart: React.Dispatch<React.SetStateAction<Cart | undefined>>;
}

const PaymentMethods: React.FC = () => {
  return (
    <Container>
      <h3>Select your payment method </h3>
      <ContainerOption>
        <p>Online Banking</p>
        <img src={OnlineBankingCards} alt="Online Banking" />
      </ContainerOption>
      <ContainerOption>
        <p>Card Payment</p>
        <img src={CardPayments} alt="Card Payment" />
      </ContainerOption>
      <ContainerOption>
        <p>Apple Pay</p>
        <img src={ApplePay} alt="Apple Pay" />
      </ContainerOption>
      <ContainerButton>
        <Button>Continue</Button>
      </ContainerButton>
    </Container>
  );
};

export default PaymentMethods;
