import styled from 'styled-components';

interface ContainerImgProps {
  url: string;
}
export const Container = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 18px;
    color: ${props => props.theme.color.primaryText};
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 14px;
    color: ${props => props.theme.color.primaryText};
    margin-bottom: 0px;
  }
  p {
    font-size: 14px;
    color: ${props => props.theme.color.secondaryText};
    margin-bottom: 0px;
  }
  .total-cost {
    display: flex;
    margin-top: 1rem;
    @media all and (max-width: 1000px) {
      display: none;
    }
  }
    .total-cost-mobile {
      margin-top: 1rem;
      justify-content: space-between;
      display: none;
      @media all and (max-width: 1000px) {
        display: flex;
      }
    }
    h2 {
      font-size: 30px;
      color: ${props => props.theme.color.primaryText};
      margin-left: 2rem;
      font-weight: 600;
    }
    .container-column {
      display: flex;
      flex-direction: column;
    }
  .container-img {
    display: none;
    padding-right: 15px;
    height: 150px;;
    @media all and (max-width: 1000px) {
      display: block;
    }
  }
`
export const Content = styled.div`
  display: flex;
`;
export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media all and (max-width: 1000px) {
      flex-direction: column;
    }
`
export const ContainerImg = styled.div<ContainerImgProps>`
  background-image: url(${props => props.url});
  width: 100%;
  height: 100%;
  min-width: 150px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;
