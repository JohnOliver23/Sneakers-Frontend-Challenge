import styled from 'styled-components';

interface ContainerImgProps {
  url: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 2rem;
  .row {
    width: 100%;
  }
`;
export const ContainerImg = styled.div<ContainerImgProps>`
  background-image: url(${props => props.url});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;
export const ContainerDetails = styled.div`
  width: 100%;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
