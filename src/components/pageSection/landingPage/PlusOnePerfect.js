"use client";
import React from "react";
import styled from "styled-components";

const PlusOnePerfect = () => {
  const sections = [
    {
      title: "Shahadah (Faith)",
      des: "To bear witness that “There is no god but Allah, and Muhammad (ﷺ) is His Messenger.",
      description:
        "The Shahadah is the entry point into Islam and the foundation of a Muslim’s belief. It is a simple yet profound statement that affirms the oneness of Allah and the finality of the Prophet Muhammad ﷺ as His Messenger. By declaring this testimony with sincerity, one embraces the faith and commits to living according to its principles.",
      image: "/images/pillarsofIslam/1.png",
    },
    {
      title: "Salah (Prayer)",
      des: "Performing the five daily prayers.",
      description: "Salah is a direct connection between the believer and Allah. Muslims are required to pray five times a day at specific times: Fajr, Dhuhr, Asr, Maghrib, and Isha. Each prayer serves as a reminder of Allah’s presence and helps cleanse the heart from wrongdoing. Performing Salah regularly strengthens faith, builds discipline, and brings peace to the soul.",
      image: "/images/pillarsofIslam/2.png",
    },
    {
      title: "Zakah (Charity)",
      des: "Giving a portion of wealth (2.5%) to those in need.",
      description: "Zakah purifies wealth by redistributing it to those less fortunate. It’s not just charity — it’s a duty for every eligible Muslim. Through Zakah, the gap between the rich and poor is reduced, and society becomes more compassionate and balanced. Recipients may include the poor, the needy, and those in debt.",
      image: "/images/pillarsofIslam/4.png",
    },
    {
      title: "Sawm (Fasting)",
      des: "Abstaining from food, drink, and harmful actions from dawn to sunset during Ramadan.",
      description: "Fasting in the month of Ramadan is a time of heightened spiritual reflection, self-control, and gratitude. Muslims fast from dawn (Fajr) until sunset (Maghrib), refraining from food, drink, and sinful behavior. Beyond physical discipline, Sawm cultivates empathy for the less fortunate and brings the community together in worship and remembrance of Allah.",
      image: "/images/pillarsofIslam/5.png",
    },
    {
      title: "Hajj (Pilgrimage) ",
      des: "A sacred journey to Makkah once in a lifetime (if physically and financially able).",
      description:
        "Hajj is a unique act of worship performed during the Islamic month of Dhul-Hijjah. Muslims from around the world gather in Makkah, wearing simple white garments to symbolize unity and equality before Allah. The pilgrimage includes a series of rituals tracing the steps of Prophet Ibrahim (AS) and his family, reminding believers of sacrifice, humility, and devotion.",
      image: "/images/pillarsofIslam/6.png",
    },
  ];

  return (
    <Container>
      <Title>Pillars of Islam</Title>
      <Wrapper>
        {sections.map((item, index) => (
          <Section key={index} $isEven={index % 2 !== 0}>
            <Card $isEven={index % 2 !== 0}>
              <Content $isEven={index % 2 !== 0}>
                <Heading>{item.title}</Heading>
                <Description>{item.des}</Description>
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
  height: 20rem;
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
