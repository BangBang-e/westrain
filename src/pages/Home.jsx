import React from "react";
import styled from "styled-components";
import MessageList from "../components/Message/MessageList";

export default function Home() {
  return (
    <Container>
      <MessageList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 42rem;
  padding: 3.5rem 0 6rem 0;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 26rem;
    padding: 3rem 0 4rem 0;
  }
`;
