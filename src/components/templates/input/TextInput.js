import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from "styled-components";

const StyledTextField = styled(TextField)(({ bgColor, border }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: bgColor,
    borderRadius: "8px",

    "& fieldset": {
      border: border,
      borderRadius: "8px",
    },
    "&:hover fieldset": {
      borderColor: "#3F3F3F",
    },
    "&.Mui-focused fieldset": {
      // border: "1.48px var(--textColor) solid",
      border: "1.48px gray solid",
    },
    "& input": {
      padding: " 1rem",
      fontSize: "14px",
    },
    "& input[type='date']::-webkit-calendar-picker-indicator": {
      cursor: "pointer",
      background: "transparent",
    },
    "& input[type='number']::-webkit-inner-spin-button, & input[type='number']::-webkit-outer-spin-button":
      {
        WebkitAppearance: "none",
        margin: 0,
      },
  },
  "& .MuiInputLabel-root": {
    color: "#FFFFFF",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "#E1E1E1",
    opacity: 0.85,
  },
}));

const CalendarIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background: url("/images/icons/Icons/calendar.svg") no-repeat center;
  pointer-events: none;
`;

const DateInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TextInput = ({
  placeholder,
  type,
  name,
  id,
  onChange,
  value,
  onBlur,
  onFocus,
  padding,
  bgColor = "transparent",
  border = "1px solid #D6DDEB",
  adornment,
  required
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <DateInputWrapper>
      <StyledTextField
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        required= {required}
        // onFocus={onFocus}
        value={value}
        type={type === "password" && showPassword ? "text" : type}
        fullWidth
        bgColor={bgColor}
        border={border}
        InputProps={{
          style: {
            color: "black",
            padding: padding,
            fontFamily: "var(--font-openSans)",
          },
          endAdornment: adornment ? (
            <InputAdornment position="end">{adornment}</InputAdornment>
          ) : type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                style={{ color: "#98A2B3" }}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
        InputLabelProps={{
          style: { color: "#FFFFFF" },
        }}
      />
      {type === "date" && <CalendarIcon />}
    </DateInputWrapper>
  );
};

export default TextInput;
