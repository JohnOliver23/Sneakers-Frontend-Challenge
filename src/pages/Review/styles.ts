import styled from 'styled-components';

export const ContainerPaymentMethod = styled.div`
  display: flex;
  @media all and (max-width: 769px) {
    flex-direction: column;
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
