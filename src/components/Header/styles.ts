import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 87px;
  background: ${props => props.theme.color.secondary};
  padding: 25px;
  display: flex;
  justify-content: space-around;
  @media all and (max-width: 769px) {
    background: #fff;
    h3 {
      display: none;
    }
  }
  h3 {
    font-size: 26px;
    font-family: Arial;
  }
`;
export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    margin-right: 10%;
    @media all and (max-width: 300px) {
      margin-right: 0px;
    }
  }
`;
export const ButtonBack = styled.button`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 17.4025px;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 20px;
  border: none;
  & svg {
    margin-right: 5px;
  }
  @media all and (max-width: 769px) {
    font-size: 12px;
    height: 30px;
    & svg {
      margin-top: -2px;
      width: 16px;
      height: 16px;
    }
  }
`;
