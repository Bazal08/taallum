import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import styled, { css } from "styled-components";
import TextInput from "../input/TextInput";
import TextLabel from "../text/TextLabel";
import HeaderSmall from "../text/HeaderSmall";
import DescriptionSmall from "../text/DescriptionSmall";
import {
  addAvailableHire,
  addAvailableLooking,
} from "@/redux/slice/waitingListSlice";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { PopUpModalSchema } from "@/components/utils/Validation";

export default function WaitingListModal({ setOpen, open }) {
  const [isFanSelected, setIsFanSelected] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log("Updated isFanSelected:", isFanSelected);
  }, [isFanSelected]);

  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector(
    (state) => state.waitingList
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      state: "",
      zipcode: "",
    },
    validationSchema: PopUpModalSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Before API Call - isFanSelected:", isFanSelected);
      console.log("Submitting data:", values);

      if (isFanSelected) {
        dispatch(addAvailableHire(values));
      } else {
        dispatch(addAvailableLooking(values));
      }

      resetForm();
    },
  });

  return (
    <StyledDialog open={open} onClose={handleClose} disableScrollLock>
      <Container>
        <Header>
          <Logo src="/images/images/logoblack.png" />
          <CloseButton onClick={handleClose}>×</CloseButton>
        </Header>
        <Box>
          <HeaderSmall fontWeight={500} fontSize={"1.4rem"}>
            I am interested as:
          </HeaderSmall>
          <ToggleContainer>
            <StyledButton
              $isActive={!isFanSelected}
              onClick={() => setIsFanSelected(false)}
            >
              <Icon src="/images/icons/looking-hire.svg" />
              <Text $isActive>Looking For Hire</Text>
            </StyledButton>

            <StyledButton
              $isActive={isFanSelected}
              onClick={() => setIsFanSelected(true)}
            >
              <Icon src="/images/icons/available-hire.svg" />
              <Text $isActive>Available for Hire</Text>
            </StyledButton>
          </ToggleContainer>
        </Box>
        <Section>
          <HeaderSmall fontWeight={600} fontSize={"1.2rem"}>
            Submit Your Application
          </HeaderSmall>
          <DescriptionSmall fontSize={"0.9rem"}>
            The following is required and will only be shared with Nomad
          </DescriptionSmall>
        </Section>

        {/* Show Form Based on Selection */}
        {isFanSelected ? (
          <Form onSubmit={formik.handleSubmit}>
            <InputBox>
              <TextLabel>First Name</TextLabel>
              <TextInput
                name="firstName"
                // id="firstName"
                type={"firstName"}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your first name"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <ErrorText>{formik.errors.firstName}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>Last Name</TextLabel>
              <TextInput
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your last name"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <ErrorText>{formik.errors.lastName}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>Email</TextLabel>
              <TextInput
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorText>{formik.errors.email}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>City</TextLabel>
              <TextInput
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your city"
              />
              {formik.touched.city && formik.errors.city && (
                <ErrorText>{formik.errors.city}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>State</TextLabel>
              <TextInput
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your state"
              />
              {formik.touched.state && formik.errors.state && (
                <ErrorText>{formik.errors.state}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>Zip Code</TextLabel>
              <TextInput
                name="zipcode"
                value={formik.values.zipcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your zip code"
              />
              {formik.touched.zipcode && formik.errors.zipcode && (
                <ErrorText>{formik.errors.zipcode}</ErrorText>
              )}
            </InputBox>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </SubmitButton>

            {successMessage && (
              <SuccessMessage>{successMessage}</SuccessMessage>
            )}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </Form>
        ) : (
          <Form onSubmit={formik.handleSubmit}>
            <InputBox>
              <TextLabel>First Name</TextLabel>
              <TextInput
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your first name"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <ErrorText>{formik.errors.firstName}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>Last Name</TextLabel>
              <TextInput
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your last name"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <ErrorText>{formik.errors.lastName}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>Email</TextLabel>
              <TextInput
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorText>{formik.errors.email}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>City</TextLabel>
              <TextInput
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your city"
              />
              {formik.touched.city && formik.errors.city && (
                <ErrorText>{formik.errors.city}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>State</TextLabel>
              <TextInput
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your state"
              />
              {formik.touched.state && formik.errors.state && (
                <ErrorText>{formik.errors.state}</ErrorText>
              )}
            </InputBox>

            <InputBox>
              <TextLabel>Zip Codes</TextLabel>
              <TextInput
                name="zipcode"
                value={formik.values.zipcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your zip code"
              />
              {formik.touched.zipcode && formik.errors.zipcode && (
                <ErrorText>{formik.errors.zipcode}</ErrorText>
              )}
            </InputBox>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </SubmitButton>

            {successMessage && (
              <SuccessMessage>{successMessage}</SuccessMessage>
            )}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </Form>
        )}

        <Footer>
          By submitting the request, you confirm that you accept our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </Footer>
      </Container>
    </StyledDialog>
  );
}

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
  justify-content: space-between;
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
  background: #0066ff;
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
