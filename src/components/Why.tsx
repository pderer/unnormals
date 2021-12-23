import React from "react";
import styled from "styled-components";

const BackGround = styled.div`
  background: #1f1f1f 0% 0% no-repeat padding-box;
`;

const BigTitle = styled.div`
  font-family: NanumBarunGothicBold;
  font-size: 50px;
  color: #ffffff;
  letter-spacing: -0.25px;
  text-align: center;
  padding-top: 148px;
  padding-bottom: 120px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 180px;
  gap: 48px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 566px;
  height: 300px;
`;

const Number = styled.div`
  font-family: S-CoreDream-6Bold;
  font-size: 40px;
  text-align: center;
  padding-top: 36px;
  padding-bottom: 36px;
`;

const TextWrapper = styled.div``;

const NormalText = styled.span`
  font-family: S-CoreDream-4Regular;
  font-size: 26px;
`;

const BoldText = styled.span`
  font-family: S-CoreDream-6Bold;
  font-size: 34px;
`;

export default function Why() {
  return (
    <BackGround>
      <BigTitle>'왜 9%의 학생만 받으시나요?'</BigTitle>
      <BoxWrapper>
        <Box style={{ backgroundColor: "#FDEA49" }}>
          <Number>01</Number>
          <TextWrapper
            style={{
              paddingLeft: "91px",
              paddingRight: "94px",
              paddingBottom: "73px",
            }}
          >
            <NormalText>9% 안에 드는건 </NormalText>
            <BoldText>'노력'</BoldText>
            <NormalText>의 문제라 제한을 둔 것입니다.</NormalText>
          </TextWrapper>
        </Box>
        <Box style={{ backgroundColor: "#333333" }}>
          <Number style={{ color: "#FFFFFF", paddingBottom: "12px" }}>
            02
          </Number>
          <TextWrapper
            style={{
              color: "#FFFFFF",
              paddingLeft: "80px",
              paddingRight: "79px",
              paddingBottom: "46px",
            }}
          >
            <NormalText>하지만 1% 안에 드는 것은 </NormalText>
            <BoldText>'방법'</BoldText>
            <NormalText>의 문제이고, 그 방법을 알려주는 게 </NormalText>
            <BoldText>'언노멀스의 역할'</BoldText>
            <NormalText>입니다.</NormalText>
          </TextWrapper>
        </Box>
      </BoxWrapper>
    </BackGround>
  );
}
