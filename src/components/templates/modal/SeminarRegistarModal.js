import { Dialog } from "@mui/material";
import React from "react";
import TextLabel from "../text/TextLabel";
import TextInput from "../input/TextInput";
import styled from "styled-components";

const SeminarRegistarModal = ({ setOpen, open }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledDialog open={open} onClose={handleClose} disableScrollLock>
      <Container>
        <Header>
          {/* <Logo src="/images/images/logoblack.png" /> */}
          <CloseButton onClick={handleClose}>×</CloseButton>
        </Header>
        <Form>
          <InputBox>
            <TextLabel>First Name</TextLabel>
            <TextInput
              name="firstName"
              // id="firstName"
              type={"firstName"}
              placeholder="Enter your first name"
            />
          </InputBox>

          <InputBox>
            <TextLabel>Last Name</TextLabel>
            <TextInput name="lastName" placeholder="Enter your last name" />
          </InputBox>

          <InputBox>
            <TextLabel>Email</TextLabel>
            <TextInput
              name="email"
              type="email"
              //   value={formik.values.email}
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              placeholder="Enter your email"
            />
          </InputBox>

          <InputBox>
            <TextLabel>City</TextLabel>
            <TextInput name="city" pl aceholder="Enter your city" />
          </InputBox>

          <InputBox>
            <TextLabel>State</TextLabel>
            <TextInput name="state" placeholder="Enter your state" />
          </InputBox>

          <InputBox>
            <TextLabel>Zip Code</TextLabel>
            <TextInput name="zipcode" placeholder="Enter your zip code" />
          </InputBox>

          <SubmitButton type="submit">Submit</SubmitButton>

          {/* {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>} */}
          {/* {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} */}
        </Form>
        <Footer>
          By submitting the request, you confirm that you accept our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </Footer>
      </Container>
    </StyledDialog>
  );
};

export default SeminarRegistarModal;

// const Container = styled.div``;
const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: 40%;
    padding: 1.5rem;
    border-radius: 10px;
    background-color: white;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
    @media (max-width: 1050px) {
      width: 55%;
    }
    @media (max-width: 768px) {
      width: 80%;
    }
    @media (max-width: 450px) {
      width: 95%;
    }
  }
`;

const Icon = styled.img``;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 1rem;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 1rem;
  width: 100%;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  width: 6rem;
`;

const CloseButton = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 0.7rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const Footer = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1rem;
  a {
    color: blue;
    text-decoration: none;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
const Text = styled.p`
  font-size: 0.9rem;
  color: black;
  color: ${(props) => (props.$isActive ? "black" : "white")};

  /* &:hover {
    color: white;
  } */
`;

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  border: ${(props) => (props.$isActive ? "none" : "1px solid gray")};
  /* font-size: 0.9rem; */
  /* color: black; */
  background-color: ${(props) => (props.$isActive ? "#0066FF" : "transparent")};
  /* color: ${(props) => (props.$isActive ? "white" : "black")}; */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: white;
    background-color: #e6e6e6;
    border: none;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;
