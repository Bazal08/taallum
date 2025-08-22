"use client";
import React, { useState } from 'react';
import styled from 'styled-components';

const HotDesk = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    startTime: '09:00',
    duration: '2',
    purpose: 'Quran Recitation',
    specialRequest: '',
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
    console.log("Hot Desk Booking Request:", formData);
    setIsSubmitted(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title>📚 Hot Desk – Quiet Workspace for Private Study</Title>
        <Subtitle>
          Need a peaceful, distraction-free space for Quran recitation, memorization, 
          or personal study? Book a private hot desk in our serene learning center.
        </Subtitle>

        <Features>
          <Feature>🧘 Quiet, Individual Workspaces</Feature>
          <Feature>📵 Distraction-Free Environment (Phone-free zone)</Feature>
          <Feature>🕌 Peaceful Atmosphere with Soft Quran Recitation</Feature>
          <Feature>🖨️ Access to Printer & Wi-Fi (Optional)</Feature>
          <Feature>☕ Complimentary Water & Tea</Feature>
          <Feature>💰 Cost: To Be Announced (TBA) – Opening Soon!</Feature>
        </Features>

        <BookingSection>
          <SectionTitle>Book Your Quiet Workspace</SectionTitle>
          <CostNote>
            <strong>Costs will be announced soon.</strong> Early bookings are free for our pilot phase!
          </CostNote>

          {isSubmitted ? (
            <SuccessMessage>
              Thank you, <strong>{formData.name}</strong>! Your desk has been reserved for{' '}
              <strong>{formData.date}</strong> from {formData.startTime} for {formData.duration} hour(s).
              We'll email you confirmation shortly.
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
                  placeholder="Your full name"
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
                  placeholder="your@email.com"
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>Date</Label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </InputGroup>

              <Row>
                <HalfGroup>
                  <Label>Start Time</Label>
                  <Select
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                  >
                    <option value="06:00">6:00 AM</option>
                    <option value="07:00">7:00 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </Select>
                </HalfGroup>

                <HalfGroup>
                  <Label>Duration (Hours)</Label>
                  <Select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                  >
                    <option value="1">1 Hour</option>
                    <option value="2">2 Hours</option>
                    <option value="3">3 Hours</option>
                    <option value="4">4 Hours</option>
                    <option value="6">Half Day (6 hrs)</option>
                    <option value="8">Full Day (8 hrs)</option>
                  </Select>
                </HalfGroup>
              </Row>

              <InputGroup>
                <Label>Purpose of Visit</Label>
                <Select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                >
                  <option value="Quran Recitation">Quran Recitation (Tajweed)</option>
                  <option value="Hifz (Memorization)">Hifz (Memorization)</option>
                  <option value="Arabic Study">Arabic Language Study</option>
                  <option value="Personal Reflection">Personal Reflection/Dhikr</option>
                  <option value="Other">Other (Specify below)</option>
                </Select>
              </InputGroup>

              <InputGroup>
                <Label>Special Requests (Optional)</Label>
                <Textarea
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleChange}
                  placeholder="e.g., Need a prayer mat, prefer window seat, etc."
                  rows="3"
                />
              </InputGroup>

              <SubmitButton type="submit">Reserve My Desk</SubmitButton>
            </Form>
          )}
        </BookingSection>
      </Wrapper>
    </Container>
  );
};

export default HotDesk;

// Styled Components
const Container = styled.div`
  width: 100%;
  background: #f8fafc;
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  color: #1e3a8a;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 2.1rem;
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
  gap: 10px;
  margin: 30px 0;
`;

const Feature = styled.span`
  background: #e0f2fe;
  color: #0369a1;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
`;

const BookingSection = styled.section`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  margin: 40px auto;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1e3a8a;
  margin-bottom: 16px;
  text-align: center;
`;

const CostNote = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #ca8a04;
  font-weight: 600;
  margin-bottom: 24px;
  background: #fef3c7;
  padding: 12px;
  border-radius: 8px;
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

const Row = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HalfGroup = styled.div`
  flex: 1;
  min-width: 200px;
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
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 14px;
  background: #0284c7;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0369a1;
  }
`;

const SuccessMessage = styled.p`
  font-size: 1.15rem;
  color: #059669;
  line-height: 1.7;
  text-align: center;
  padding: 20px;
  background: #f0fdf4;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
`;