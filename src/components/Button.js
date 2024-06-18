import styled, { css } from 'styled-components';
import arrowRightIcon from '../assets/icon-arrow-right.svg';

export default function Button({
  variant = '',
  onClick = null,
  onSubmit = null,
  type = 'button',
  isActive = true,
  isDark = true,
  hasArrow = false,
  isArrowRight = true,
  children = '',
}) {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={!isActive}
      isDark={isDark}
      hasArrow={hasArrow}
      isArrowRight={isArrowRight}
    >
      {children}
      {hasArrow && (
        <StyledIcon src={arrowRightIcon} isArrowRight={isArrowRight} />
      )}
    </StyledButton>
  );
}

const buttonLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.xxxs};
  height: 46px;
`;

const buttonSpacing = css`
  padding: ${({ theme: { spacing } }) => `${spacing.xs} ${spacing.sm}`};
`;

const buttonRounded = css`
  border-radius: ${({ theme: { rounded } }) => rounded.sm};
`;

const buttonColor = css`
  ${({ isDark, theme }) =>
    isDark
      ? `
    border: none;
    background-color: ${theme.brownScale.brown40};
    color: ${theme.grayScale.gray10};

    &:hover {
      border: ${theme.borderWidth.thick} solid ${theme.brownScale.brown50};
    }

    &:active {
      background-color: ${theme.brownScale.brown50};
    }

    &:disabled {
      background-color: ${theme.brownScale.brown30};
    }
    `
      : `
    border: ${theme.borderWidth.thin} solid ${theme.brownScale.brown40};
    background-color: ${theme.brownScale.brown10};
    color: ${theme.brownScale.brown40};

    &:hover {
      border-width: ${theme.borderWidth.thick};
    }
    
    &:active {
      border-width: ${theme.borderWidth.thick};
      background-color: ${theme.brownScale.brown20};
    }

    &:disabled {
      border-color: ${theme.brownScale.brown30};
      color: ${theme.brownScale.brown30};
    }
    `}
`;

const buttonFont = css`
  font-weight: ${({ theme: { font } }) => font.weight.normal};
  font-size: ${({ theme: { font } }) => font.size.xs};
  line-height: ${({ theme: { font } }) => font.lineHeight.xs};
`;

const floatingButtonStyles = css`
  padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.xl}`};
  border-radius: ${({ theme: { rounded } }) => '200px'};
  font-weight: ${({ theme: { font } }) => font.weight.normal};
  font-size: ${({ fontSize, theme: { font } }) => font.size[fontSize]};
  line-height: ${({ theme: { font } }) => font.lineHeight.lg};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.medium};
`;

const fullWidthButtonStyles = css`
  width: 100%;
  padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.xl}`};
  font-size: ${({ fontSize, theme: { font } }) => font.size.sm};
  line-height: ${({ theme: { font } }) => font.lineHeight.sm};
`;

const StyledButton = styled.button`
  ${buttonLayout}
  ${buttonSpacing}
  ${buttonRounded}
  ${buttonColor}
  ${buttonFont}

  ${({ variant }) => variant === 'floating' && floatingButtonStyles}
  ${({ variant }) => variant === 'fullWidth' && fullWidthButtonStyles}
`;

const StyledIcon = styled.img`
  order: ${({ isArrowRight }) => (isArrowRight ? 1 : -1)};
`;