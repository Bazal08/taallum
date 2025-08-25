"use client";
import React, { useState } from "react";
import styled from "styled-components";

const QuranClasses = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    program: "Quran Recitation (Tajweed)",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend or API
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
    // Optionally reset form
    // setFormData({ name: '', email: '', phone: '', age: '', program: '', message: '' });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Quran Classes for All Ages</Title>
        <Subtitle>
          Learn Quran Recitation, Tajweed, Hifz (Memorization), and Arabic
          Language from qualified teachers. Flexible online classes for
          children, teens, and adults – beginner to advanced levels.
        </Subtitle>

        <Features>
          <Feature>📖 Live 1-on-1 or Group Sessions</Feature>
          <Feature>🎧 Learn Tajweed with Proper Pronunciation</Feature>
          <Feature>🌙 Hifz Program with Daily Revision</Feature>
          <Feature>🌐 Study from Anywhere – Online via Zoom</Feature>
          <Feature>👩‍🏫 Female & Male Instructors Available</Feature>
          <Feature>🎯 Free Trial Class Included</Feature>
        </Features>

        <FormSection>
          <FormTitle>Register for a Free Trial Class</FormTitle>
          {isSubmitted ? (
            <SuccessMessage>
              Thank you, {formData.name}! Your request has been received. We'll
              contact you shortly to schedule your free trial class.
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>Phone</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>Age of Student</Label>
                <Input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 8"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>Preferred Program</Label>
                <Select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option value="Quran Recitation (Tajweed)">
                    Quran Recitation (Tajweed)
                  </option>
                  <option value="Hifz (Memorization)">
                    Hifz (Memorization)
                  </option>
                  <option value="Arabic Language">Arabic Language</option>
                  <option value="Tafsir & Islamic Studies">
                    Tafsir & Islamic Studies
                  </option>
                  <option value="Combined Program">Combined Program</option>
                </Select>
              </InputGroup>

              <InputGroup>
                <Label>Additional Message (Optional)</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific goals or questions?"
                  rows="4"
                />
              </InputGroup>

              <SubmitButton type="submit">Register Now</SubmitButton>
            </Form>
          )}
        </FormSection>
      </Wrapper>
    </Container>
  );
};

export default QuranClasses;

// Styled Components
const Container = styled.div`
  width: 100%;
  background: #f8fafc;
  padding: 60px 20px;
  font-family: "Segoe UI", sans-serif;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #8e9ab0;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4b5563;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 30px 0;
  text-align: center;
`;

const Feature = styled.span`
  /* background: #dbeafe; */
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  color: #dde2ebff;
  padding: 0.8rem 1.3rem;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
`;

const FormSection = styled.section`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  max-width: 700px;
  margin: 40px auto;
  text-align: left;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #8e9ab0;
  margin-bottom: 20px;
  text-align: center;
`;

const SuccessMessage = styled.p`
  font-size: 1.2rem;
  color: #059669;
  text-align: center;
  line-height: 1.6;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #1f2937;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s ease;
  background-color: white;
  color: black;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: black;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  background-color: white;
  color: black;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 14px;
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  /* &:hover {
    background: #1d4ed8;
  } */
`;
