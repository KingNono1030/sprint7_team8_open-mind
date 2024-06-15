import styled from 'styled-components';

export default function Inquiry() {
  return (
    <S.InquiryContainer>
      <Badge />
      <S.Question />
      <Answer />
      <Reaction />
    </S.InquiryContainer>
  );
}

const S = {};
