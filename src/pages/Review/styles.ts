import styled from 'styled-components';

export const ContainerPaymentMethod = styled.div`
  display: flex;
  padding: 1rem;
  background: #f7f7f7;
  border-radius: 10px;
  margin-top: 1rem;
  .col-md-6 {
    padding-left: 0px;
    padding-right: 0px;
  }
  @media all and (max-width: 769px) {
    flex-direction: column;
  }
`;
export const ContainerPaymentMethodMobile = styled.div`
  border-bottom: 1px solid #d6d6d6;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  display: none;
  div {
    display: flex;
    align-items: center;
  }
  & svg {
    margin-right: 5px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 14px;
    margin-top: 11px;
  }
  @media all and (max-width: 769px) {
    display: block;
  }
`;

export const ContainerTotalCost = styled.div`
  display: flex;
  margin-top: 1rem;
  h4 {
    font-size: 14px;
    color: ${props => props.theme.color.primaryText};
    margin-bottom: 0px;
  }
  p {
    font-size: 14px;
    color: ${props => props.theme.color.secondaryText};
    margin-bottom: 0px;
  }
  h2 {
    font-size: 30px;
    color: ${props => props.theme.color.primaryText};
    margin-left: 2rem;
    font-weight: 600;
  }
`;
