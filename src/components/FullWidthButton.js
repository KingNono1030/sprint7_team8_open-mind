import styled, { css } from 'styled-components';
import Button from './Button';

export default function FullWidthButton({
  onClick = null,
  type = 'button',
  isActive = true,
  isDark = true,
  hasArrow = false,
  isArrowRight = true,
  children = '',
}) {
  return (
    <S.FullWidthButton>
      onClick={onClick}
      type={type}
      disabled={!isActive}
      isDark={isDark}
      hasArrow={hasArrow}
      isArrowRight={isArrowRight}>{children}
    </S.FullWidthButton>
  );
}

const buttonSize = css`
  width: 100%;
`;

const buttonSpacing = css`
  padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.xl}`};
`;

const buttonFont = css`
  font-size: ${({ fontSize, theme: { font } }) => font.size.sm};
  line-height: ${({ theme: { font } }) => font.lineHeight.sm};
`;

const S = {};

S.FullWidthButton = styled(Button)`
  ${buttonSize}
  ${buttonSpacing}
  ${buttonFont}
`;
