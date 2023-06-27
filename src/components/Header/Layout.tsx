import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./Header";

interface NavProps {
  selected: string;
  setSelected: (selected: string) => void;
}

export default function Layout({ selected, setSelected }: NavProps) {
  return (
    <div>
      <Header selected={selected} setSelected={setSelected} />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </div>
  );
}

const BodyContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 38rem;
  padding-bottom: 16rem;
  @media (max-width: 768px) {
    padding-top: 24rem;
    padding-bottom: 13rem;
  }
`;
