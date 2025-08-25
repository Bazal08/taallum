"use client";
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <HeroSection>
        <HeroTitle>About Ta’Allum Education Centre</HeroTitle>
        <HeroSubtitle>
          A Place of Learning, Worship, and Community Growth in the Heart of Leeds
        </HeroSubtitle>
      </HeroSection>

      <Wrapper>
        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <Text>
            At <strong>Ta’Allum Education Centre</strong>, our mission is to provide accessible, high-quality Islamic education rooted in the Quran and Sunnah. 
            We strive to nurture a generation of confident, knowledgeable, and compassionate Muslims through structured learning, spiritual development, and community engagement.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Our Vision</SectionTitle>
          <Text>
            To be a leading Islamic educational hub in Yorkshire, where individuals of all ages can deepen their connection with Allah (SWT), 
            master the Quran and Arabic language, and contribute positively to society.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Our Services</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>📖</ServiceIcon>
              <ServiceTitle>Quran Classes</ServiceTitle>
              <ServiceDesc>
                Learn Tajweed, Hifz (memorization), and Tafsir with qualified male and female teachers. One-on-one and group sessions available.
              </ServiceDesc>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🔤</ServiceIcon>
              <ServiceTitle>Arabic Language</ServiceTitle>
              <ServiceDesc>
                Master Classical Arabic to understand the Quran. Courses for beginners to advanced learners, focusing on grammar, vocabulary, and conversation.
              </ServiceDesc>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>📚</ServiceIcon>
              <ServiceTitle>Hot Desk</ServiceTitle>
              <ServiceDesc>
                Book a quiet, private workspace for Quran recitation, study, or reflection. Peaceful environment with minimal distractions.
              </ServiceDesc>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🎓</ServiceIcon>
              <ServiceTitle>Seminars & Workshops</ServiceTitle>
              <ServiceDesc>
                Join our monthly seminars on Islamic studies, family life, youth development, and spirituality. Open to all members of the community.
              </ServiceDesc>
            </ServiceCard>
          </ServicesGrid>
        </Section>

        {/* <Section>
          <SectionTitle>Summer Prayer Guidance (Fatwa)</SectionTitle>
          <FatwaBox>
            <FatwaTitle>🌙 Summer Prayer Adjustment (11 May – 16 August 2025)</FatwaTitle>
            <FatwaText>
              During the summer months, the time between Maghrib and Fajr is very short, making it difficult to pray Isha at its usual time.
              As advised by the scholars:
            </FatwaText>
            <FatwaList>
              <li>
                <strong>Isha</strong> may be combined with <strong>Maghrib</strong> or prayed anytime before <strong>12:40 AM</strong>.
              </li>
              <li>
                <strong>Fajr</strong> should not be prayed before <strong>1:24 AM</strong>.
              </li>
            </FatwaList>
            <Note>
              This ruling is based on the principle of ease and the natural signs of Fajr. Regular timings resume from 17 August 2025.
            </Note>
          </FatwaBox>
        </Section> */}

        <Section>
          <SectionTitle>Our Community</SectionTitle>
          <Text>
            We serve a diverse Muslim community in Leeds and surrounding areas. Our doors are open to everyone – new Muslims, youth, families, and seniors.
            We host weekly Jumu’ah prayers with Khutbah at <strong>1:00 PM</strong>, community iftars in Ramadan, and outreach programs throughout the year.
          </Text>
          <Text>
            Follow us on WhatsApp for updates on classes, events, and prayer times.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Contact & Location</SectionTitle>
          <Text>
            <strong>📍 Address:</strong><br />
            178 Easterly Road, Leeds LS8 3AD, UK
          </Text>
          <Text>
            <strong>📧 Email:</strong><br />
            TaAllumCentre@gmail.com
          </Text>
          <Text>
            <strong>📱 WhatsApp:</strong> Join our channel for real-time updates
          </Text>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default About;

// Styled Components
const Container = styled.div`
  width: 100%;
  background: #f9f9f9;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  color: white;
  padding: 80px 20px;
  text-align: center;
  margin-bottom: 40px;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  margin: 0 0 16px;
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1a3a5f;
  margin-bottom: 20px;
  border-bottom: 2px solid #6b7280;
  padding-bottom: 8px;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  max-width: 900px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 20px;
`;

const ServiceCard = styled.div`
  /* background: white; */
    background: linear-gradient(90deg, #6b7280, #8e9ab0);

  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const ServiceIcon = styled.span`
  font-size: 2.5rem;
  margin-bottom: 12px;
  display: block;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  color: #1a3a5f;
  /* color: white; */
  margin-bottom: 10px;
`;

const ServiceDesc = styled.p`
  font-size: 1rem;
  /* color: #555; */
  color: white;
  line-height: 1.6;
`;

const FatwaBox = styled.div`
  background: #fff8e6;
  border: 1px solid #ffd966;
  border-radius: 12px;
  padding: 24px;
  max-width: 900px;
  margin: 20px 0;
`;

const FatwaTitle = styled.h3`
  font-size: 1.4rem;
  color: #b36000;
  margin-top: 0;
`;

const FatwaText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 16px;
`;

const FatwaList = styled.ul`
  margin: 16px 0;
  list-style: none;
  padding-left: 0;

  li {
    margin: 8px 0;
    padding-left: 20px;
    position: relative;
    &:before {
      content: "🔹";
      position: absolute;
      left: 0;
      color: #0066ff;
    }
  }
`;

const Note = styled.p`
  font-size: 0.95rem;
  color: #666;
  font-style: italic;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed #ccc;
`;