"use client";
import Navbar from "@/components/shared/Navbar";
import WaitingListModal from "@/components/templates/modal/WaitingListmodal";
import React, { useState } from "react";
import styled from "styled-components";

const HeroSection = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          {/* <Navbar /> */}
          <BoxWrapper>
            <Box>
              <BoxSection>
                <IconWrapper>
                  <Icon src="/images/colorblocks.svg" />
                </IconWrapper>
                <Header>Your Perfect Plus One, On Demand</Header>
                <Description>
                  Transform any occasion into a memorable experience with a
                  carfully matched companion.
                </Description>
                <ButtonWrapper>
                  <Button onClick={() => setOpenModal(true)}>
                    Get Early Access Now
                  </Button>
                </ButtonWrapper>
              </BoxSection>
            </Box>
          </BoxWrapper>
        </Wrapper>
      </Container>
      <WaitingListModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default HeroSection;

const Container = styled.div``;
const Wrapper = styled.div``;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* text-align: center; */
`;
const Box = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  width: 38%;
  justify-content: center;
  /* margin: 0 auto; */
  border-radius: 1rem;
  opacity: 0.5rem;
  padding: 1.5rem 2rem;
  @media (max-width: 1100px) {
    width: 64%;
  }
  @media (max-width: 700px) {
    width: 84%;
  }
`;
const BoxSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;
const Icon = styled.img``;
const IconWrapper = styled.div``;
const Header = styled.h1`
  font-size: 2.8rem;
  color: white;
  font-weight: 400;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: white;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  border-radius: 1.2rem;
  border: none;
  background-color: #0066ff;
`;

const ButtonWrapper = styled.div``;
