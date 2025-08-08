import React from "react";
import styled from "styled-components";

const HeaderSmall = ({
  children,
  fontSize,
  textColor,
  fontWeight,
  textAlign,
  Opacity,
}) => {
  const Text = styled.p`
    font-size: ${fontSize || "1.25rem"};
    color: ${textColor || "#050B20"};
    font-weight: ${fontWeight || "500"};
    text-align: ${textAlign || ""};
    opacity: ${Opacity || ""};
    @media (max-width: 600px) {
      font-size: ${fontSize ? `calc(${fontSize} / 1.3)` : "1.2rem"};
    }
  `;
  return <Text>{children}</Text>;
};

export default HeaderSmall;
