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
  .img-apple {
    width: 60px;
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
  @media all and (max-width: 769px) {
    .p-online-banking {
      margin-top: -10px;
    }
  }
`;
export const ContainerSave = styled.div`
  background: #ffcc00;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  height: 18px;
  width: 70px;
  position: absolute;
  margin-top: -8px;
  margin-left: 20px;
  & p {
    color: #9e7d27;
    font-size: 10px;
    text-align: center;
    margin-bottom: 0px;
    padding-top: 1px;
  }
  @media all and (max-width: 769px) {
    margin-top: 36px;
    margin-left: 22px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & button {
    width: 300px;
  }
  @media all and (max-width: 769px) {
    button {
      width: 100% !important;
    }
  }
`;
