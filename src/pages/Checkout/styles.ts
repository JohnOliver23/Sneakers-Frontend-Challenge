import styled from 'styled-components';

interface ContainerImgProps {
  url: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .checkout-title {
    display: none;
    font-size: 18px;
    color: ${props => props.theme.color.primaryText};
  }
  .payment-title {
    display: none;
    font-size: 18px;
    color: ${props => props.theme.color.primaryText};
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media all and (max-width: 1000px) {
    .checkout-title {
      display: block;
    }
    .payment-title {
      display: block;
    }
  }
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
  @media all and (max-width: 1000px) {
    width: 100%;
    .col-md-7 {
      max-width: 100%;
      flex: 100%;
    }
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
  @media all and (max-width: 1000px) {
    display: none;
  }
`;
export const ContainerDetails = styled.div`
  width: 100%;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 1000px) {
    padding: 0px;
    background: #fff;
  }
`;
