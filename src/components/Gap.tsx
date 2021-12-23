import React from "react";
import styled from "styled-components";
import imgA from "../assets/line.png";

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: 0% 0% no-repeat padding-box;
`;

const MainTitle = styled.div`
  padding-top: 100px;
  padding-bottom: 47px;
  font-family: S-CoreDream-6Bold;
  font-size: 36px;
  text-align: center;
`;

const Table = styled.table`
  max-width: 1180px;
  max-height: 362px;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid #e5e5e5;
  font-family: S-CoreDream-4Regular;
  font-size: 16px;
`;

const Caption = styled.caption`
  font-family: S-CoreDream-5Medium;
  font-size: 20px;
  padding-bottom: 40px;
`;

const Thead = styled.thead``;

const Tr = styled.tr``;

const Tbody = styled.tbody``;

const Td = styled.td`
  padding: 20px;
  border: 1px solid #e5e5e5;
`;

const NormalText = styled.div`
  font-family: S-CoreDream-4Regular;
  font-size: 15px;
`;

const BigText = styled.div`
  font-family: S-CoreDream-5Medium;
  font-size: 18px;
  padding-top: 35px;
  padding-bottom: 30px;
`;

const TextBox = styled.div`
  z-index: 2;
  position: absolute;
  top: 120px;
  left: 460px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 9px #00000036;
  width: 718px;
  height: 345px;
  padding-left: 25px;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  position: relative;
  left: -240px;
`;

export default function Gap() {
  return (
    <BackGround>
      <MainTitle>지역차이는 커져만 갑니다.</MainTitle>
      <Table>
        <Caption>2021학년도 서울대학교 신입학생 최종 선발결과 분석</Caption>
        <Thead>
          <Tr>
            <Td style={{ width: "19%", textAlign: "center" }}></Td>
            <Td style={{ width: "27%", textAlign: "center" }}>수도권</Td>
            <Td style={{ width: "27%", textAlign: "center" }}>5대 광역시</Td>
            <Td style={{ width: "27%", textAlign: "center" }}>기타 지역</Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td style={{ textAlign: "center" }}>고등학생수(2020)</Td>
            <Td style={{ textAlign: "right" }}>649,401(48.6%)</Td>
            <Td style={{ textAlign: "right" }}>261,871(19.6%) </Td>
            <Td style={{ textAlign: "right" }}>426,040(31.9%)</Td>
          </Tr>
          <Tr>
            <Td style={{ textAlign: "center" }}>수시 학생부 종합전형</Td>
            <Td style={{ textAlign: "right" }}>1322(55.8%)</Td>
            <Td style={{ textAlign: "right" }}>494(20.9%)</Td>
            <Td style={{ textAlign: "right" }}>552(23.3%)</Td>
          </Tr>
          <Tr style={{ backgroundColor: "#f5f5f5" }}>
            <Td style={{ textAlign: "center" }}>정시 수능중심전형</Td>
            <Td style={{ textAlign: "right", textDecoration: "underline" }}>
              587(78.4%)
            </Td>
            <Td style={{ textAlign: "right" }}>74(9.9%)</Td>
            <Td style={{ textAlign: "right", textDecoration: "underline" }}>
              88(11.7%)
            </Td>
          </Tr>
          <Tr>
            <Td style={{ textAlign: "center" }}>합계</Td>
            <Td style={{ textAlign: "right" }}>589(72.72%)</Td>
            <Td style={{ textAlign: "right" }}>147(18.15%)</Td>
            <Td style={{ textAlign: "right" }}>74(9.14%)</Td>
          </Tr>
          <Tr>
            <Td style={{ textAlign: "center" }}>정시 고등학생 수 비례</Td>
            <Td style={{ textAlign: "right" }}>+29.8%p</Td>
            <Td style={{ textAlign: "right" }}>-9.7%p</Td>
            <Td style={{ textAlign: "right" }}>-20.2%p</Td>
          </Tr>
        </Tbody>
      </Table>
      <NormalText
        style={{
          lineHeight: "175%",
          textAlign: "center",
          paddingTop: "55px",
          paddingBottom: "103px",
        }}
      >
        이런 이야기를 보면, 오히려 공부를 잘하는 친구들은 그 결과가 ‘본인
        탓’이라고 생각할 확률이 높습니다.
        <br />
        하지만 저는 본인의 탓보단 ‘환경’ 탓을 하라고 말하고 싶습니다. 끊임없는
        메타인지도 중요하지만,
        <br />
        정작 ‘문제해결’을 위한 방법이 본인에게만 있지 않은 경우도 많기
        때문입니다.
      </NormalText>
      <Wrapper>
        <img
          src={imgA}
          style={{ width: "738px", height: "333px", zIndex: "1" }}
        ></img>
        <TextBox>
          <BigText>예를 들어, 어떻게 하면 의지를 높일 수 있나요?</BigText>
          <NormalText style={{ lineHeight: "175%" }}>
            너무 추상적입니다. 여기서 우리는 스스로를 자책하며 문제해결을
            ‘기도’하는 것이 아니라,
            <br />
            실질적인 문제해결을 해야합니다. ‘형설지공’이라고 하지만,
            반딧불빛으로 공부하는 것보다
            <br />
            요즘 스터디카페에서 공부했다면 훨씬 빨리 출세 했을 것입니다. 즉,
            집중 할 수 밖에 없는
            <br />
            환경을 만들고, 그 환경에 나를 집어넣는 것이 가장 현실적인
            문제해결법입니다.
            <div style={{ paddingTop: "10px" }} />
            <br />
            이처럼 수능에서도 좋은 점수를 받을 수 없는 환경이 있고, 그렇지 않은
            환경이 있습니다.
            <br />
            적어도 상위 9%에 속하는 학생이라면, 이제는 본인이 아닌 ‘환경 세팅’을
            좀더 고민하고
            <br />
            어떤 환경에서 본인이 더 경쟁력이 있을 수 밖에없는지 결정해야합니다.
          </NormalText>
        </TextBox>
      </Wrapper>
    </BackGround>
  );
}
