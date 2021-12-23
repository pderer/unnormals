import React from "react";
import styled from "styled-components";
import imgA from "../assets/teacher.png";
import imgB from "../assets/yellow.png";

const Background = styled.div`
  background: #1f1f1f 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  height: 610px;
`;

const MainText = styled.div`
  font-family: S-CoreDream-6Bold;
  font-size: 35px;
  line-height: 200%;
  color: #ffffff;
  max-width: 594px;
  max-height: 178px;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

export default function End() {
  return (
    <Background>
      <MainText>
        그 첫번째 걸음이자 핵심전략은,
        <br />고 1,2때 압도적인 경쟁력을 구축하여,
        <br />
        고3을 재수생처럼 보내는 것입니다.
      </MainText>
      <ImgWrapper>
        <img
          src={imgA}
          style={{ paddingTop: "50px", position: "absolute", right: "300px" }}
        />
        <img src={imgB} />
      </ImgWrapper>
    </Background>
  );
}
