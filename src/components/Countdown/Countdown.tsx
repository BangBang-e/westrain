import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CountdownProps {
  d_day: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ d_day }: CountdownProps) {
  const calculateTimeLeft = () => {
    let period = +new Date(d_day) - +new Date();
    const isPastD_day = period < 0;
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (isPastD_day) {
      period = -period;
    }
    timeLeft = {
      days: Math.floor(period / (1000 * 60 * 60 * 24)),
      hours: Math.floor((period / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((period / 1000 / 60) % 60),
      seconds: Math.floor((period / 1000) % 60),
    };
    return { timeLeft, isPastD_day };
  };

  const [{ timeLeft, isPastD_day }, setTimeState] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeState(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countdown: string = Object.values(timeLeft).reduce(
    (acc: string, value: number, idx: number) => {
      if (idx === 0) {
        return `${acc}${value}일`;
      } else if (idx === 1) {
        return `${acc} ${String(value).padStart(2, "0")}`;
      } else {
        return `${acc}:${String(value).padStart(2, "0")}`;
      }
    },
    isPastD_day ? "+" : "-",
  );
  return (
    <Container>
      {countdown}
      <D_day>{isPastD_day ? "Time's up!" : null}</D_day>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.6rem 0 2rem 0;
  padding: 0.8rem 1rem 0.4rem 1rem;
  min-width: 10.3rem;
  background-color: #f1f4f5;
  border: 1.9px solid #5b5b5b;
  border-radius: 0.6rem;
  color: #5b5b5b;
  font-family: "Gothic A1", sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  @media (max-width: 768px) {
    margin: 0.4rem 0 1.8rem 0;
    padding: 0.6rem 0.6rem 0.2rem 0.6rem;
    border: 1px solid #5b5b5b;
    border-radius: 0.25rem;
    min-width: 0rem;
    font-size: 1rem;
  }
`;
const D_day = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.3rem;
  color: #53862c;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
