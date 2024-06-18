import Button from '../components/Button';

export default function LandingPage() {
  return (
    <>
      <Button isDark={false} hasArrow={true} isArrowRight={false}>
        기본 버튼
      </Button>
      <Button isDark={true} hasArrow={true}>
        기본 버튼
      </Button>
      <Button variant='floating'>플로팅 버튼</Button>
      <Button variant='fullWidth'>전체너비 버튼</Button>
      <div>랜딩 페이지</div>
    </>
  );
}
