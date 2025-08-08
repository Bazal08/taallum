"use client";
import React from "react";
import styled from "styled-components";

const PlusOnePerfect = () => {
  const sections = [
    {
      title: "Wedding celebrations",
      description:
        "Make every wedding unforgettable with the perfect companion by your side, turning moments into memories. Thanks to Plus One.",
      image: "/images/images/celeberation.png",
    },
    {
      title: "Corporate events & networking",
      description:
        "Elevate your corporate events and networking experiences with a professional companion who complements your presence.",
      image: "/images/images/corporate.png",
    },
    {
      title: "Family gatherings",
      description:
        "Bring warmth and ease to family gatherings with a friendly companion who blends in seamlessly and enhances every moment.",
      image: "/images/images/gatherings.png",
    },
    {
      title: "Travel companions",
      description:
        "Turn every journey into an unforgettable adventure with a travel companion who shares your excitement and makes every destination even more special.",
      image: "/images/images/travel.png",
    },
    {
      title: "Local experiences & adventures",
      description:
        "Discover the best of local experiences and adventures with a companion who makes every moment more exciting and memorable.",
      image: "/images/images/adventure.png",
    },
    {
      title: "Social functions & galas",
      description:
        "Shine at social functions and galas with a charming companion who ensures you make a statement and enjoy every moment to the fullest",
      image: "/images/images/socialfunction.png",
    },
  ];

  return (
    <Container>
      <Title>Plus One Perfect For</Title>
      <Wrapper>
        {sections.map((item, index) => (
          <Section key={index} $isEven={index % 2 !== 0}>
            <Card $isEven={index % 2 !== 0}>
              <Content $isEven={index % 2 !== 0}>
                <Heading>{item.title}</Heading>
                <Description>{item.description}</Description>
              </Content>
              <ImageWrapper>
                <Image src={item.image} alt={item.title} />
              </ImageWrapper>
            </Card>
          </Section>
        ))}
      </Wrapper>
    </Container>
  );
};

export default PlusOnePerfect;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 50px 20px; */
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: black;
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* max-width: 800px; */
  width: 100%;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.2rem;
  flex-direction: ${({ $isEven }) => ($isEven ? "row-reverse" : "row")};
  background-color: ${({ $isEven }) => ($isEven ? "White" : "#F9FAFC")};
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 85%;
  padding: 2rem 0rem;
  flex-direction: ${({ $isEven }) => ($isEven ? "row-reverse" : "row")};
  @media (max-width: 850px) {
    width: 85%;
    flex-direction: column;
    align-items: ${({ $isEven }) => ($isEven ? "flex-end" : "flex-start")};

    /* align-items: flex-start */
  }
`;

// const Content = styled.div`
//   flex: 1;
//   text-align: ${({ $isEven }) => ($isEven ? "right" : "left")};
// `;

const ImageWrapper = styled.div`
  /* width: 150px; */
  height: 26rem;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  /* background-color: #e0e0e0; */
  /* box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1); */
  @media (max-width: 600px) {
    height: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div.attrs((props) => ({
  "data-iseven": props.isEven ? "true" : "false",
}))`
  flex: 1;
  text-align: ${(props) => (props.isEven ? "right" : "left")};
`;

const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 8px;
  text-align: left;
  color: black;
  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: gray;
  @media (max-width: 600px) {
    font-size: 0.899rem;
  }
`;
