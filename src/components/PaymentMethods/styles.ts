import styled, { css } from 'styled-components';

interface ContainerOptionProps {
  selected: boolean;
}

export const Container = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  padding: 16px;
  h3 {
    font-size: 22px;
    color: ${props => props.theme.color.primaryText};
    margin-bottom: 1rem;
  }
  @media all and (max-width: 1000px) {
    h3 {
      display: none;
    }
  }
`;

export const ContainerOption = styled.div<ContainerOptionProps>`
  ${props =>
    props.selected &&
    css`
      border: 1px solid #5dac50;
    `}
  background: #ffffff;
  border-radius: 10.8766px;
  height: 70px;
  width: 100%;
  padding: 22px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  + div {
    margin-top: 1rem;
  }
  & p {
    font-size: 16px;
    color: #535353;
    margin-bottom: 0px;
  }
  @media all and (max-width: 1000px) {
    p {
      font-size: 12px;
      margin-top: 3px;
    }
    .img-online {
      width: 100px;
      height: 20px;
    }
    .img-card {
      width: 70px;
      height: 20px;
    }
    .img-apple {
      width: 50px;
      height: 30px;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & button {
    width: 300px;
  }
`;
