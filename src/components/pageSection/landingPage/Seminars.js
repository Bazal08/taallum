import DescriptionSmall from "@/components/templates/text/DescriptionSmall";
import HeaderSmall from "@/components/templates/text/HeaderSmall";
import HeaderLarge from "@/components/templates/text/HeaderLarge";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import dynamic from "next/dynamic";
// ...existing code...
import MainButton from "@/components/templates/button/MainButton";

// const RedChip = dynamic(() => import("@/components/templates/chip/RedChip"));

const testimonials1 = [
  {
    title: "alexrocks",
    content:
      "Mila Thompson's trip vlogs are incredibly educational in addition to being aesthetically beautiful. I've used her advice to plan a ton of vacations!",
    image: "/images/pillarsofIslam/1.png",
  },
  {
    title: "sophiej",
    content:
      "Ethan Grey's genuineness is what I adore about him. He is really relatable since he discusses genuine moments rather than simply the highlights.",
    image: "/images/pillarsofIslam/2.png",
  },
  {
    title: "livcreates",
    content:
      "I've been a fan of Lucas Bennett since the beginning and have seen him develop into one of Instagram's most genuine creators. He consistently prioritizes his community and never wavers from his moral principles. There's always something worthwhile to learn from his candid product evaluations, workout advice, or simply updates on his daily life. Lucas, keep it up!",
    image: "/images/pillarsofIslam/4.png",
  },
  {
    title: "nathanbuzz",
    content:
      "One of the best choices we made for our most recent campaign was to work with Amelia Scott. In addition to being aesthetically pleasing, her content was exactly in line with our brand's message. Her posts generated incredible audience interaction, which resulted in a 50% rise in our following and a notable increase in revenue. She genuinely understands how to make a meaningful connection with her community.",
    image: "/images/pillarsofIslam/5.png",
  },
  {
    title: "ethanlive",
    content:
      "I have been a longtime fan of Aiden Clark. His commitment to mental and physical well-being has greatly inspired me to lead a healthy lifestyle.",
    image: "/images/pillarsofIslam/6.png",
  },
  // {
  //   title: "gracemood",
  //   content:
  //     "Every day, Jaxon Hayes infuses my feed with such positive energy!",
  //   image: "/images/pillarsofIslam/5.png",
  // },
  // {
  //   title: "ryantoday",
  //   content:
  //     "Jaxon Hayes' content never fails to brighten my day and bring positive vibes to my feed.",
  //   image: "/images/pillarsofIslam/5.png",
  // },
];

const allTestimonials1 = [...testimonials1, ...testimonials1];

// const allTestimonials2 = [...testimonials2, ...testimonials2, ...testimonials2];

const Seminars = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const truncateContent = (content, maxWords) => {
    const words = content?.split(" ");
    if (words?.length > maxWords) {
      return words?.slice(0, maxWords).join(" ") + "...";
    }
    return content;
  };

  // Use only dummy data for both testimonial lists
  const allTestimonials2 = [...testimonials1, ...testimonials1];

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutside = (event) => {
        setSelectedTestimonial(null);
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [selectedTestimonial]);

  return (
    <Container>
      <Wrapper>
        <Header>
          {/* <RedChip size={"small"}>Testimonials</RedChip> */}
          <Head>Seminars</Head>
        </Header>
        <ScrollingWrapper>
          <ScrollContainer direction="left">
            {allTestimonials1?.map((testimonial, index) => (
              <Card key={index}>
                <Profile>
                  <ImageWrapper>
                    <Avatar src={testimonial.image} alt={testimonial.name} />
                  </ImageWrapper>
                  <Name>
                    <Large>{testimonial.title}</Large>
                  </Name>
                </Profile>
                <div>
                  <Content>{truncateContent(testimonial.content, 20)}</Content>
                  {testimonial.content.split(" ").length > 20 && (
                    <ReadMore
                      onClick={() => setSelectedTestimonial(testimonial)}
                    >
                      Read More
                    </ReadMore>
                  )}
                </div>
              </Card>
            ))}
          </ScrollContainer>
          {/* <ScrollContainer direction="right">
            {allTestimonials2?.map((testimonial, index) => (
              <Card key={index}>
                <Profile>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} />
                  <Name>
                    <Large>{testimonial.name}</Large>
                    <Small>{testimonial.username}</Small>
                  </Name>
                </Profile>
                <ContentWithButton>
                  <Content>{truncateContent(testimonial.content, 20)}</Content>
                  {testimonial.content.split(" ").length > 20 && (
                    <ReadMore
                      onClick={() => setSelectedTestimonial(testimonial)}
                    >
                      Read More
                    </ReadMore>
                  )}
                </ContentWithButton>
              </Card>
            ))}
          </ScrollContainer> */}
        </ScrollingWrapper>
        {selectedTestimonial && (
          <PopUp>
            <ProfileWrapper>
              <Profile>
                <Avatar
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial?.name}
                />
                <Name>
                  <HeaderSmall fontSize={"1rem"} textColor={"var(--textColor)"}>
                    {selectedTestimonial.name}
                  </HeaderSmall>
                  <DescriptionSmall fontSize={"0.875rem"}>
                    {selectedTestimonial.username}
                  </DescriptionSmall>
                </Name>
              </Profile>
              <Content>{selectedTestimonial.content}</Content>
              <CloseButton onClick={() => setSelectedTestimonial(null)}>
                Close
              </CloseButton>
            </ProfileWrapper>
          </PopUp>
        )}

        <SliderRightOverlay />
        <SliderLeftOverlay />
      </Wrapper>
    </Container>
  );
};

