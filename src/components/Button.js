import styled from 'styled-components';
import arrowRightIcon from '../assets/icon-arrow-right.svg';

export default function Button({
  onClick = null,
  onSubmit = null,
  type = 'button',
  isActive = true,
  isBrown = true,
  hasArrow = false,
  children = '',
}) {
  return (
    <StyledButton
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={!isActive}
      isBrown={isBrown}
    >
      {children}
      <StyledIcon src={arrowRightIcon} />
    </StyledButton>
  );
}

const StyledButton = styled.button``;
const StyledIcon = styled.img``;
