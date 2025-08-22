"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./SideBar";
import WaitingListModal from "../templates/modal/WaitingListmodal";

const Navbar = ({ scrollToSection }) => {
  const [openModal, setOpenModal] = useState(false);

  const navbarItems = [
    { title: "Home", key: "home", link: "/" },
    { title: "Salah Timings", key: "howWorks", link: "/#howWorks" },
    { title: "About" },
    { title: "Arabic Language", key: "", link: "/pages/arabiclanguage" },
    { title: "Quran Classes", key: "", link: "/pages/quranClass" },
    { title: "Blogs & News", key: "", link: "/pages/blog" },
    // { title: "Salah Timings", key: "contact", link: "#contact" },
    { title: "Seminars", key: "", link: "/pages/seminarPage" },
  ];

  return (
    <>
      <Container>
        <Wrapper>
          <LogoIcon src="/images/whitelogo.png"/>
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
              Contact
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
  align-items: center;
  padding: 1rem 2.5rem;
  @media (max-width: 600px) {
    padding: 0.4rem 0.4rem;
  }
`;
const Wrapper = styled.div`
  /* background: rgba(0, 0, 0, 0.3); */
  background: rgba(113, 107, 107, 0.3);
  /* background-color: #7690a7; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid gray;
  border-radius: 0.7rem;
  padding: 0.6rem 1rem;
    @media (max-width: 600px) {
    padding: 0rem;
  }
`;
const LogoIcon = styled.img`
  width: 8rem;
`;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: #8e9ab0;
`;
const SidebarWrapper = styled.div`
  display: none;

  @media (max-width: 940px) {
    display: flex;
  }
`;

