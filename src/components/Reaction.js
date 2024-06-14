import thumbUpIcon from '../assets/icon-thumbs-up.svg';
import ThumbUpActiveIcon from '../assets/icon-thumbs-up--blue.svg';
import thumbDownIcon from '../assets/icon-thumbs-down.svg';
import ThumbDownActiveIcon from '../assets/icon-thumbs-down--black.svg';

export default function Reaction() {
  return (
    <div>
      <img src={thumbUpIcon} />
      <img src={ThumbUpActiveIcon} />
      <img src={thumbDownIcon} />
      <img src={ThumbDownActiveIcon} />
    </div>
  );
}
