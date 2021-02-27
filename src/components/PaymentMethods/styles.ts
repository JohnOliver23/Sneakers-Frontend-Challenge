import styled, { css } from 'styled-components';

interface ContainerOptionProps {
  selected: boolean;
}

export const Container = styled.div`
  h3 {
    font-size: 22px;
    color: ${props => props.theme.color.primaryText};
    margin-bottom: 1rem;
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
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & button {
    width: 300px;
  }
`;
