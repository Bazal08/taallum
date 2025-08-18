"use client";
import LoginForm from "@/components/templates/form/LoginForm";
import React from "react";
import styled from "styled-components";

const page = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default page;

const Container = styled.div``;
