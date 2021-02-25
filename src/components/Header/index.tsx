/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Avatar from '../../assets/images/Avatar.png';

import { Container, ContainerCenter, ContainerAvatar } from './styles';

interface HeaderlProps {
  title: string;
}

const Header: React.FC<HeaderlProps> = ({ title }: HeaderlProps) => (
  <Container>
    <ContainerCenter>
      <h3>{title}</h3>
    </ContainerCenter>
    <ContainerAvatar>
      <img src={Avatar} />
    </ContainerAvatar>
  </Container>
);

export default Header;
