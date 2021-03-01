import React, { useCallback } from 'react';

import {
  Container,
  ContainerOption,
  ContainerButton,
  ContainerSave,
} from './styles';
import { Cart, PaymentMethod } from '../../services/types';
import OnlineBankingCards from '../../assets/images/OnlineBankingCards.png';
import CardPayments from '../../assets/images/CardPayments.png';
import ApplePay from '../../assets/images/ApplePay.png';
import Button from '../Button';
import { Action } from '../../services/types';
import { stablishData } from '../../utils/util';
import { toast } from 'react-toastify';

interface PaymentMethodsProps {
  navigation: any;
  cart: Cart | undefined;
  setCart: React.Dispatch<Action>;
}
declare global {
  interface Window {
    PayWithMyBank: any;
  }
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  navigation,
  cart,
  setCart,
}: PaymentMethodsProps) => {
  const { next } = navigation;
  // Change option to pay
  const handleChangeOption = useCallback(
    (paymentMethod: PaymentMethod) => {
      if (cart) {
        setCart({ type: 'UPDATE-METHOD', cart: cart, payload: paymentMethod });
      }
    },
    [cart, setCart],
  );
  //integration with Pay with my Bank
  const handleClick = useCallback(() => {
    if (cart?.paymentMethod === PaymentMethod.ONLINE) {
      stablishData.amount = `${cart?.sneaker.price}`;
      const script = document.createElement('script');
      script.src =
        '//sandbox.paywithmybank.com/start/scripts/pwmb.js?accessId=D61EC9BAF0BB369B9438';
      script.async = true;
      script.onload = () => {
        window.PayWithMyBank.establish(stablishData);
        window.PayWithMyBank.addPanelListener(function (
          command: any,
          event: any,
        ) {
          if (command === 'event' && event.type === 'new_location') {
            if (event.data.indexOf('#success') === 0) {
              next();
            } else {
              toast.error('Transaction canceled');
            }
            return false;
          }
        });
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    } else {
      next();
    }
  }, [cart, next]);

  return (
    <>
      <Container>
        <h3>Select your payment method </h3>
        <ContainerSave>
          <p>SAVE $10</p>
        </ContainerSave>
        <ContainerOption
          onClick={() => handleChangeOption(PaymentMethod.ONLINE)}
          selected={cart?.paymentMethod === PaymentMethod.ONLINE}
        >
          <p className="p-online-banking">Online Banking</p>
          <img
            className="img-online"
            src={OnlineBankingCards}
            alt="Online Banking"
          />
        </ContainerOption>
        <ContainerOption
          onClick={() => handleChangeOption(PaymentMethod.CARD)}
          selected={cart?.paymentMethod === PaymentMethod.CARD}
        >
          <p>Card Payment</p>
          <img className="img-card" src={CardPayments} alt="Card Payment" />
        </ContainerOption>
        <ContainerOption
          onClick={() => handleChangeOption(PaymentMethod.APPLE)}
          selected={cart?.paymentMethod === PaymentMethod.APPLE}
        >
          <p>Apple Pay</p>
          <img className="img-apple" src={ApplePay} alt="Apple Pay" />
        </ContainerOption>
        <ContainerButton>
          <Button onClick={() => handleClick()}>Continue</Button>
        </ContainerButton>
      </Container>
    </>
  );
};

export default PaymentMethods;
