import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  min-width: 300px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
  margin-bottom: 4rem;
  max-width: 370px;
  img {
    width: 100%;
  }
  h4 {
    font-family: 'Open Sans';
    text-align: center;
    margin-top: 16px;
    font-size: 20px;
  }
  h3 {
    font-family: 'Open Sans';
    text-align: center;
    margin-top: 10px;
    font-size: 21px;
    font-weight: bold;
  }
  @media all and (max-width: 769px) {
    max-width: unset;
  }
`;
export const ContainerSelects = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  p {
    font-size: 14px;
    line-height: 18px;
    color: #8d8d8d;
    margin-right: 10px;
    margin-bottom: 0px;
    margin-top: 5px;
  }
  div {
    display: flex;
  }
`;
export const ContainerCenter = styled.div`
  padding: 10px;
  margin-bottom: 2rem !important;
  & button {
    margin-bottom: 10px;
  }
`;
