"use client";
import React, { useEffect, useState, useRef } from "react";
import ChooseUs from "@/components/pageSection/landingPage/ChooseUs";
import HeroSection from "@/components/pageSection/landingPage/HeroSection";
import HowWorks from "@/components/pageSection/landingPage/HowWorks";
import PlusOnePerfect from "@/components/pageSection/landingPage/PlusOnePerfect";
import Security from "@/components/pageSection/landingPage/Security";
import Testimonials from "@/components/pageSection/landingPage/Testimonials";
import WaitingList from "@/components/pageSection/landingPage/WaitingList";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import styled from "styled-components";
import ContactUs from "@/components/pageSection/landingPage/ContactUs";

const Page = () => {
  return (
    <Container>
      <Div>
        <Navbar />
        <HeroSection />
      </Div>
      <div id="howWorks">
        <HowWorks />
      </div>
      <PlusOnePerfect />
      <ChooseUs />
      <div id="security">
        <Security />
      </div>
      <Testimonials />
      <WaitingList />
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </Container>
  );
};

export default Page;

const Div = styled.div`
  background-image: url("/images/heroSection.jfif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  @media (min-width: 1900px) {
    background-position: top;
    height: 70vh;
  }
`;

const Container = styled.div`
  @media (min-width: 1900px) {
    max-width: 1900px;
    margin: 0 auto;
  }
`;
