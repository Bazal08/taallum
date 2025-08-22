// "use client";
// import React from "react";
// import styled from "styled-components";
// import DescriptionSmall from "../templates/text/DescriptionSmall";

// const Footer = () => {
//   const footerItem = [
//     { title: "Contact Us" },
//     { title: "How It Works" },
//     { title: "Safety & Trust" },
//     { title: "Terms of Service" },
//     { title: "Privacy Policy" },
//   ];
//   return (
//     <Container>
//       <Wrapper>
//         <Icon src="/images/logo.png" />
//         <ListItem>
//           {footerItem.map((item, index) => (
//             <Item key={index}>
//               <DescriptionSmall textColor={"black"}>
//                 {item.title}
//               </DescriptionSmall>
//             </Item>
//           ))}
//         </ListItem>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Footer;

// const Container = styled.div`
//   display: flex;
//   /* justify-content: center; */
//   border-top: 1px solid #0066ff;
//   margin-top: 5rem;
// `;
// const Wrapper = styled.div`0000000
//   display: flex;
//   justify-content: space-between;
//   width: 85%;
//   align-items: center;
//   margin: 5rem;
//   @media (max-width: 600px) {
//     width: 100%;
//     margin: 3rem 1rem;
//     flex-direction: column;
//     /* align-items: flex-start; */
//     gap: 1rem;
//   }
// `;
// const Icon = styled.img`
//   width: 8rem;
// `;
// const ListItem = styled.div`
//   display: flex;
//   gap: 0.9rem;
//   flex-wrap: wrap;
//   /* background-color: red; */
//   @media (max-width: 600px) {
//     justify-content: center;
//     gap: 1rem;
//     align-items: center;
//   }
// `;
// const Item = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

"use client";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  const footerItems = [
    { title: "Home", key: "home", link: "/" },
    { title: "Salah Timings", key: "howWorks", link: "/#howWorks" },
    { title: "About" },
    { title: "Arabic Language", key: "", link: "/pages/arabiclanguage" },
    { title: "Quran Classes", key: "", link: "/pages/quranClass" },
    { title: "Blogs & News", key: "contact", link: "/pages/blog" },
    // { title: "Salah Timings", key: "contact", link: "#contact" },
    { title: "Seminars", key: "contact", link: "#contact" },
  ];

  return (
    <Container>
      <Wrapper>
        {/* Logo Section */}
        <LogoSection>
          <Logo src="/images/logo.png" alt="Ta'Allum Education Centre" />
          <LogoText>Teach • Learn • Grow</LogoText>
        </LogoSection>

        {/* Navigation Links */}
        <NavLinks>
          {footerItems.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.title}
            </Link>
          ))}
        </NavLinks>

        {/* Contact & Social Info */}
        <ContactSection>
          <Address>
            <strong>📍 Address:</strong>
            <br />
            178 Easterly Road, Leeds LS8 3AD
          </Address>

          <Email>
            <strong>✉️ Email:</strong>
            <br />
            TaAllumCentre@gmail.com
          </Email>

          <SocialIcons>
            <IconLink href="https://facebook.com/TaAllumEducationCentre">
              {/* <FacebookIcon /> @Ta'Allum Education Centre */}
            </IconLink>
            <IconLink href="https://instagram.com/taallumcentre">
              {/* <InstagramIcon /> @taallumcentre */}
            </IconLink>
          </SocialIcons>

          <QRCodeSection>
            <QRCodeWrapper>
              <QRCode
                src="/images/qrcode-registration.png"
                alt="Register for Quran Class"
              />
              <QRLabel>Scan to Register</QRLabel>
            </QRCodeWrapper>
            <QRCodeWrapper>
              <QRCode
                src="/images/qrcode-announcements.png"
                alt="Join Announcements Channel"
              />
              <QRLabel>Join Announcements</QRLabel>
            </QRCodeWrapper>
          </QRCodeSection>
        </ContactSection>
      </Wrapper>

      {/* Bottom Bar */}
      <BottomBar>
        <Copyright>
          © 2025 Ta’Allum Education Centre. All rights reserved.
        </Copyright>
      </BottomBar>
    </Container>
  );
};

export default Footer;

// Styled Components
const Container = styled.div`
  background-color: #f9f9f9;
  border-top: 4px solid #b3bac6ff;
  padding: 4rem 0 2rem;
  margin-top: 5rem;
`;

const Wrapper = styled.div`
  /* max-width: 1200px; */
  /* margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 3rem;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  } */
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const LogoSection = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 1rem;
`;

const LogoText = styled.p`
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const Link = styled.a`
  color: #6b7280;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: #8e9ab0;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Address = styled.div`
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
`;

const Email = styled.div`
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #333;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #6b7280;
  transition: color 0.3s ease;

  &:hover {
    color: #8e9ab0;
  }
`;

const QRCodeSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const QRCodeWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const QRCode = styled.img`
  width: 100px;
  height: 100px;
`;

const QRLabel = styled.span`
  font-size: 0.8rem;
  color: #555;
  margin-top: 0.5rem;
  display: block;
`;

const BottomBar = styled.div`
  background: linear-gradient(90deg, #6b7280, #8e9ab0);
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;
