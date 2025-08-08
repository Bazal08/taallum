"use client";
import React from "react";
import styled from "styled-components";

const steps = [
  {
    id: 1,
    icon: "/images/icons/broweserIcon.svg",
    title: "Browse Qualified Companions",
    text: "Review detailed profiles of potential plus-ones, including their interests, experience, and availability.",
  },
  {
    id: 2,
    icon: "/images/icons/contactsIcon.svg",
    title: "Connect & Coordinate",
    text: "Chat with your chosen companion through our secure platform to discuss event details and expectations.",
  },
  {
    id: 3,
    icon: "/images/icons/calender.svg",
    title: "Enjoy Your Event",
    text: "Attend your function with confidence, knowing you have a compatible companion by your side.",
  },
];

const HowWorks = () => {
  return (
    <Container>
      <Wrapper>
        <Title>How it works</Title>
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

export default HowWorks;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const Wrapper = styled.div`
  text-align: center;
  /* padding: 50px 20px; */
  width: 85%;
  background: #f8fafd;
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
  gap: 20px;
  flex-wrap: wrap;
`;

const Step = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})`
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  background: #fff;
  padding: 20px;
  width: 20rem;
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
