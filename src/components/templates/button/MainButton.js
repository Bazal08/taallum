import React from "react";
import styled from "styled-components";

export default function MainButtonComponent({
  children,
  textColor,
  bgColor,
  fontSize,
  fontWeight,
  Width,
  Border,
  borderRadius,
  handleClick,
  padding,
}) {
  return (
    <Button
      onClick={handleClick}
      $textColor={textColor}
      $BackgroundColor={bgColor}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $Width={Width}
      $Border={Border}
      $borderRadius={borderRadius}
      $padding={padding}
    >
      {children}
    </Button>
  );
}

// CSS
const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$textColor ? props.$textColor : "#E1E1E1")};
  background-color: ${(props) =>
    props.$BackgroundColor ? props.$BackgroundColor : "#f9304d"};
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius : "2rem"};
  padding: ${(props) => (props.$padding ? props.$padding : "0.5rem 1.5rem")};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1rem")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "500")};
  width: ${(props) => (props.$Width ? props.$Width : "100%")};
  border: ${(props) => (props.$Border ? props.$Border : "none")};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 1024px) {
    font-size: ${(props) =>
      props.$fontSize ? `calc(${props.$fontSize} / 1.1)` : ""};
    padding: ${(props) =>
      props.$padding ? `calc(${props.$padding} / 1.5)` : "0.4rem 0.5rem"};
  }
`;
