import styled, { css } from 'styled-components';
import Button from './Button';

export default function FloatingButton({
  onClick = null,
  type = 'button',
  isActive = true,
  isDark = true,
  hasArrow = false,
  isArrowRight = true,
  fontSize = 'lg',
  children = '',
}) {
  return (
    <S.FloatingButton>
      onClick={onClick}
      type={type}
      disabled={!isActive}
      isDark={isDark}
      hasArrow={hasArrow}
      fontSize={fontSize}
      isArrowRight={isArrowRight}>{children}
    </S.FloatingButton>
  );
}

const buttonSpacing = css`
  padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.xl}`};
`;

const buttonRounded = css`
  border-radius: ${({ theme: { rounded } }) => rounded.full};
`;

const buttonFont = css`
  font-size: ${({ fontSize, theme: { font } }) => font.size[fontSize]};
  line-height: ${({ theme: { font } }) => font.lineHeight.lg};
`;

const buttonShadow = css`
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.medium};
`;

const S = {};

S.FloatingButton = styled(Button)`
  ${buttonSpacing}
  ${buttonRounded}
  ${buttonFont}
  ${buttonShadow}
`;
