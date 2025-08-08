import React from "react";
import { InputLabel } from "@mui/material";
import styled from "styled-components";

const TextLabel = ({ children }) => {
  const StyledInputLabel = styled(InputLabel)({
    color: "#050B20",
    marginBottom: "5px",
    marginTop: "5px",
    fontFamily: "var(--font-openSans)",
  });
  return <StyledInputLabel>{children}</StyledInputLabel>;
};

export default TextLabel;
