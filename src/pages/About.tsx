import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Lottie from "lottie-react";
import calendarLottie from "../lottie/calendar.json";

interface NavProps {
  selected: string;
  setSelected: (selected: string) => void;
}

export default function About({ selected, setSelected }: NavProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
    setSelected("Home");
  };

  return (
    <Container>
      <div className="lottie">
        <Lottie animationData={calendarLottie} />
      </div>
      <TextBigDevice>
        <p className="paragraph">
          여러분의 소중한 시간을 내어 웹 사이트를 방문해 주셔서 감사합니다.
          <br />본 웹 사이트의 이름인 <span className="highlight">땡탄절</span>은
          <span className="highlight"> 땡가리+성탄절</span>의 합성어로
          <br />
          서우의 생일, 즉 땡탄절을 맞아 축하메세지를 남길 수 있는 간단한 사이트입니다.
          <br />
          땡가리는 별 의미는 없고, 어감이 좋아 서우를 부를 때 쓰는 저만의 애칭입니다.
          <br />
          뭔가 땡가리 같이 생기지 않았나요??? ㅋㅋ
          <br />
        </p>
        <p className="paragraph">
          사이트를 이용하는 방법을 알려드리자면,
          <br />
          먼저 간단하게 닉네임이나 이름을 입력하고, 이어서 숫자 코드 6자리를 설정하면 됩니다.
          <div className="highlight">(코드는 향후 메세지를 수정하거나 삭제할 때 사용되니 꼭 기억해 주세요!)</div>
          그리고 마지막으로 가장 중요한 부분, 서우에게 축하 메세지를 적은 뒤 등록하시면 됩니다.
        </p>
        <p className="paragraph">
          어찌보면 누구나 맞이하는 생일이지만 여러분의 사려 깊은 마음으로,
          <br />
          이 공간에서 따듯한 축하의 마음을 메세지에 담아 더 특별한 날이 될 수 있도록 도와주세요.
          <br />
          다시 한번 바쁜 일상 속에서 시간 내어 주셔서 감사합니다.
          <br />
          땡탄절에 오신 것을 환영합니다.
          <br />
        </p>
      </TextBigDevice>
      <TextSmallDevice>
        <p className="paragraph">
          여러분의 소중한 시간을 내어
          <br />웹 사이트를 방문해 주셔서 감사합니다.
          <br />본 웹 사이트의 이름인 <span className="highlight">땡탄절</span>은
          <span className="highlight"> 땡가리+성탄절</span>의 합성어로
          <br />
          서우의 생일, 즉 땡탄절을 맞아 축하메세지를
          <br />
          남길 수 있는 간단한 사이트입니다.
          <br />
          땡가리는 별 의미는 없고,
          <br />
          어감이 좋아 서우를 부를 때 쓰는 저만의 애칭입니다.
          <br />
          뭔가 땡가리 같이 생기지 않았나요??? ㅋㅋ
          <br />
        </p>
        <p className="paragraph">
          사이트를 이용하는 방법을 알려드리자면,
          <br />
          먼저 간단하게 닉네임이나 이름을 입력하고,
          <br />
          이어서 숫자 코드 6자리를 설정하면 됩니다.
          <div className="highlight">
            코드는 향후 메세지를 수정하거나 삭제할 때<br />
            사용되니 꼭 기억해 주세요!
          </div>
          그리고 마지막으로 가장 중요한 부분,
          <br />
          서우에게 축하 메세지를 적은 뒤 등록하시면 됩니다.
        </p>
        <p className="paragraph">
          어찌보면 누구나 맞이하는 생일이지만
          <br />
          여러분의 사려 깊은 마음으로 이 공간에서
          <br />
          따듯한 축하의 마음을 메세지에 담아
          <br />더 특별한 날이 될 수 있도록 도와주세요.
          <br />
          다시 한번 바쁜 일상 속에서 시간 내어 주셔서 감사합니다.
          <br />
          땡탄절에 오신 것을 환영합니다.
          <br />
        </p>
      </TextSmallDevice>
      <ButtonBack onClick={goBack}>← 작성하러 가기</ButtonBack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0 0 0;
  width: 100%;
  .lottie {
    width: 18rem;
  }
  @media (max-width: 768px) {
    margin-top: 6rem;
    padding: 0;
    .lottie {
      width: 8rem;
    }
  }
`;
const TextBigDevice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #292929;
  font-size: 1rem;
  line-height: 1.8rem;
  .paragraph {
    margin-bottom: 2rem;
  }
  .highlight {
    color: #7e9d67;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const TextSmallDevice = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #292929;
    font-size: 1rem;
    line-height: 1.8rem;
    .paragraph {
      margin-bottom: 2rem;
    }
    .highlight {
      color: #7e9d67;
      font-weight: 600;
    }
  }
`;
const ButtonBack = styled.button`
  margin: 0.5rem 0.5rem 0 0.5rem;
  padding: 0.2rem 0;
  width: 20rem;
  border: none;
  border-radius: 3rem;
  outline-color: #c9d7be;
  resize: none;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.02rem;
  color: #ffffff;
  background-color: #81b956;
  &:hover {
    background-color: #94c86b;
    transition: 0.2s;
  }
  &:active {
    background-color: #53862c;
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    width: 18rem;
    margin: 0;
  }
`;
