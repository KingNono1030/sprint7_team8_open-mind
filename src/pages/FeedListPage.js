import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from '../components/Button';
import FeedsSection from '../components/FeedsSection';
import PaginationButtons from '../components/PaginationButtons';

export default function QuestionListPage() {
  return (
    <>
      <Logo size='md' />
      <Button isDark={false} hasArrow={true}>
        답변하러 가기
      </Button>
      <FeedsSection />
      <PaginationButtons />
    </>
  );
}

const S = {};
