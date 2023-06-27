import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    let difference = +new Date(targetDate) - +new Date();
    const isPastTargetDate = difference < 0;
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (isPastTargetDate) {
      difference = -difference;
    }
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return { timeLeft, isPastTargetDate };
  };

  const [{ timeLeft, isPastTargetDate }, setTimeState] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeState(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerComponents: string = Object.values(timeLeft).reduce(
    (acc: string, value: number, idx: number) => {
      if (idx === 0) {
        return `${acc}${value}일`;
      } else if (idx === 1) {
        return `${acc} ${String(value).padStart(2, "0")}`;
      } else {
        return `${acc}:${String(value).padStart(2, "0")}`;
      }
    },
    isPastTargetDate ? "+" : "-",
  );
  return <Container>{timerComponents}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.6rem 0 2rem 0;
  padding: 0.6rem 1rem 0.4rem 1rem;
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
    padding: 0.4rem 0.6rem 0.2rem 0.6rem;
    border: 1px solid #5b5b5b;
    border-radius: 0.25rem;
    min-width: 0rem;
    font-size: 1rem;
  }
`;
