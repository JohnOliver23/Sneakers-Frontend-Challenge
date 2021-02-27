import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  h3 {
    font-size: 22px;
    color: ${props => props.theme.color.primaryText};
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 16px;
    color: ${props => props.theme.color.primaryText};
    margin-bottom: 0px;
  }
  p {
    font-size: 16px;
    color: ${props => props.theme.color.secondaryText};
    margin-bottom: 0px;
  }
  .total-cost {
    display: flex;
    margin-top: 1rem;
    h2 {
      font-size: 32px;
      color: ${props => props.theme.color.primaryText};
      margin-left: 2rem;
    }
  }
`;
