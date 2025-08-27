"use client";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Michael R",
    role: "Client",
    text: "Moving to a new city, having a companion to explore with made everything less daunting and more enjoyable.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah M.",
    role: "Client",
    text: "I was nervous about attending my ex's wedding alone, but my companion made the evening not just bearable, but actually enjoyable!",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "James T",
    role: "Client",
    text: "As a business traveler, having a local companion to attend client dinners has been game-changing. Professional, knowledgeable, and great company.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily W",
    role: "Client",
    text: "Attending events alone was always intimidating, but with a companion, I felt more confident and had a great time.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "David K",
    role: "Client",
    text: "Having someone to show me around the city made my trip memorable and enjoyable.",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = useMemo(() => {
    if (!isClient) return [testimonials[activeIndex]];
    if (window.innerWidth <= 600) {
      return [testimonials[activeIndex]];
    }
    const total = testimonials.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;
    return [
      testimonials[prevIndex],
      testimonials[activeIndex],
      testimonials[nextIndex],
    ];
  }, [activeIndex, isClient]);

  return (
    <Container>
      <Title>Client Testimonials</Title>
      <Carousel>
        {getVisibleTestimonials.map((item, index) => (
          <Card
            key={index}
            active={index === 1 || (isClient && window.innerWidth <= 600)}
          >
            {/* <ProfilePic src={item.img} alt={item.name} /> */}
            <Name>{item.name}</Name>
            <Role>{item.role}</Role>
            <Text>{item.text}</Text>
          </Card>
        ))}
      </Carousel>
      <Controls>
        <ArrowButton onClick={handlePrev}>
          <FiArrowLeft />
        </ArrowButton>
        <ArrowButton onClick={handleNext} primary>
          <FiArrowRight />
        </ArrowButton>
      </Controls>
    </Container>
  );
};

export default Testimonials;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 2rem;
  color: #5b6475;
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  overflow: hidden;

  @media (max-width: 600px) {
    flex-direction: column; /* Stack cards in small screens */
  }
`;

const Card = styled.div`
  width: 25rem;
  height: 14rem;
  padding: 20px;
  margin: 1rem;
  border-radius: 2rem;
  background: ${({ active }) => (active ? "#8e9ab0" : "#f5f5f5")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  text-align: center;
  transition: all 0.4s ease-in-out;
  transform: ${({ active }) => (active ? "scale(1.1)" : "scale(0.9)")};
  opacity: ${({ active }) => (active ? 1 : 0.5)};

  @media (max-width: 600px) {
    width: 90%;
    transform: scale(1); /* No scaling effect in small screens */
  }
`;

const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const Role = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 13px;
  margin-top: 10px;
  @media (max-width: 600px) {
    line-height: 1.4;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ArrowButton = styled.button`
  background: ${({ primary }) => (primary ? "#8e9ab0" : "#ccc")};
  color: ${({ primary }) => (primary ? "#fff" : "#333")};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
