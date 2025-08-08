"use client";
import React from "react";
import styled from "styled-components";
import DescriptionSmall from "../templates/text/DescriptionSmall";

const Footer = () => {
  const footerItem = [
    { title: "Contact Us" },
    { title: "How It Works" },
    { title: "Safety & Trust" },
    { title: "Terms of Service" },
    { title: "Privacy Policy" },
  ];
  return (
    <Container>
      <Wrapper>
        <Icon src="/images/images/logoblack.png" />
        <ListItem>
          {footerItem.map((item, index) => (
            <Item key={index}>
              <DescriptionSmall textColor={"black"}>
                {item.title}
              </DescriptionSmall>
            </Item>
          ))}
        </ListItem>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  border-top: 1px solid #0066ff;
  margin-top: 5rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  align-items: center;
  margin: 5rem;
  @media (max-width: 600px) {
    width: 100%;
    margin: 3rem 1rem;
    flex-direction: column;
    /* align-items: flex-start; */
    gap: 1rem;
  }
`;
const Icon = styled.img`
  width: 8rem;
`;
const ListItem = styled.div`
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  /* background-color: red; */
  @media (max-width: 600px) {
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
`;
const Item = styled.div`
  display: flex;
  gap: 1rem;
`;
