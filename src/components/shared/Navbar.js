"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./SideBar";
import WaitingListModal from "../templates/modal/WaitingListmodal";

const Navbar = ({ scrollToSection }) => {
  const [openModal, setOpenModal] = useState(false);

  const navbarItems = [
    { title: "Home", key: "home", link: "/" },
    { title: "How it Works", key: "howWorks", link: "#howWorks" },
    { title: "Safety & Trust", key: "security", link: "#security" },
    { title: "Contact Us", key: "contact", link: "#contact" },
  ];

  return (
    <>
      <Container>
        <Wrapper>
          <LogoIcon src="/images/logo.svg" />
          <NavbarSection>
            {navbarItems.map((item, index) => (
              <a href={item.link} key={index}>
                <NavbarItems>
                  <Text>{item.title}</Text>
                </NavbarItems>
              </a>
            ))}
          </NavbarSection>
          <ButtonWrapper>
            <Button onClick={() => setOpenModal(true)}>
              Get Early Access Now
            </Button>
          </ButtonWrapper>
          <SidebarWrapper>
            <Sidebar scrollToSection={scrollToSection} />
          </SidebarWrapper>
        </Wrapper>
      </Container>
      <WaitingListModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  padding: 1rem 2.5rem;
  @media (max-width: 600px) {
    padding: 1rem 0.4rem;
  }
`;
const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid gray;
  border-radius: 0.7rem;
  padding: 0.6rem 1rem;
`;
const LogoIcon = styled.img``;
const NavbarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 940px) {
    display: none;
  }
`;
const NavbarItems = styled.div`
  cursor: pointer;
`;
const Text = styled.p`
  color: white;
`;
const ButtonWrapper = styled.div`
  @media (max-width: 940px) {
    display: none;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.8rem;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 1rem;
  background-color: #0066ff;
`;
const SidebarWrapper = styled.div`
  display: none;

  @media (max-width: 940px) {
    display: flex;
  }
`;
