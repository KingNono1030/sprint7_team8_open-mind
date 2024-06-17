import styled from 'styled-components';
import { theme } from '../utils/theme';

export default function Toast({ content = 'URL이 복사되었습니다' }) {
  return (
    <S.ToastContainer>
      <S.ToastContent>{content}</S.ToastContent>
    </S.ToastContainer>
  );
}

const S = {};

S.ToastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: ${theme.grayScale.gray60};
  box-shadow: ${theme.boxShadow.medium};
`;

S.ToastContent = styled.span`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.xs};
  font-weight: ${theme.font.weight.medium};
  line-height: ${theme.font.lineHeight.xs};
  color: ${theme.grayScale.gray10};
`;
