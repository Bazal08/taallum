"use client";
import React from "react";
import styled from "styled-components";

const steps = [
  {
    id: 1,
    icon: "/images/namazicon/fajaricon.png",
    title: "Fajr",
    text: "4:30 AM ",
  },
  {
    id: 2,
    icon: "/images/namazicon/zahuricoh.png",
    title: "Zahur",
    text: "1: 30 PM",
  },
  {
    id: 3,
    icon: "/images/namazicon/asarIcon.png",
    title: "Asar",
    text: "5:15 PM",
  },
  {
    id: 4,
    icon: "/images/namazicon/magrib.png",
    title: "Magrib",
    text: "7:15 PM",
  },
  {
    id: 5,
    icon: "/images/namazicon/ishaicon.png",
    title: "Isha",
    text: "9:15 PM",
  },
  {
    id: 6,
    icon: "/images/namazicon/jumhaicon.png",
    title: "Jummah",
    text: "1:30 PM",
  },
];

const SalahTimings = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Salah Timings</Title>
        <StepsWrapper>
          {steps.map((step, index) => (
            <Step key={index}>
              <Icon src={step.icon} alt={step.title} />
              <CardTitle>{step.title}</CardTitle>
              <Text>{step.text}</Text>
            </Step>
          ))}
        </StepsWrapper>
      </Wrapper>
    </Container>
  );
};

export default SalahTimings;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const Wrapper = styled.div`
  text-align: center;
  /* padding: 50px 20px; */
  background: #f8fafd;
  width: 100%;
  padding: 1.9rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 20px;
`;

const StepsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const Step = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})`
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  background: #fff;
  padding: 1rem 3rem;
  /* width: 20rem; */
  border-radius: 12px;
  /* box-shadow: ${({ isActive }) =>
    isActive
      ? "0px 10px 20px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.05)"
      : "0px 5px 10px rgba(0, 0, 0, 0.05)"}; */
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #111827;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #6b7280;
`;
