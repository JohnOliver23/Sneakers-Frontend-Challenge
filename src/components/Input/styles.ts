import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-bottom: 1px solid #bdbdbd;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.color.primary};
      border-color: ${props.theme.color.primary};
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  input {
    font-family: Open Sans;
    font-style: normal;
    flex: 1;
    background: transparent;
    border: 0;
    color: ${props => props.theme.color.primaryText};
    text-align: center;
    &::placeholder {
      text-align: center;
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
