import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { zIndex_Header } from "../../util/z-index";
import Lottie from "lottie-react";
import heartLottie from "../../lottie/heart.json";
import arrowDownLottie from "../../lottie/arrowDown.json";

interface NavProps {
  selected: string;
  setSelected: (selected: string) => void;
}

export default function Header({ selected, setSelected }: NavProps) {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setSelected("Home");
    } else if (window.location.pathname === "/about") {
      setSelected("About");
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollY = document.documentElement.scrollTop;
      if (scrollY > 150) {
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
        <HeartContainer>
          <div className="lottie">
            <Lottie animationData={heartLottie} />
          </div>
          <div className="text">땡 탄 절</div>
          <div className="lottie">
            <Lottie animationData={heartLottie} />
          </div>
        </HeartContainer>
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
      <GradientImg src="/images/GradientUp.png" className={hideHeader ? "move-up" : " "} />
    </>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 37rem;
  z-index: ${zIndex_Header.Header};
  transition: 0.4s;
  &.hide {
    transform: translateY(-30rem);
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    height: 23rem;
    transition: 0.4s;
    &.hide {
      transform: translateY(-19.2rem);
      transition: 0.4s;
    }
  }
`;
const Title = styled.img`
  margin-top: 12rem;
  width: 50rem;
  z-index: ${zIndex_Header.Title};
  @media (max-width: 768px) {
    width: 26rem;
  }
`;
const HeartContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  z-index: ${zIndex_Header.Heart};
  .lottie {
    width: 1.5rem;
    @media (max-width: 768px) {
      width: 1.2rem;
    }
  }
  .text {
    margin: 0 0.2rem;
    font-size: 1.2rem;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 768px) {
      margin: 0 0.1rem 0.3rem 0.1rem;
      font-size: 0.9rem;
    }
  }
`;
const ArrowContainer = styled.div`
  margin-bottom: 4%;
  width: 8%;
  opacity: 0.85;
  z-index: ${zIndex_Header.Arrow};
  transition: 0.4s;
  &.scroll {
    opacity: 0;
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    width: 12%;
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
  height: 1.5rem;
  z-index: ${zIndex_Header.Gradient};
  margin-top: 39rem;
  transition: 0.4s;
  &.move-up {
    transform: translateY(-29rem);
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    margin-top: 25rem;
    &.move-up {
      transform: translateY(-18.2rem);
      transition: 0.4s;
    }
  }
`;
const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  margin-top: 37rem;
  width: 100%;
  height: 2rem;
  z-index: 100;
  background-color: #ffffff;
  transition: 0.4s;
  &.move-up {
    height: 3rem;
    transform: translateY(-30rem);
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    margin-top: 23rem;
    &.move-up {
      transform: translateY(-19.2rem);
      transition: 0.4s;
    }
  }
`;
const StyledLink = styled(Link)`
  margin: 0 2rem 0 2rem;
  text-decoration-line: none;
  color: #b2b2b2;
  font-weight: 600;
  font-size: 1.1rem;
  transition: 0.2s;
  &.selected {
    color: #81b956;
  }
  &:hover {
    color: #94c86b;
    transition: 0.2s;
  }
  &:active {
    color: #53862c;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    margin: 0 0.6rem 0 0.6rem;
    padding: 0.4rem 1.4rem;
    font-size: 1rem;
    transition: 0.2s;
  }
`;
