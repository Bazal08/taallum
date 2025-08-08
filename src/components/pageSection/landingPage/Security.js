"use client";
import DescriptionSmall from "@/components/templates/text/DescriptionSmall";
import HeaderLarge from "@/components/templates/text/HeaderLarge";
import HeaderSmall from "@/components/templates/text/HeaderSmall";
import React from "react";
import styled from "styled-components";

const Security = () => {
  const secPoints = [
    {
      icon: "/images/tickIcon.svg",
      title: "Thoroughly Vetted",
    },
    {
      icon: "/images/tickIcon.svg",
      title: "Background-Checked",
    },
    {
      icon: "/images/tickIcon.svg",
      title: "Verified Through Video Calls",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <MobileSection>
          <ContentSection>
            <DescriptionSmall
              textColor={"black"}
              fontSize={"1rem"}
              fontWeight={"400"}
            >
              For More Convince Use Our
            </DescriptionSmall>
            <HeaderLarge
              textColor={"blue"}
              fontSize={"5.5rem"}
              fontWeight={700}
            >
              Plus One
            </HeaderLarge>
            <HeaderSmall
              textColor={"black"}
              fontSize={"2.2rem"}
              fontWeight={"600"}
            >
              Mobile App
            </HeaderSmall>
          </ContentSection>
          <ImageWrapper>
            <Image src="/images/images/mobile.png" />
          </ImageWrapper>
        </MobileSection>
        <Box>
          <SecuritySection>
            <LeftSection>
              <HeaderWithIcon>
                <Icon src="/images/certifiedIcon.png" width={"80px"} />
                <HeaderSmall
                  textColor={"black"}
                  fontSize={"1.9rem"}
                  fontWeight={"600"}
                >
                  Safety First
                </HeaderSmall>
              </HeaderWithIcon>
              <DescriptionSmall textColor={"gray"}>
                Your security is our top priority. All our companies are:
              </DescriptionSmall>
            </LeftSection>
            <RightSection>
              {secPoints.map((item, index) => (
                <List key={index}>
                  <Icon src={item.icon} width={"40px"} />
                  <DescriptionSmall
                    textColor={"black"}
                    fontSize={"1.2rem"}
                    fontWight={"600"}
                  >
                    {item.title}
                  </DescriptionSmall>
                </List>
              ))}
            </RightSection>
          </SecuritySection>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Security;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MobileSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  /* background-color: red; */
  @media (max-width: 1150px) {
    flex-direction: column;
    margin: 1rem;
    gap: 2rem;
  }
`;
const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* margin-left: 3rem; */
  margin: 1.5rem 0rem;
`;
const HeaderWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const ImageWrapper = styled.div`
  /* text-align: right; */
`;
const Image = styled.img`
  width: 40rem;
  @media (max-width: 1150px) {
    width: 100%;
  }
`;
const SecuritySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 3rem;
  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 1rem;
    width: 85%;
    align-items: flex-start;
    gap: 2rem;
  }
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const List = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Icon = styled.img``;
const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
`;
