import { useState } from 'react';
import { theme } from '../utils/theme';
import styled, { css } from 'styled-components';
import thumbsUpIcon from '../assets/icon-thumbs-up.svg';
import isThumbsUpActiveIcon from '../assets/icon-thumbs-up--blue.svg';
import thumbsDownIcon from '../assets/icon-thumbs-down.svg';
import isThumbsDownActiveIcon from '../assets/icon-thumbs-down--black.svg';

export default function Reaction() {
  const [isThumbsUpActive, setIsThumbsUpActive] = useState(false);
  const [isThumbsDownActive, setIsThumbsDownActive] = useState(false);
  const [likeCount, setLikeCount] = useState(12);

  const handleReactionClick = (type) => {
    if (type === 'like') {
      setIsThumbsUpActive(!isThumbsUpActive);
      if (isThumbsDownActive) {
        setIsThumbsDownActive(false);
      }
      setLikeCount((prev) => prev + (isThumbsUpActive ? -1 : 1));
    } else if (type === 'dislike') {
      setIsThumbsDownActive(!isThumbsDownActive);
      if (isThumbsUpActive) {
        setIsThumbsUpActive(false);
        setLikeCount((prev) => prev - 1);
      }
    }
  };

  const reactions = [
    {
      id: 'like',
      icon: isThumbsUpActive ? isThumbsUpActiveIcon : thumbsUpIcon,
      text: '좋아요',
      onClick: () => handleReactionClick('like'),
      active: isThumbsUpActive,
      defaultColor: theme.grayScale.gray40,
      activeColor: theme.colors.blue50,
      count: likeCount,
    },
    {
      id: 'dislike',
      icon: isThumbsDownActive ? isThumbsDownActiveIcon : thumbsDownIcon,
      text: '싫어요',
      onClick: () => handleReactionClick('dislike'),
      active: isThumbsDownActive,
      defaultColor: theme.grayScale.gray40,
      activeColor: theme.grayScale.gray60,
      count: '',
    },
  ];

  return (
    <S.ReactionContainer>
      {reactions.map((reaction) => (
        <S.ReactionButton
          key={reaction.id}
          onClick={reaction.onClick}
          $active={reaction.active}
        >
          <img src={reaction.icon} alt={`${reaction.text} 아이콘`} />
          <span
            style={{
              color: reaction.active
                ? reaction.activeColor
                : reaction.defaultColor,
            }}
          >
            {`${reaction.text} ${reaction.count}`}
          </span>
        </S.ReactionButton>
      ))}
    </S.ReactionContainer>
  );
}

const S = {};

S.ReactionContainer = styled.div`
  width: 168px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
`;

S.ReactionButton = styled.button`
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
      font-size: ${theme.font.size.xs};
      font-weight: ${theme.font.weight.medium};
      line-height: ${theme.font.lineHeight.xs};
    }
  `}
`;
