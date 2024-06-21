import styled, { css } from 'styled-components';
import { ReactComponent as ArrowRightIcon } from '../assets/icon-arrow-right.svg';

export default function Button({
  variant = '',
  onClick = null,
  type = 'button',
  isActive = true,
  isDark = true,
  hasArrow = false,
  isArrowRight = true,
  fontSize = 'lg',
  className = '',
  children = '',
}) {
  return (
    <S.Button
      variant={variant}
      onClick={onClick}
      type={type}
      disabled={!isActive}
      isDark={isDark}
      hasArrow={hasArrow}
      fontSize={fontSize}
      isArrowRight={isArrowRight}
      className={className}
    >
      {children}
      {hasArrow && <S.Arrow isArrowRight={isArrowRight} />}
    </S.Button>
  );
}

const buttonLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.xxxs};

  @media (min-width: 768px) {
    gap: ${({ theme: { spacing } }) => spacing.xs};
  }
`;

const buttonSpacing = css`
  padding: ${({ theme: { spacing } }) => `${spacing.xs} ${spacing.sm}`};

  @media (min-width: 768px) {
    padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.xl}`};
  }
`;

const buttonRounded = css`
  border-radius: ${({ theme: { rounded } }) => rounded.sm};
`;

const darkButtonStyles = css`
  outline: none;
  background-color: ${({ theme }) => theme.brownScale.brown40};
  color: ${({ theme }) => theme.grayScale.gray10};

  &:not(:disabled):hover {
    outline: ${({ theme }) =>
      `${theme.borderWidth.thick} solid ${theme.brownScale.brown50}`};
  }

  &:not(:disabled):active {
    background-color: ${({ theme }) => theme.brownScale.brown50};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.brownScale.brown30};
  }
`;

const lightButtonStyles = css`
  outline: ${({ theme }) =>
    `${theme.borderWidth.thin} solid ${theme.brownScale.brown40}`};
  background-color: ${({ theme }) => theme.brownScale.brown10};
  color: ${({ theme }) => theme.brownScale.brown40};

  &:not(:disabled):hover {
    outline-width: ${({ theme }) => theme.borderWidth.thick};
  }

  &:not(:disabled):active {
    outline-width: ${({ theme }) => theme.borderWidth.thick};
    background-color: ${({ theme }) => theme.brownScale.brown20};
  }

  &:disabled {
    outline-color: ${({ theme }) => theme.brownScale.brown30};
    color: ${({ theme }) => theme.brownScale.brown30};
  }
`;

const buttonFont = css`
  font-size: ${({ theme: { font } }) => font.size.xs};
  line-height: ${({ theme: { font } }) => font.lineHeight.xs};

  @media (min-width: 768px) {
    font-size: ${({ theme: { font } }) => font.size.sm};
    line-height: ${({ theme: { font } }) => font.lineHeight.sm};
  }
`;

const floatingButtonStyles = css`
  padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.xl}`};
  border-radius: ${({ theme: { rounded } }) => rounded.full};
  font-weight: ${({ theme: { font } }) => font.weight.normal};
  font-size: ${({ fontSize, theme: { font } }) => font.size[fontSize]};
  line-height: ${({ theme: { font } }) => font.lineHeight.lg};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.medium};
  @media (min-width: 768px) {
    padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.xxxl}`};
    font-size: ${({ theme: { font } }) => font.size.sm};
    line-height: ${({ theme: { font } }) => font.lineHeight.sm};
  }
`;

const fullWidthButtonStyles = css`
  width: 100%;
  padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.xl}`};
  font-size: ${({ theme: { font } }) => font.size.sm};
  line-height: ${({ theme: { font } }) => font.lineHeight.sm};
`;

const S = {};

S.Button = styled.button`
  ${buttonLayout}
  ${buttonSpacing}
  ${buttonRounded}
  ${buttonFont}
  cursor:pointer;
  &:disabled {
    cursor: not-allowed;
  }

  ${({ isDark }) => (isDark ? darkButtonStyles : lightButtonStyles)}
  ${({ variant }) => variant === 'floating' && floatingButtonStyles}
  ${({ variant }) => variant === 'fullWidth' && fullWidthButtonStyles}
`;

S.Arrow = styled(ArrowRightIcon)`
  width: 18px;
  height: 18px;
  order: ${({ isArrowRight }) => (isArrowRight ? 1 : -1)};
`;
