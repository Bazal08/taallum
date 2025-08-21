"use client";
import WaitingListModal from "@/components/templates/modal/WaitingListmodal";
import React, { useState } from "react";
import styled from "styled-components";

const WaitingList = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Container>
        <Content>
          <Heading>Ready To Make Your Next Event Unforgettable?</Heading>
          <RightSection>
            <Description>
              Don't go solo—hire the perfect companion for your next event or
              trip. Book your Plus One now and make sure you never miss out on a
              great experience!
            </Description>
            <JoinButton onClick={() => setOpenModal(true)}>
              Get Early Access Now
            </JoinButton>
          </RightSection>
        </Content>
      </Container>
      <WaitingListModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default WaitingList;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  border-radius: 20px;
  width: 80%;
  padding: 4rem 3.8rem;
  gap: 1rem;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;
    padding: 2rem 1rem;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  flex: 1;
  line-height: 1.3;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  line-height: 1.9;
`;

const JoinButton = styled.button`
  background: white;
  color: #0066ff;
  border: none;
  padding: 0.85rem 1.9rem;
  font-size: 14px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #f0f0f0;
  }
`;
