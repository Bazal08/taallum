"use client";
import DescriptionSmall from "@/components/templates/text/DescriptionSmall";
import HeaderLarge from "@/components/templates/text/HeaderLarge";
import HeaderSmall from "@/components/templates/text/HeaderSmall";
import React from "react";
import styled from "styled-components";

const ChooseUs = () => {
  const chooseItem = [
    {
      icon: "/images/majesticons.svg",
      title: "Vetted Professionals",
      description:
        "Carefully selected companions who bring expertise, elegance, and a perfect match for every occasion.",
    },
    {
      icon: "/images/contactsIcon.svg",
      title: "Professional & Discrete",
      description:
        "Our companions maintain the highest standards of professionalism, ensuring a respectful experience.",
    },
    {
      icon: "/images/verifiedIcon.svg",
      title: "Background-Checked For Your Safety",
      description:
        "Rest assured knowing every companion is thoroughly vetted for a secure and enjoyable experience.",
    },
    {
      icon: "/images/timerIcon.svg",
      title: "Flexible Hourly And Daily Rates",
      description:
        "Tailored to fit your needs, ensuring you get the perfect companion for any duration or event.",
    },
    {
      icon: "/images/calender.svg",
      title: "Perfect for Events, Travel and Networking",
      description:
        "A companion who effortlessly enhances every experience, wherever you go.",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <HeaderLarge textColor={"black"} fontSize={"2rem"} fontWeight={600}>Why Choose Us</HeaderLarge>
        <CardWrapper>
          {chooseItem.map((item, index) => {
            const isLast =
              index === chooseItem.length - 1 && chooseItem.length % 2 !== 0;
            return (
              <Card key={index} {...(isLast ? { isLast } : {})}>
                <IconWrapper>
                  <Icon src={item.icon} alt={item.title} />
                </IconWrapper>
                <Content>
                  <HeaderSmall textColor="black" fontWeight={600}>
                    {item.title}
                  </HeaderSmall>
                  <DescriptionSmall textColor="gray">
                    {item.description}
                  </DescriptionSmall>
                </Content>
              </Card>
            );
          })}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default ChooseUs;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isLast", 
})`
  display: flex;
  /* align-items: center ; */
  gap: 1rem;
  padding: 1.5rem;

  ${({ isLast }) =>
    isLast &&
    `
      grid-column: span 2;
      justify-self: center;
      width: 50%;
    `}

  @media (max-width: 768px) {
    width: 100%;
    ${({ isLast }) =>
      isLast &&
      `
        grid-column: span 1;
      `}
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
`;

const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;

const Content = styled.div`
  flex: 1;
`;
