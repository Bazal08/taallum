import React from "react";
import styled from "styled-components";
const DescriptionSmall = ({
  children,
  textColor,
  fontSize,
  fontWight,
  textAlign,
  Opacity,
}) => {
  const Text = styled.p`
    font-size: ${fontSize || "1rem"};
    font-weight: ${fontWight || "400"};
    color: ${textColor || "#E1E1E1"};
    text-align: ${textAlign ? "center" : ""};
    opacity: ${Opacity ? Opacity : ""};
    @media (max-width: 600px) {
      font-size: ${fontSize ? `calc(${fontSize} / 1.2)` : "0.9rem"};
    }
  `;
  return <Text>{children}</Text>;
};
export default DescriptionSmall;
