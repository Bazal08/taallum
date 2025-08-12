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


// import React, { useEffect, useRef } from "react";
// import styled from "styled-components";
// import dynamic from "next/dynamic";
// import { Grid } from "@mui/material";
// import { useRouter } from "next/navigation";
// // const RedChip = dynamic(() => import("@/components/templates/chip/RedChip"));
// // const Text = dynamic(() =>
// //   import("@/components/templates/text/responsive/Text")
// // );

// const card = [
//   {
//     img: "/images/pillarsofIslam/1.png",
//     icon: "/images/icons/images/dollarBlue.svg",
//     label: "Be Heard, Be Bold",
//     text: "At our core, we believe in collaboration and evolution. The founders are committed to continuously improving the platform based on the feedback and suggestions of both creators and users. Your voice matters here.",
//     button: "Get started",
//     color: "#3C1E26",
//     row: "row",
//   },
//   {
//     img: "/images/pillarsofIslam/1.png",
//     icon: "/images/icons/images/dollarSign.svg",
//     label: "Grow With Us!",
//     text: "We value dedication and growth. Our evolving platform and leveling system ensure that both creators and users can progress and reap the rewards. As the community grows, we continuously add new features, enhancing your experience.",
//     button: "Get started",
//     color: "#35273C",
//     row: "row-reverse",
//   },
//   {
//     img: "/images/pillarsofIslam/1.png",
//     icon: "/images/icons/images/dollarBrown.svg",
//     label: "Early Bird Benefits",
//     text: "Join us in our early phase and unlock exclusive advantages. Creators who jump on board early can retain a remarkable 85% of the revenue they generate. It's our way of acknowledging and rewarding pioneers in our community.",
//     button: "Get started",
//     color: "#261E0D",
//     row: "row",
//   },
//   {
//     img: "/images/pillarsofIslam/1.png",
//     icon: "/images/icons/images/dollarPink.svg",
//     label: "Empowering Tools",
//     text: "Success is about more than just creating content. That's why we equip our creators with powerful analytic and marketing tools. Understand your audience better and amplify your reach with data-driven insights and strategic marketing support.",
//     button: "Get started",
//     color: "#202832",
//     row: "row-reverse",
//   },
// ];

// const FancentraleFeatures = () => {
//   const textRefs = useRef([]); // Array of refs

//   useEffect(() => {
//     textRefs.current = textRefs.current.slice(0, card.length); // Ensure the correct number of refs

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     textRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       textRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   const router = useRouter();
//   return (
//     <Container>
//       {/* <RedChip>FANCENTRALE FEATURES</RedChip> */}
//       <Wrapper>
//         {card.map((item, index) => (
//           <CardWrapper color={item.color} key={index}>
//             <Grid container justifyContent="space-between" direction={item.row}>
//               <Grid item xs={12} sm={5.5} md={5.5}>
//                 <Content ref={(el) => (textRefs.current[index] = el)}>
//                   <Icon src={item.icon} alt="icon" />
//                   <Label>{item.label}</Label>
//                   <Text textColor="var(--lightGrayBgColor)" size="small">
//                     {item.text}
//                   </Text>
//                   {/* <ButtonBox>
//                     <Link href={ROUTES.SIGNUP} passHref>
//                       <Button>{item.button}</Button>
//                     </Link>
//                   </ButtonBox> */}
//                 </Content>
//               </Grid>
//               <Grid item xs={12} sm={5.5} md={5.5}>
//                 <ImageWrapper>
//                   <Image src={item.img} alt="Overview Image" />
//                 </ImageWrapper>
//               </Grid>
//             </Grid>
//           </CardWrapper>
//         ))}
//       </Wrapper>
//     </Container>
//   );
// };

// export default FancentraleFeatures;

// const Container = styled.div`
//   max-width: 1400px;
//   width: 100%;
//   margin: auto;
//   padding: 0 1rem;
//   @media (max-width: 768px) {
//     padding: 0rem;
//   }
// `;

// const Wrapper = styled.div`
//   @media (max-width: 768px) {
//     margin-top: 2rem;
//   }
// `;

// const CardWrapper = styled.div`
//   height: auto;
//   width: 100%;
//   padding: 2rem;
//   margin: 2rem 0 1rem 0;
//   border-radius: 2rem;
//   background-color: ${({ color }) => color};
//   position: -webkit-sticky;
//   position: sticky;
//   top: 12%;
//   z-index: 1;
//   opacity: 1;
//   transform: scale(1);
//   transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
//   &:nth-of-type(2) {
//     top: 25%;
//   }
//   &:nth-of-type(3) {
//     top: 30%;
//   }
//   &:nth-of-type(4) {
//     top: 35%;
//   }
//   @media (max-width: 600px) {
//     padding: 2rem 1rem;
//   }
// `;

// const Content = styled.div`
//   flex: 1;
//   padding-right: 2rem;
//   opacity: 0;
//   transform: translateY(50px); /* Initially below */
//   transition: opacity 0.8s ease-out, transform 0.8s ease-out;

//   &.visible {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const Icon = styled.img`
//   margin-bottom: 1rem;
//   width: 13%;
//   @media (max-width: 768px) {
//     width: 20%;
//   }
// `;

// const Label = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: white;
//   margin-bottom: 1.5rem;
//   padding-top: 2.75rem;
//   @media (max-width: 768px) {
//     font-size: 1.75rem;
//     padding-top: 1rem;
//     margin-bottom: 0.75rem;
//   }
// `;
// const Text = styled.p`
//   line-height: normal;
//   color: var(--lightGrayBgColor);
//   font-weight: 400;
//   font-size: 1rem;
//   letter-spacing: 0.3px;
//   @media (max-width: 768px) {
//     font-size: 0.8125rem;
//     margin-bottom: 0.75rem;
//   }
// `;
// const ButtonBox = styled.div`
//   margin-top: 5rem;
// `;

// const Button = styled.button`
//   background-color: white;
//   color: black;
//   padding: 0.75rem 1.5rem;
//   border-radius: 2.2rem;
//   font-size: 0.75rem;
//   cursor: pointer;
//   border: none;
//   &:hover {
//     background-color: var(--bgRedColor);
//     color: white;
//   }
//   @media (max-width: 768px) {
//     padding: 0.6rem 1rem;
//   }
// `;

// const ImageWrapper = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 0.5rem;
//   object-fit: cover;
//   height: 100%;
// `;

// const Image = styled.img`
//   width: 24rem;
//   height: 100%;
//   border-radius: 20px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//   max-width: 600px;

//   @media (max-width: 768px) {
//     margin-top: 2rem;
//   }
// `;