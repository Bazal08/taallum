import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div``;
const Wrapper = styled.div``;
