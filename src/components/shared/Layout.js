import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div``;
const Wrapper = styled.div``;
