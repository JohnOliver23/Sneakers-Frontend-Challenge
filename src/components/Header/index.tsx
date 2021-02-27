/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Avatar from '../../assets/images/Avatar.png';
import {
  Container,
  ContainerCenter,
  ContainerAvatar,
  ButtonBack,
} from './styles';
import { FiArrowLeft } from 'react-icons/fi';

interface HeaderProps {
  title: string;
  previous?: any;
}

const Header: React.FC<HeaderProps> = ({ title, previous }: HeaderProps) => {
  return (
    <Container>
      {previous && (
        <ButtonBack onClick={previous}>
          <FiArrowLeft size={20} />
          Back
        </ButtonBack>
      )}
      <ContainerCenter>
        <h3>{title}</h3>
      </ContainerCenter>
      <ContainerAvatar>
        <img src={Avatar} />
      </ContainerAvatar>
    </Container>
  );
};

export default Header;
