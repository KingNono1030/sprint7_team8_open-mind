import styled, { css } from 'styled-components';
import Button from './Button';

export default function FloatingButton({
  onClick = null,
  onSubmit = null,
  type = 'button',
  isActive = true,
  isDark = true,
  hasArrow = false,
  isArrowRight = true,
  fontSize = 'lg',
  children = '',
}) {
  return (
    <StyledFloatingButton>
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={!isActive}
      isDark={isDark}
      hasArrow={hasArrow}
      isArrowRight={isArrowRight}>{children}
    </StyledFloatingButton>
  );
}

const buttonSpacing = css`
  padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.xl}`};
`;
const buttonRounded = css`
  padding: ${({ theme: { rounded } }) => rounded.full};
`;
const buttonFont = css`
  font-weight: ${({ theme: { font } }) => font.weight.normal};
  font-size: ${({ fontSize, theme: { font } }) => font.size[fontSize]};
  line-height: ${({ theme: { font } }) => font.lineHeight.lg};
`;
const buttonShadow = css`
  padding: ${({ theme: { boxShadow } }) => boxShadow.medium};
`;
const StyledFloatingButton = styled(Button)`
  ${buttonSpacing}
  ${buttonRounded}
  ${buttonFont}
  ${buttonShadow}
`;
