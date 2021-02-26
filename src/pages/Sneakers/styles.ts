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
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .col-md-4 {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media all and (max-width: 1200px) {
    .col-md-4 {
      max-width: 50%;
      flex: 50%;
    }
  }
  @media all and (max-width: 800px) {
    .col-md-4 {
      max-width: 100%;
      flex: 100%;
      padding: 0px;
    }
  }
`;
export const NoSearchTitle = styled.h3`
  font-size: 18px;
  color: ${props => props.theme.color.primary};
  font-weight: 600;
  margin-top: 1rem;
  text-align: center;
`;
