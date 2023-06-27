/* eslint-disable no-console */
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { zIndex_Write } from "../../util/z-index";
import { RiSkipUpLine } from "react-icons/ri";

interface ExpandProps {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
  toggleExpansion: () => void;
}

export default function AddMessage({ isExpanded, setIsExpanded, toggleExpansion }: ExpandProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!name || !code || !text) {
      alert("모든 빈칸을 채워주세요!");
      return;
    }
    if (name.length > 8) {
      alert("닉네임은 8자리보다 짧게 입력해주세요!");
      return;
    }
    if (isNaN(Number(code)) || code.length !== 6) {
      alert("코드는 숫자 6자리를 입력해주세요!");
      return;
    }
    const codeNumber = Number(code);

    try {
      const currentDate = new Date().toISOString();

      await addDoc(collection(db, "messages"), {
        name,
        code: codeNumber,
        text,
        date: currentDate,
      });
      setName("");
      setCode("");
      setText("");
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Buttons className="icon" onClick={handleScrollTop}>
        <RiSkipUpLine />
      </Buttons>
      <Buttons className="text" onClick={toggleExpansion}>
        {isExpanded ? "Hide" : "Show"}
      </Buttons>
      <GradientImg src="/images/GradientDown.png" className={isExpanded ? "" : "hide"} />
      <Container className={isExpanded ? "" : "hide"}>
        <FormContainer onSubmit={handleSubmit}>
          <TopContainer>
            <NameInput
              placeholder="닉네임"
              value={name}
              onChange={(e: { target: { value: React.SetStateAction<string> } }) => setName(e.target.value)}
              rows={1}
            />
            <CodeContainer>
              <CodeInput
                type="password"
                placeholder="숫자코드 6자리"
                value={code}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) => setCode(e.target.value)}
              />
              <Notification>코드는 수정•삭제 시에 사용됩니다!</Notification>
            </CodeContainer>
          </TopContainer>
          <MessageTextarea
            placeholder="서우에게 축하메세지"
            value={text}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setText(e.target.value)}
            rows={4}
          />
          <ButtonPost type="submit">축하메세지 등록</ButtonPost>
        </FormContainer>
      </Container>
    </>
  );
}

const GradientImg = styled.img`
  position: fixed;
  bottom: 14.1rem;
  width: 100%;
  height: 1.5rem;
  z-index: ${zIndex_Write.Gradient};
  &.hide {
    transform: translateY(14rem);
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    bottom: 14.5rem;
    &.hide {
      transform: translateY(14.5rem);
      transition: 0.4s;
    }
  }
`;
const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 0.6rem 0 3rem 0;
  width: 100%;
  background-color: #ffffff;
  z-index: ${zIndex_Write.Container};
  transition: 0.4s;
  &.hide {
    transform: translateY(14rem);
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    &.hide {
      transform: translateY(14.5rem);
      transition: 0.4s;
    }
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopContainer = styled.div`
  margin-top: 1.2rem;
  display: flex;
  width: 44rem;
  transition: 0.2s;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 24rem;
    margin: 0 0 0.2rem 0;
    transition: 0.2s;
  }
`;
const CodeContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Notification = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #81b956;
  letter-spacing: -0.02rem;
`;
const NameInput = styled.textarea`
  margin-right: 0.5rem;
  padding: 0.1rem 0.4rem;
  width: 10rem;
  border: 1px solid #afd592;
  border-radius: 0.3rem;
  outline: none;
  resize: none;
  font-size: 1rem;
  letter-spacing: -0.02rem;
  &:focus {
    box-shadow: 0 0 2px 2px #c9d7be;
  }
  &::placeholder {
    color: #b2b2b2;
  }
  &::-webkit-input-placeholder {
    color: #b2b2b2;
  }
  &:-ms-input-placeholder {
    color: #b2b2b2;
  }
`;
const CodeInput = styled.input`
  margin-right: 0.5rem;
  padding: 0.1rem 0.4rem;
  width: 8rem;
  border: 1px solid #afd592;
  border-radius: 0.3rem;
  outline: none;
  resize: none;
  font-size: 0.95rem;
  @media (max-width: 768px) {
    margin-top: 0.2rem;
    margin-right: 0.3rem;
    width: 7.4rem;
  }
  &:focus {
    box-shadow: 0 0 2px 2px #c9d7be;
  }
  &::placeholder {
    color: #b2b2b2;
  }
  &::-webkit-input-placeholder {
    color: #b2b2b2;
  }
  &:-ms-input-placeholder {
    color: #b2b2b2;
  }
`;
const MessageTextarea = styled.textarea`
  margin: 0.2rem 0.5rem 0.8rem 0.5rem;
  padding: 0.1rem 0.4rem;
  width: 44rem;
  border: 1px solid #afd592;
  border-radius: 0.3rem;
  outline: none;
  resize: none;
  font-size: 1rem;
  letter-spacing: -0.02rem;
  @media (max-width: 768px) {
    width: 24rem;
    margin: 0 0 0.8rem 0;
  }
  &:focus {
    box-shadow: 0 0 2px 2px #c9d7be;
  }
  &::placeholder {
    color: #b2b2b2;
  }
  &::-webkit-input-placeholder {
    color: #b2b2b2;
  }
  &:-ms-input-placeholder {
    color: #b2b2b2;
  }
`;
const ButtonPost = styled.button`
  margin: 0 0.5rem 0.2rem 0.5rem;
  padding: 0.2rem 0;
  width: 45%;
  border: none;
  border-radius: 3rem;
  outline-color: #c9d7be;
  resize: none;
  font-family: "Gothic A1", sans-serif;
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
    margin: 0 0 0.2rem 0;
  }
`;
const Buttons = styled.button`
  position: fixed;
  right: 5rem;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  font-weight: 600;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: ${zIndex_Write.Button};
  transition: 0.4s;
  &.icon {
    bottom: 13%;
    font-size: 1.8rem;
    transition: 0.4s;
  }
  &.text {
    bottom: 5%;
    font-size: 0.9rem;
    transition: 0.4s;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    transition: 0.2s;
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.55);
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    right: 0.5rem;
    transition: 0.4s;
    &.icon {
      top: 0.6rem;
      font-size: 1.8rem;
      background-color: rgba(0, 0, 0, 0);
      transition: 0.4s;
    }
    &.text {
      bottom: 2.5rem;
      transition: 0.4s;
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.55);
      font-size: 0.6rem;
    }
  }
`;
