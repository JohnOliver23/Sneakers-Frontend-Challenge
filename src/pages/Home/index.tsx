import React from 'react';
import Header from '../../components/Header';
import { Container, ContainerCenter } from './styles';
import Input from '../../components/Input';

const Home: React.FC = () => (
  <Container>
    <Header title="Sneakers" />
    <ContainerCenter>
      <Input name="search" placeholder="Search for your sneaker" />
    </ContainerCenter>
  </Container>
);

export default Home;
