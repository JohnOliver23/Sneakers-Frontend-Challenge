/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Avatar from '../../assets/images/Avatar.png';

import { Container, ContainerCenter, ContainerAvatar } from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => (
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
