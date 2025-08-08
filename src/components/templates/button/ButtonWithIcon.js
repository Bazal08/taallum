import React from "react";
import styled from "styled-components";

export default function ButtonWithIcon({
  fontSize,
  fontWeight,
  children,
  textColor,
  handleClick,
  src,
  bgColor,
  width,
  borderRadius,
  IconWidth,
  flexDirection,
  padding,
  Gap,
}) {
  return (
    <Button
      onClick={handleClick}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $textColor={textColor}
      $bgColor={bgColor}
      $width={width}
      $borderRadius={borderRadius}
      $IconWidth={IconWidth}
      $flexDirection={flexDirection}
      $padding={padding}
      $Gap={Gap}
    >
      <Icon src={src || ""} />
      {children}
    </Button>
  );
}
// CSS

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.$Gap ? props.$Gap : "0.5rem")};
  flex-direction: ${(props) =>
    props.$flexDirection ? props.$flexDirection : ""};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1rem")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  color: ${(props) => props.$Gap || "white"};
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : "#f9304d")};
  padding: ${(props) => (props.$padding ? props.$padding : "0.75rem 1.5rem")};
  width: ${(props) => (props.$width ? props.$width : "auto")};
  cursor: pointer;
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius : "0.5rem"};
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 1024px) {
    font-size: ${(props) =>
      props.$fontSize ? `calc(${props.$fontSize} / 1.5)` : "0.75rem"};
    padding: ${(props) =>
      props.$padding ? `calc(${props.$padding} / 1.5)` : "0.75rem 0.875rem"};
  }
`;

const Icon = styled.img`
  width: ${(props) => props.$IconWidth || ""};
`;
