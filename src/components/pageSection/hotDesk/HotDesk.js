"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HotDesk = () => {
  const [service, setService] = useState("hot-desk"); // 'hot-desk' or 'conference'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    startTime: "09:00",
    duration: "1",
    purpose: "Quran Recitation",
    specialRequest: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Reset form when service changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      duration: "1",
      startTime: "09:00",
    }));
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.startTime) newErrors.startTime = "Start time is required";
    if (!formData.duration) newErrors.duration = "Duration is required";

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    // Conference room: only Mon-Fri
    if (service === "conference") {
      const selectedDate = new Date(formData.date);
      const dayOfWeek = selectedDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        newErrors.date = "Conference room is only available Mon-Fri";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log(
      `${
        service === "hot-desk" ? "Hot Desk" : "Conference Room"
      } Booking Request:`,
      formData
    );
    setIsSubmitted(true);
  };

  // Calculate end time
  const getEndTime = () => {
    const start = formData.startTime;
    const duration = parseInt(formData.duration, 10);
    const [hours, mins] = start.split(":").map(Number);
    const end = new Date();
    end.setHours(hours, mins);
    end.setMinutes(end.getMinutes() + duration * 60);
    return end.toTimeString().slice(0, 5);
  };

  // Calculate total cost
  const getTotalCost = () => {
    if (service === "hot-desk") {
      const duration = parseInt(formData.duration, 10);
      return duration >= 8 ? 10 : duration * 5;
    }
    return 40; // Conference room flat rate
  };

  return (
    <Container>
      <Wrapper>
        <Title>🪑 Quiet Spaces for Learning & Reflection</Title>
        <Subtitle>
          Whether you're studying the Quran, memorizing Arabic, or leading a
          group session, we offer peaceful, respectful spaces designed with
          Islamic values in mind.
        </Subtitle>

        {/* Service Selection */}
        <ServiceTabs>
          <ServiceTab
            active={service === "hot-desk"}
            onClick={() => setService("hot-desk")}
          >
            Hot Desk (Individual)
          </ServiceTab>
          <ServiceTab
            active={service === "conference"}
            onClick={() => setService("conference")}
          >
            Conference Room (Group)
          </ServiceTab>
        </ServiceTabs>

        {/* Hot Desk Info */}
        {service === "hot-desk" && (
          <InfoBox>
            <h3>📚 Hot Desk – Private Study Space</h3>
            <ul>
              <li>
                🕒 Open daily: <strong>09:00 – 16:00</strong>
              </li>
              <li>🕌 Breaks for Salah in Jamaat (please check prayer times)</li>
              <li>
                💰 Pricing: <strong>£5/hour</strong> or <strong>£10/day</strong>{" "}
                (8+ hours)
              </li>
              <li>☕ Unlimited tea, coffee & water</li>
              <li>📵 Distraction-free, phone-free environment</li>
            </ul>
          </InfoBox>
        )}

        {/* Conference Room Info */}
        {service === "conference" && (
          <InfoBox>
            <h3>🎯 Conference Room – Group Learning Space</h3>
            <ul>
              <li>
                📅 Available: <strong>Monday to Friday only</strong>
              </li>
              <li>
                🕒 Hours: <strong>09:00 – 16:00</strong>
              </li>
              <li>👥 Seating for up to 50 people with desks</li>
              <li>
                💰 Flat rate: <strong>£40 per day</strong>
              </li>
              <li>🚻 WC facilities & kitchenette</li>
              <li>☕ Unlimited tea & coffee provided</li>
            </ul>
          </InfoBox>
        )}

        <BookingSection>
          <SectionTitle>Book Your Space</SectionTitle>
          <EthicsNote>
            🌿 All bookings are made in accordance with Islamic ethics. Please
            be respectful of others, maintain modesty, and avoid any un-Islamic
            content.
          </EthicsNote>

          {isSubmitted ? (
            <SuccessMessage>
              JazākAllāhu Khayran, <strong>{formData.name}</strong>! Your
              booking for the{" "}
              <strong>
                {service === "hot-desk" ? "Hot Desk" : "Conference Room"}
              </strong>{" "}
              on <strong>{formData.date}</strong> from{" "}
              <strong>{formData.startTime}</strong> to{" "}
              <strong>{getEndTime()}</strong> has been confirmed.
              <br />
              <br />
              <strong>Total: £{getTotalCost()}</strong>
              <br />
              We'll email you a receipt and access details shortly.
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label>Name *</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
                {errors.name && <Error>{errors.name}</Error>}
              </InputGroup>

              <InputGroup>
                <Label>Email *</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
                {errors.email && <Error>{errors.email}</Error>}
              </InputGroup>

              <InputGroup>
                <Label>Date *</Label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min="2025-08-01"
                />
                {errors.date && <Error>{errors.date}</Error>}
              </InputGroup>

              <Row>
                <HalfGroup>
                  <Label>Start Time *</Label>
                  <Select
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                  >
                    {[
                      "09:00",
                      "10:00",
                      "11:00",
                      "12:00",
                      "13:00",
                      "14:00",
                      "15:00",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Select>
                  {errors.startTime && <Error>{errors.startTime}</Error>}
                </HalfGroup>

                <HalfGroup>
                  <Label>Duration (Hours) *</Label>
                  <Select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((hr) => (
                      <option key={hr} value={hr}>
                        {hr} Hour{hr > 1 ? "s" : ""}
                      </option>
                    ))}
                  </Select>
                  {errors.duration && <Error>{errors.duration}</Error>}
                </HalfGroup>
              </Row>

              {service === "hot-desk" && (
                <InputGroup>
                  <Label>Purpose of Visit</Label>
                  <Select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                  >
                    <option value="Quran Recitation">
                      Quran Recitation (Tajweed)
                    </option>
                    <option value="Hifz (Memorization)">
                      Hifz (Memorization)
                    </option>
                    <option value="Arabic Study">Arabic Language Study</option>
                    <option value="Personal Reflection">
                      Personal Reflection / Dhikr
                    </option>
                    <option value="Other">Other</option>
                  </Select>
                </InputGroup>
              )}

              <InputGroup>
                <Label>Special Requests</Label>
                <Textarea
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleChange}
                  placeholder="e.g., Need a whiteboard, prayer mat, or accessibility support"
                  rows="3"
                />
              </InputGroup>

              <CostSummary>
                <strong>Estimated Cost: £{getTotalCost()}</strong>
              </CostSummary>

              <SubmitButton type="submit">Confirm Booking</SubmitButton>
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
  font-family: "Segoe UI", sans-serif;
  color: #333;
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  color: #5b6475;
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

const ServiceTabs = styled.div`
  display: flex;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 20px;
  justify-content: center;
  gap: 2px;
`;

const ServiceTab = styled.button`
  background: ${(props) =>
    props.active ? "linear-gradient(90deg, #6b7280, #8e9ab0)" : "#f3f4f6"};
  color: ${(props) => (props.active ? "white" : "#4b5563")};
  padding: 12px 24px;
  border: none;
  border-radius: 8px 8px 0 0;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.active
        ? "linear-gradient(90deg, #5b6475, #7e8ba0)" /* darker hover */
        : "#e5e7eb"};
  }
`;

const InfoBox = styled.div`
  background: #b2bbc9ff;
  border: 1px solid #bae6fd;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
  font-size: 0.95rem;

  h3 {
    margin: 0 0 12px 0;
    color: #0369a1;
  }

  ul {
    margin: 0;
    padding-left: 20px;
    color: #1f2937;
    line-height: 1.6;
  }
`;

const BookingSection = styled.section`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #5b6475;
  margin-bottom: 16px;
  text-align: center;
`;

const EthicsNote = styled.p`
  text-align: center;
  font-size: 0.95rem;
  color: #1f2937;
  background: #fefce8;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 24px;
  font-style: italic;
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
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #1f2937;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #d1d5db;
  background-color: white;
  color: black;
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
  color: black;
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
  background-color: white;
  color: black;
  font-size: 1rem;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const Error = styled.span`
  color: #e53e3e;
  font-size: 0.85rem;
  margin-top: -4px;
`;

const CostSummary = styled.div`
  font-size: 1.1rem;
  color: #2563eb;
  font-weight: 600;
  text-align: right;
`;

const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 14px;
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
  background: linear-gradient(90deg, #8e9ab0, #6b7280);
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
