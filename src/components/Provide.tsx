import React from "react";
import styled from "styled-components";
import imgA from "../assets/desk.png";

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: 0% 0% no-repeat padding-box;
`;

const Title = styled.div`
  padding-top: 129px;
  padding-bottom: 103px;
  font-family: S-CoreDream-6Bold;
  font-size: 36px;
  line-height: 175%;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 132px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 175%;
`;

const Black = styled.div`
  background: #080703 0% 0% no-repeat padding-box;
  width: 272px;
  height: 10px;
  margin-bottom: 27px;
`;

const NormalText = styled.div`
  font-family: S-CoreDream-4Regular;
  font-size: 18px;
  padding-left: 48px;
`;

const BoldText = styled.div`
  font-family: S-CoreDream-6Bold;
  font-size: 20px;
  padding-left: 48px;
`;

export default function Provide() {
  return (
    <BackGround>
      <Title>
        ‘언노멀스’는 대치동이 아닌 곳에서 공부하는 상위권 학생들에게
        <br /> 어디에서도 경험할 수 없는 ‘환경’을 제공 할 것입니다.
      </Title>
      <Wrapper>
        <img src={imgA} style={{ width: "802px", height: "484px" }} />
        <TextBox>
          <Black />
          <NormalText>
            지방 일반고에서 직접 공부해보고 카이스트에서 전국 최상위권 친구들의
            공부법을 보고
            <br />
            대치동에서 학생들을 가르치며 느꼈습니다.
          </NormalText>
          <div style={{ paddingTop: "25px" }} />
          <BoldText>
            “다른 지역에 산다는 것만으로, 편향된 ‘거짓정보’ 에 속아 따라잡을 수
            없는
            <br />
            2년을 보낸 친구들이 너무 많다. ”
          </BoldText>
          <div style={{ paddingTop: "25px" }} />
          <NormalText>
            모두가 인정합니다.
            <br />
            “고3은 누구나 열심히 한다.”
            <br />
            즉, 거꾸로 해석하면 고3땐 확률적으로 따라잡기도 벌리기도 힘듭니다.
            <br />
            결론이 보일것입니다. 입시의 정답은 오히려 고 1,2에 있습니다.
          </NormalText>
        </TextBox>
      </Wrapper>
    </BackGround>
  );
}
