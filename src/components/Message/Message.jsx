import React from "react";
import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";

const messages = {
  id: "hbd0630",
  name: "뱅뱅",
  date: "2023.06.18",
  text: "생일 축하해~!",
  code: 170303,
};

export default function Message() {
  return (
    <Container>
      <TopContainer>
        <InfoContainer>
          <UserName>{messages.name}</UserName>
          <Date>{messages.date}</Date>
        </InfoContainer>
        <IconContainer>
          <RiEdit2Line className="icon" />
          <RiDeleteBin5Line className="icon" />
        </IconContainer>
      </TopContainer>
      <MessageText>{messages.text}</MessageText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 2.2rem;
  width: 48rem;
  border-top: 0.5px solid #dddddd;
  border-bottom: 0.5px solid #dddddd;
  @media (max-width: 768px) {
    width: 26rem;
  }
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
const UserName = styled.div`
  margin-right: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #292929;
  letter-spacing: 0.08rem;
`;
const Date = styled.div`
  margin-bottom: 0.1rem;
  font-size: 0.95rem;
  font-weight: 400;
  color: #838383;
`;
const IconContainer = styled.div`
  .icon {
    margin-left: 0.4rem;
    font-size: 1rem;
    color: #292929;
    transition: 0.2s;
    &:hover {
      color: #4846be;
      transition: 0.2s;
    }
  }
`;
const MessageText = styled.div`
  display: flex;
  margin-top: 0.2rem;
  padding-left: 0.15rem;
`;
