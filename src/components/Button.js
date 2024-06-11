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
      {hasArrow && <StyledIcon src={arrowRightIcon} />}
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
  padding: ${({ theme: { rounded } }) => rounded.sm};
`;

const buttonColor = css`
  border: ${({ isDark, theme }) =>
    isDark
      ? 'none'
      : `${theme.borderWidth.thin} solid ${theme.brownScale.brown40}`};
  background-color: ${({ isDark, theme }) =>
    isDark ? theme.brownScale.brown40 : theme.brownScale.brown10};
  color: ${({ isDark, theme }) =>
    isDark ? theme.grayScale.gray10 : theme.brownScale.brown40};

  &:hover {
    border: ${({ isDark, theme }) =>
      isDark
        ? `${theme.borderWidth.thick} solid ${theme.brownScale.brown50}`
        : `${theme.borderWidth.thick} solid ${theme.brownScale.brown40}`};
  }

  &:active {
    border: ${({ isDark, theme }) =>
      isDark
        ? 'none'
        : `${theme.borderWidth.thick} solid ${theme.brownScale.brown40}`};
    background-color: ${({ isDark, theme }) =>
      isDark ? theme.brownScale.brown50 : theme.brownScale.brown20};
  }

  &:disabled {
    border: ${({ isDark, theme }) =>
      isDark
        ? 'none'
        : `${theme.borderWidth.thin} solid ${theme.brownScale.brown30}`};
    background-color: ${({ isDark, theme }) =>
      isDark ? theme.brownScale.brown30 : theme.brownScale.brown10};
    color: ${({ isDark, theme }) =>
      isDark ? theme.grayScale.gray10 : theme.brownScale.brown30};
  }
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
