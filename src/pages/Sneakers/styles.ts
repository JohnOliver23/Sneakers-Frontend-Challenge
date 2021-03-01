import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerCenter = styled.div`
  margin-top: 3rem;
  width: 80%;
  @media all and (max-width: 800px) {
    width: 90%;
    margin-top: 1rem;
  }
`;
export const ContainerSneakers = styled.div`
  margin-top: 3rem !important;
  display: grid;
  grid-template-columns: 370px 370px 370px;
  justify-content: space-around;
  .col-md-4 {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media all and (max-width: 1200px) {
    grid-template-columns: 370px 370px;
  }
  @media all and (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;
export const NoSearchTitle = styled.h3`
  font-size: 18px;
  color: ${props => props.theme.color.primary};
  font-weight: 600;
  margin-top: 1rem;
  text-align: center;
`;
