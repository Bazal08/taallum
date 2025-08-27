"use client";
import TextInput from "@/components/templates/input/TextInput";
import HeaderLarge from "@/components/templates/text/HeaderLarge";
import TextLabel from "@/components/templates/text/TextLabel";
import React from "react";
import styled from "styled-components";
import { Textarea } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { addContactUs } from "@/redux/slice/waitingListSlice";
import { useFormik } from "formik";
import { ContactFormSchema } from "@/components/utils/Validation";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { successMessage, errorMessage, loading } = useSelector(
    (state) => state.waitingList
  );
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
    },
    validationSchema: ContactFormSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Submitting Contact Us Data:", values);
      dispatch(addContactUs(values));

      // setTimeout(() => {
      //   dispatch(clearMessages());
      // }, 3000);

      resetForm(); // Clear form after submission
    },
  });
  return (
    <Container>
      <HeaderLarge fontSize={"2rem"} fontWeight={600} color={"#5b6475"} >
        Contact Us
      </HeaderLarge>
      <Wrapper>
        {/* <ImageWrapper>
          <Image src="/images/images/mobile.png" />
        </ImageWrapper> */}
        <Form onSubmit={formik.handleSubmit}>
          <InputBox>
            <TextLabel>Name</TextLabel>
            <TextInput
              name="name"
              placeholder="Enter your first name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <Error>{formik.errors.name}</Error>
            )}
          </InputBox>

          <InputBox>
            <TextLabel>Email</TextLabel>
            <TextInput
              name="email"
              placeholder="Enter your email address"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <Error>{formik.errors.email}</Error>
            )}
          </InputBox>

          <InputBox>
            <TextLabel>Phone Number</TextLabel>
            <TextInput
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <Error>{formik.errors.phoneNumber}</Error>
            )}
          </InputBox>

          <InputBox>
            <TextLabel>Description</TextLabel>
            <Textarea
              name="description"
              minRows={4}
              placeholder="Description...."
              size="lg"
              variant="outlined"
              color="black"
              sx={{
                fontSize: "0.9rem",
                backgroundColor: "white",
                color: "black",
                outline: "none",
                border: "1px solid #E6E6E6",
                "--Textarea-focusedInset": " gray",
                "&:focus-within": {
                  border: "1px solid black",
                },
                "&.MuiOutlinedInput-input::placeholder": {
                  color: " #E6E6E6",
                  opacity: 1,
                },
              }}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description && (
              <Error>{formik.errors.description}</Error>
            )}
          </InputBox>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </SubmitButton>

          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: rem; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 3rem;
  /* background-color: red; */
  width: 80%;
  justify-content: space-between;

  @media (max-width: 1150px) {
    /* width: 100%; */
    gap: 3rem;
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  /* text-align: right; */
`;

const Image = styled.img`
  /* width: 35rem; */
  width: 40rem;
  /* height: 33rem; */
  @media (max-width: 1150px) {
    width: 90%;
    display: none;
  }
`;

const SubmitButton = styled.button`
  /* background: #0066ff; */
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 0.7rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 4px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
`;
