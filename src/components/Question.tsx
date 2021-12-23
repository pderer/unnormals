import React from "react";
import styled from "styled-components";
import imgA from "../assets/light.png";

const BackGround = styled.div`
  margin-top: 250px;
  background: #1f1f1f 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 156px;
  font-family: S-CoreDream-6Bold;
  font-size: 26px;
  color: #fdea49;
  border-top: 1px solid #fdea49;
  border-bottom: 1px solid #fdea49;
  text-align: center;
  padding-top: 19px;
  padding-bottom: 19px;
  margin-top: 52px;
  margin-bottom: 52px;
`;

const MainText = styled.div`
  font-family: S-CoreDream-6Bold;
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 59px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #e5e5e5;
  line-height: 175%;
  padding-left: 23px;
`;

const BigText = styled.div`
  font-family: S-CoreDream-6Bold;
  font-size: 26px;
  padding-bottom: 22px;
`;

const NormalText = styled.div`
  font-family: S-CoreDream-4Regular;
  font-size: 15px;
`;

const BallBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 80px;
`;

const BigBall = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #ffffff;
`;
const SmallBall = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #8f8f8f;
`;

export default function Question() {
  return (
    <BackGround>
      <Title>Q & A</Title>
      <MainText>000 보다 좋은점이 무엇인가요?</MainText>
      <Wrapper>
        <img
          src={imgA}
          style={{
            width: "556px",
            height: "391px",
          }}
        />
        <TextBox>
          <BigText>“기존 인강보다 좋은 점은 뭔가요?”</BigText>
          <NormalText>
            같은 나이이지만, 누군가는 깊이와 양에서 비교가 되지 않는 컨텐츠로
            압도적인 경쟁자들과
            <br />
            경쟁하며, 무려 ‘2년’을 보내고 고3에 올라가게 됩니다.
            <div style={{ paddingTop: "4px" }} />
            <br />
            인강은 기본적으로 특히 고1,2 최상위권을 반영하지 않은 컨텐츠입니다.
            <br />
            전국구 대상이므로, 평이한 난이도의 자료 일 수 밖에 없습니다. 고
            1,2때 익혀야만 하는
            <br />
            고난도 문제 접근법을 익히기에 무리가 있습니다.
            <div style={{ paddingTop: "4px" }} />
            <br />
            또한 실시간 소통의 부재와 부족한 관리로 학생들의 개인별 약점을 케어
            할 수도 없습니다.
            <br />
            이에, ‘언노멀스’는 이 모든 문제점을 완벽하게 해결하여 고3때 압도적인
            경쟁력을
            <br />
            가질 수 있게 합니다.
          </NormalText>
        </TextBox>
      </Wrapper>
      <BallBox>
        <BigBall></BigBall>
        <SmallBall></SmallBall>
      </BallBox>
    </BackGround>
  );
}
