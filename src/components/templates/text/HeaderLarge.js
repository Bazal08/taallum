"use client";
import React from "react";
import styled from "styled-components";

const HeaderLarge = ({
  children,
  fontSize,
  fontWeight,
  textColor,
  textLign,
}) => {
  const Text = styled.p`
    font-size: ${fontSize || "1.5rem"};
    font-weight: ${fontWeight || "600"};
    color: ${textColor || "#171717"};
    text-align: ${textLign ? "center" : ""};
    @media (max-width: 600px) {
      font-size: ${fontSize ? `calc(${fontSize} / 1.3)` : "1.25rem"};
    }
  `;
  return <Text>{children}</Text>;
};

export default HeaderLarge;
