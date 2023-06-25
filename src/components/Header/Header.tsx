import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { zIndex_Header } from "../../util/z-index";
import Lottie from "lottie-react";
import sparklesLottie from "../../lottie/sparkles.json";
import arrowDownLottie from "../../lottie/arrowDown.json";

export default function Header() {
  const [hideHeader, setHideHeader] = useState(false);
  const [selected, setSelected] = useState("Home");

  useEffect(() => {
    function handleScroll() {
      const scrollY = document.documentElement.scrollTop;
      if (scrollY > 200) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }

    window.document.addEventListener("scroll", handleScroll);
    return () => window.document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeaderContainer
        className={hideHeader ? "hide" : " "}
        style={{
          backgroundImage: "url('/images/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <SparklesContainer>
          <Lottie animationData={sparklesLottie} />
        </SparklesContainer>
        <Title src="images/Title.png" />
        <ArrowContainer className={hideHeader ? "scroll" : " "}>
          <Lottie animationData={arrowDownLottie} />
        </ArrowContainer>
        <WaveImg src="/images/Wave.png" />
      </HeaderContainer>
      <NavContainer className={hideHeader ? "move-up" : " "}>
        <StyledLink to="/" onClick={() => setSelected("Home")} className={selected === "Home" ? "selected" : ""}>
          Home
        </StyledLink>
        <StyledLink to="/about" onClick={() => setSelected("About")} className={selected === "About" ? "selected" : ""}>
          About
        </StyledLink>
      </NavContainer>
      <GradientImg src="/images/Gradient.png" className={hideHeader ? "move-up" : " "} />
    </>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 37rem;
  z-index: ${zIndex_Header.Header};
  transition: 0.4s;
  &.hide {
    transform: translateY(-27rem);
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    height: 23rem;
    transition: 0.4s;
    &.hide {
      transform: translateY(-19rem);
      transition: 0.4s;
    }
  }
`;
const Title = styled.img`
  margin-bottom: -3%;
  width: 50rem;
  z-index: ${zIndex_Header.Title};
  @media (max-width: 768px) {
    width: 30rem;
  }
`;
const SparklesContainer = styled.div`
  position: absolute;
  margin-bottom: 3%;
  width: 85%;
  opacity: 0.1;
  z-index: ${zIndex_Header.Sparkles};
`;
const ArrowContainer = styled.div`
  margin-bottom: 5%;
  width: 6%;
  opacity: 0.85;
  z-index: ${zIndex_Header.Sparkles};
  transition: 0.4s;
  &.scroll {
    opacity: 0;
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    width: 10%;
    transition: 0.2s;
  }
`;
const WaveImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: 0.4s;
`;
const GradientImg = styled.img`
  position: fixed;
  width: 100%;
  z-index: ${zIndex_Header.Gradient};
  margin-top: 41rem;
  transition: 0.4s;
  &.move-up {
    transform: translateY(-29rem);
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    margin-top: 26rem;
    &.move-up {
      transform: translateY(-19rem);
      transition: 0.4s;
    }
  }
`;
const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  left: 0;
  margin-top: 37rem;
  padding-bottom: 2rem;
  width: 100%;
  height: 4rem;
  z-index: 100;
  background-color: #ffffff;
  transition: 0.4s;
  &.move-up {
    height: 3rem;
    transform: translateY(-27rem);
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    margin-top: 23rem;
    padding-bottom: 1rem;
    height: 3rem;
    &.move-up {
      transform: translateY(-19rem);
      transition: 0.4s;
    }
  }
`;
const StyledLink = styled(Link)`
  margin: 0 2rem 0 2rem;
  text-decoration-line: none;
  color: #b2b2b2;
  font-weight: 500;
  font-size: 1.1rem;
  transition: 0.2s;
  &.selected {
    color: #1650e2;
  }
  &:hover {
    color: #7a92d1;
    transition: 0.2s;
  }
  &:active {
    color: #072980;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    margin: 0 1rem 0 1rem;
    padding: 0.4rem 1.4rem;
    font-size: 0.9rem;
    transition: 0.2s;
  }
`;
