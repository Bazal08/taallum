"use client";
import AdminBlog from "@/components/pageSection/adminPages/AdminBlogs";
import React from "react";
import styled from "styled-components";

const page = () => {
  return (
    <Container>
      <AdminBlog />
    </Container>
  );
};

export default page;

const Container = styled.div``;
