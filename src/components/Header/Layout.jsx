import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
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
`;
