"use client";
import React from "react";
import styled from "styled-components";

const ArabicLanguage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Arabic Language & Quran Learning Programs</Title>
        <Subtitle>
          Structured, Online Classes for All Ages – Learn with Qualified
          Teachers
        </Subtitle>

        <ProgramsSection>
          <SectionTitle>Our Programs</SectionTitle>
          <ProgramsGrid>
            {/* Program 1 */}
            <Card>
              <CardIcon>📖</CardIcon>
              <CardTitle>Quran Recitation (Tajweed)</CardTitle>
              <CardDesc>
                Learn to recite the Holy Quran with correct pronunciation and
                rules of Tajweed. Suitable for beginners and intermediate
                learners. One-on-one classes available.
              </CardDesc>
              <CardLevel>Levels: Beginner to Advanced</CardLevel>
            </Card>

            {/* Program 2 */}
            <Card>
              <CardIcon>🧠</CardIcon>
              <CardTitle>Quran Memorization (Hifz)</CardTitle>
              <CardDesc>
                Join our structured Hifz program with daily revision, weekly
                assessments, and personalized tracking. Available for children
                and adults.
              </CardDesc>
              <CardLevel>Includes: Juz' Amma, Full 30 Juz'</CardLevel>
            </Card>

            {/* Program 3 */}
            <Card>
              <CardIcon>🔤</CardIcon>
              <CardTitle>Classical Arabic Language</CardTitle>
              <CardDesc>
                Master the Arabic of the Quran through Nahw (grammar), Sarf
                (morphology), and vocabulary. Understand the meaning behind the
                verses.
              </CardDesc>
              <CardLevel>Levels: A1 to C1 (CEFR-Aligned)</CardLevel>
            </Card>

            {/* Program 4 */}
            <Card>
              <CardIcon>🔍</CardIcon>
              <CardTitle>Tafsir & Islamic Studies</CardTitle>
              <CardDesc>
                Deepen your understanding of the Quran’s meanings, context, and
                lessons. Weekly group sessions for teens and adults.
              </CardDesc>
              <CardLevel>Topics: Surah Studies, Aqeedah, Seerah</CardLevel>
            </Card>
          </ProgramsGrid>
        </ProgramsSection>

        <FeaturesSection>
          {/* <FeatureItem>✅ Certified Male & Female Instructors</FeatureItem> */}
          <FeatureItem>✅ 1-on-1 or Group Classes</FeatureItem>
          <FeatureItem>
            ✅ Flexible Scheduling (Morning, Evening, Weekends)
          </FeatureItem>
          <FeatureItem>✅ Online via Zoom or In-Person</FeatureItem>
          <FeatureItem>✅ Free Trial Class Available</FeatureItem>
        </FeaturesSection>

        {/* <CTAButton href="/register">Book Your Free Trial Class</CTAButton> */}
      </Wrapper>
    </Container>
  );
};

export default ArabicLanguage;

// Styled Components
const Container = styled.div`
  width: 100%;
  background: #f9f9f9;
  padding: 60px 20px;
  min-height: 100vh;
  font-family: "Segoe UI", Arial, sans-serif;
`;

const Wrapper = styled.div`
  max-width: 1200px;
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
  color: #444;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ProgramsSection = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #8e9ab0;
  margin-bottom: 30px;
`;

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 20px;
`;

const Card = styled.div`
  /* background: white; */
  background: #8e9ab0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const CardIcon = styled.span`
  font-size: 2.5rem;
  margin-bottom: 16px;
  display: block;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #1a3a5f;
  margin-bottom: 12px;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.6;
  margin-bottom: 14px;
`;

const CardLevel = styled.small`
  font-size: 0.9rem;
  color: #2b6cb0;
  font-weight: 500;
`;

const FeaturesSection = styled.div`
  background: #c1c8cfff;
  padding: 3.5rem;
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1rem;
  color: #2c3c5a;
`;

const FeatureItem = styled.span`
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  color: #d0d9e2ff;
  padding: 8px 14px;
  border-radius: 20px;
  margin-top: 0.4rem;
  font-size: 0.95rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #2b6cb0;
  color: white;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: #1a4b8c;
    cursor: pointer;
  }
`;
