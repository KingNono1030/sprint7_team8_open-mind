import styled, { css } from 'styled-components';
import arrowRightIcon from '../assets/icon-arrow-right.svg';

export default function Button({
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

const StyledButton = styled.button`
  ${buttonLayout}
  ${buttonSpacing}
  ${buttonRounded}
  ${buttonColor}
  ${buttonFont}
`;

const StyledIcon = styled.img`
  order: ${({ isArrowRight }) => (isArrowRight ? 1 : -1)};
`;