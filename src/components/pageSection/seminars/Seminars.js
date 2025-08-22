"use client";
import SeminarRegistarModal from "@/components/templates/modal/SeminarRegistarModal";
import DescriptionSmall from "@/components/templates/text/DescriptionSmall";
import HeaderLarge from "@/components/templates/text/HeaderLarge";
import React, { useState } from "react";
import styled from "styled-components";

const Seminars = () => {
  const [open, setOpen] = useState(false);

  const seminars = [
    {
      id: 1,
      category: "Islamic Studies",
      title: "Foundations of Faith",
      description:
        "A comprehensive seminar covering the core tenets of Islam, including the pillars of faith, the Quran, and the life of Prophet Muhammad. Suitable for new Muslims and those seeking a deeper understanding.",
      image: "/images/pillarsofIslam/1.png",
    },
    {
      id: 2,
      category: "Community Engagement",
      title: "Building Bridges",
      description:
        "This seminar focuses on fostering positive relationships within the community, promoting interfaith dialogue, and addressing contemporary social issues from an Islamic perspective.",
      image: "/images/pillarsofIslam/2.png",
    },
    {
      id: 3,
      category: "Family & Youth",
      title: "Raising Righteous Generations",
      description:
        "A practical seminar for parents and educators on nurturing Islamic values in children and youth, addressing challenges, and promoting a balanced approach to faith and modern life.",
      image: "/images/pillarsofIslam/4.png",
    },
    {
      id: 4,
      category: "Spiritual Development",
      title: "Journey to Inner Peace",
      description:
        "This seminar explores the spiritual dimensions of Islam, focusing on practices like prayer, meditation, and reflection to cultivate inner peace and a stronger connection with the Divine.",
      image: "/images/pillarsofIslam/5.png",
    },
  ];

  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <HeaderLarge>Upcoming Seminars</HeaderLarge>
            <DescriptionSmall textColor={"black"}>
              Explore our upcoming seminars designed to enrich your
              understanding of Islamic teachings and community engagement.
              Register now to secure your spot. Explore our upcoming seminars
              designed to enrich your understanding of Islamic teachings and
              community engagement. Register now to secure your spot.
            </DescriptionSmall>
          </Header>

          <SeminarsList>
            {seminars.map((seminar) => (
              <SeminarCard key={seminar.id}>
                {/* <ContentWithButton> */}
                <Content>
                  <Category>{seminar.category}</Category>
                  <Title>{seminar.title}</Title>
                  <Description>{seminar.description}</Description>
                  <RegisterButton onClick={() => setOpen(true)}>Register</RegisterButton>
                </Content>
                {/* </ContentWithButton> */}
                <ImageWrapper>
                  <Image src={seminar.image} alt={seminar.title} />
                </ImageWrapper>
              </SeminarCard>
            ))}
          </SeminarsList>
        </Wrapper>
      </Container>
      <SeminarRegistarModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Seminars;

// Styled Components
const Container = styled.div`
  background: #f9f9f9;
  padding: 50px 20px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  margin-bottom: 40px;
  text-align: left;
`;

const Headerh1 = styled.h1`
  font-size: 2.2rem;
  color: #1a1a1a;
  margin: 0 0 12px 0;
`;

const Headerp = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;

const SeminarsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SeminarCard = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Category = styled.span`
  font-size: 0.8rem;
  color: #0066cc;
  font-weight: 600;
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  color: #1a1a1a;
  margin: 0;
`;

const ContentWithButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Description = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const RegisterButton = styled.a`
  display: inline-block;
  background: #e0e0e0;
  color: #333;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #c0c0c0;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
