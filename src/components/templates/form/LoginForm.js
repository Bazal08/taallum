"use client";
import React from "react";
import styled from "styled-components";
import TextLabel from "../text/TextLabel";
// import Span from "../text/Span";
import Link from "next/link";
import MainButton from "../button/MainButton";
import { useRouter } from "next/navigation";
import ROUTES from "@/components/utils/ROUTES";
import HeaderLarge from "../text/HeaderLarge";
import HeaderSmall from "../text/HeaderSmall";
import TextInput from "../input/TextInput";

const LoginForm = () => {
  const router = useRouter();

  return (
    <Container>
      <Wrapper>
        <LogoBox>
          <Logo src="/images/weesharelogo.svg" alt="Fancentrale" />
        </LogoBox>
        <UserWelcomeInfo>
          <HeaderLarge fontSize={"2rem"} fontWeight={"500"} textColor={"#fff"}>
            Welcome Back, 👋
          </HeaderLarge>
          <HeaderSmall
            fontSize={"1rem"}
            textAlign={"center"}
            fontWeight={"300"}
          >
            Sign in to your dashboard & start tracking your analytics
          </HeaderSmall>
        </UserWelcomeInfo>

        <MainWrapper>
          <FormContainer>
            <InputBox>
              <TextLabel>Email</TextLabel>
              <TextInput
                placeholder="Email"
                type="text"
                name="email"
                // value={values.email}
                // onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <TextLabel>Password</TextLabel>
              <TextInput
                placeholder="Password"
                type="password"
                name="password"
                // value={values.password}
                // onChange={handleChange}
                required
              />
              <ForgetWrapper>
                <Span fontWeight="400" fontSize="0.875rem">
                  Forget?
                </Span>
              </ForgetWrapper>
            </InputBox>

            <MainButton
              handleClick={() => router.push(ROUTES.DASHBOARD)}
              bg={"linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)"}
            >
              Login
            </MainButton>
          </FormContainer>
        </MainWrapper>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div``;

const Wrapper = styled.div`
  width: 27rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  align-items: center;
  padding: 3rem 0rem;

  @media (max-width: 600px) {
    width: 90%;
  }
  @media (min-width: 600px) and (max-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1400px) {
    max-width: 35rem;
  }
`;

const LogoBox = styled.div``;

const Logo = styled.img`
  @media (max-width: 600px) {
    width: 11rem;
  }
`;
const ButtonWrapper = styled.div`
  padding-top: 2rem;
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const UserWelcomeInfo = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  gap: 0.5rem;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputBox = styled.div``;

const ForgetWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 0.2rem;
  align-items: center;
`;

const Span = styled.span`
  cursor: pointer;
  color: #ed0049;
`;