export default Seminars;
const scroll = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-110%);
  }
`;
const ScrollContainer = styled.div`
  display: flex;
  /* gap: 1rem; */
  flex-wrap: nowrap;
  animation: ${scroll} 25s linear infinite;
  ${({ direction }) =>
    direction === "right"
      ? "animation-direction: normal;"
      : "animation-direction: reverse;"}

  &:hover {
    animation-play-state: paused;
  }
  &:after {
    content: "";
    display: block;
    flex-shrink: 0;
    width: 100%;
  }
  @media (max-width: 600px) {
    overflow: visible;
    gap: 1rem;
    &::-webkit-scrollbar {
      height: 0px;
      width: 0px;
    }
  }
`;
const ReadMore = styled.button`
  margin-top: 5px;
  background: none;
  border: none;
  color: var(--bgRedColor);
  cursor: pointer;
  font-size: 1rem;
  text-decoration: underline;
`;
const Head = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #e1e1e1;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Small = styled.h6`
  font-size: 0.875rem;
  color: #e1e1e1;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 0.748rem;
  }
`;
const Large = styled.h6`
  font-size: 1rem;
  color: var(--textColor);
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 0.936rem;
  }
`;
const PopUp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1f1f1f;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 80%;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }
`;

const ProfileWrapper = styled.div``;

const CloseButton = styled.button`
  background-color: var(--bgRedColor);
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 2rem;
  margin-top: 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    /* background-color: #d32f2f; */
    transform: scale(1.05);
    opacity: 0.8rem;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #f44336;
  }
`;

const Container = styled.div`
  margin: 2rem 0 auto;
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding: 3rem 0;
  max-width: 1400px;
  margin: auto;
  /* border-radius: 2rem; */
  @media (max-width: 600px) {
    padding: 2.3rem 0;
  }
`;

const ScrollingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 600px) {
    /* gap: 1rem; */
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    gap: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1.2rem;
`;

const Card = styled.div`
  /* background-color: #1f1f1f; */
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  border-radius: 1rem;
  margin: 0rem 0.5rem;
  padding: 1.4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  width: 24rem;

  @media (max-width: 600px) {
    width: 17.5rem;
    margin: 0rem 0.2rem;
    padding: 1rem;
    /* width: 25rem; */
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  /* border-radius: 50%; */
  /* margin-right: 1rem; */
  /* width: 2.75rem; */
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 2rem;
  }
`;

const ContentWithButton = styled.div``;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  font-style: italic;
  @media (max-width: 600px) {
    font-size: 0.8125rem;
  }
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

const SliderRightOverlay = styled.div`
  background-color: rgba(188, 165, 165, 0.68);
  /* background-color: rgba(17, 17, 17, 0.68); */
  width: 500px;
  height: 500px;
  top: 12%;
  right: -20%;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  filter: blur(40px);

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
    top: 30%;
    right: -45%;
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;

const SliderLeftOverlay = styled.div`
  /* background-color: rgba(17, 17, 17, 0.68); */
  background-color: rgba(188, 165, 165, 0.68);
  width: 500px;
  height: 500px;
  top: 12%;
  left: -20%;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  filter: blur(40px);

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
    top: 30%;
    left: -45%;
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;
const RedChip = styled.div`
  background-color: var(--bgRedColor);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.8125rem;
  }
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

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
