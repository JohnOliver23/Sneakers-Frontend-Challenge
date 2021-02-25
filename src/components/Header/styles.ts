import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 87px;
  background: ${props => props.theme.color.secondary};
  padding: 25px;
  h3 {
    font-size: 26px;
    font-family: Arial;
  }
`;
export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    margin-top: -35px;
    margin-right: 10%;
    @media all and (max-width: 300px) {
      margin-right: 0px;
    }
  }
`;
