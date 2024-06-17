import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../assets/image-logo.svg';

export default function Logo({ size = 'md' }) {
  return (
    <Link to='/'>
      <S.LogoImg size={size} src={logoImg} alt='오픈마인드 로고' />
    </Link>
  );
}

const S = {};

const SIZES = {
  sm: '124px',
  md: '146px',
  lg: '248px',
};

S.LogoImg = styled.img`
  width: ${({ size }) => SIZES[size]};
`;
