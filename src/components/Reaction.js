import { useState } from 'react';
import { theme } from '../utils/theme';
import styled, { css } from 'styled-components';
import thumbsUpIcon from '../assets/icon-thumbs-up.svg';
import isThumbsUpActiveIcon from '../assets/icon-thumbs-up--blue.svg';
import thumbsDownIcon from '../assets/icon-thumbs-down.svg';
import thumbsDownActiveIcon from '../assets/icon-thumbs-down--black.svg';

export default function Reaction() {
  const [isThumbsUpActive, setIsThumbsUpActive] = useState(false);
  const [thumbsDownActive, setThumbsDownActive] = useState(false);

  const handleReactionClick = (type) => {
    if (type === 'like') {
      setIsThumbsUpActive(!isThumbsUpActive);
      if (thumbsDownActive) {
        setThumbsDownActive(false);
      }
    } else if (type === 'dislike') {
      setThumbsDownActive(!thumbsDownActive);
      if (isThumbsUpActive) {
        setIsThumbsUpActive(false);
      }
    }
  };

  const reactions = [
    {
      icon: isThumbsUpActive ? isThumbsUpActiveIcon : thumbsUpIcon,
      text: '좋아요',
      onClick: () => handleReactionClick('like'),
      active: isThumbsUpActive,
      defaultColor: theme.grayScale.gray40,
      activeColor: theme.colors.blue50,
    },
    {
      icon: thumbsDownActive ? thumbsDownActiveIcon : thumbsDownIcon,
      text: '싫어요',
      onClick: () => handleReactionClick('dislike'),
      active: thumbsDownActive,
      defaultColor: theme.grayScale.gray40,
      activeColor: theme.grayScale.gray60,
    },
  ];

  return (
    <ReactionContainer>
      {reactions.map((reaction) => (
        <ReactionBtn onClick={reaction.onClick} active={reaction.active}>
          <img src={reaction.icon} alt={`${reaction.text} 아이콘`} />
          <span
            style={{
              color: reaction.active
                ? reaction.activeColor
                : reaction.defaultColor,
            }}
          >
            {`${reaction.text} ${
              reaction.likeCount !== undefined ? ` ${reaction.likeCount}` : ''
            }`}
          </span>
        </ReactionBtn>
      ))}
    </ReactionContainer>
  );
}

const ReactionContainer = styled.div`
  width: 168px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
`;

const ReactionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 14.12px;
    height: 14.33px;
  }

  ${({ theme }) => css`
    span {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.medium};
    }
  `}
`;
