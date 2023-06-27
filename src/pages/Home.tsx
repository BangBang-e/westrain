import React, { useState } from "react";
import styled from "styled-components";
import MessageList from "../components/Message/MessageList";
import AddMessage from "../components/Message/AddMessage";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container className={isExpanded ? "" : "hide"}>
      <MessageList />
      <AddMessage isExpanded={isExpanded} setIsExpanded={setIsExpanded} toggleExpansion={toggleExpansion} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding: 3.5rem 0 1rem 0;
  width: 100%;
  transition: 0.4s;
  &.hide {
    padding: 3.5rem 0 0 0;
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    padding: 3rem 0 4rem 0;
    transition: 0.4s;
    &.hide {
      padding: 3rem 0 0 0;
      transition: 0.4s;
    }
  }
`;
