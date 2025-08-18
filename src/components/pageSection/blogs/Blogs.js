"use client";
// import Footer from "@/components/shared/Footer";
// import Navbar from "@/components/shared/Navbar";
// import BlogCard from "@/components/templates/card/BlogCard";
// import BlogDetails from "./BlogDetails";
import DescriptionSmall from "@/components/templates/text/DescriptionSmall";
import HeaderLarge from "@/components/templates/text/HeaderLarge";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
import styled from "styled-components";

// Dummy blog data
const dummyBlogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    image: "/images/pillarsofIslam/6.png",
    description: "Exploring the latest trends in web development for 2025.",
    date: "Sunday, 1 Jan 2023",
    content: "Detailed content about web development trends...",
  },
  {
    id: 2,
    title: "AI Revolution in Software",
    image: "/images/pillarsofIslam/6.png",
    description: "How AI is transforming software development processes.",
    date: "Monday, 2 Jan 2023",
    content: "Detailed content about AI in software...",
  },
  {
    id: 3,
    title: "Cloud Computing Essentials",
    image: "/images/pillarsofIslam/6.png",
    description: "Understanding the fundamentals of cloud computing.",
    date: "Tuesday, 3 Jan 2023",
    content: "Detailed content about cloud computing...",
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices",
    image: "/images/pillarsofIslam/6.png",
    description: "Protecting your applications in the digital age.",
    date: "Wednesday, 4 Jan 2023",
    content: "Detailed content about cybersecurity...",
  },
  {
    id: 5,
    title: "Mobile App Development Trends",
    image: "/images/pillarsofIslam/6.png",
    description: "What's new in mobile app development for 2025.",
    date: "Thursday, 5 Jan 2023",
    content: "Detailed content about mobile apps...",
  },
];

// BlogCard component
const BlogCard = ({ title, image }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <DescriptionSmall>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </DescriptionSmall>
        {/* <Span fontSize="0.9rem">Sunday, 1 Jan 2023</Span> */}
      </CardContent>
    </CardContainer>
  );
};

// BlogDetails component
const BlogDetails = ({ showDetails, setShowDetails, selectedCard }) => {
  return (
    <DetailsContainer>
      <BackButton onClick={() => setShowDetails(false)}>
        <IMG src="/images/icons/Icons/arrow-left.svg" /> Back
      </BackButton>
      <DetailsContent>
        <HeaderLarge>{selectedCard?.title}</HeaderLarge>
        <DetailImage src={selectedCard?.image} alt={selectedCard?.title} />
        <DescriptionSmall>{selectedCard?.description}</DescriptionSmall>
        <Span fontSize="0.9rem">{selectedCard?.date}</Span>
        <ContentText>{selectedCard?.content}</ContentText>
      </DetailsContent>
    </DetailsContainer>
  );
};

// Navbar component
// const Navbar = () => {
//   return (
//     <NavContainer>
//       <NavLogo>Logo</NavLogo>
//       <NavLinks>
//         <NavLink>Home</NavLink>
//         <NavLink>Blogs</NavLink>
//         <NavLink>About</NavLink>
//         <NavLink>Contact</NavLink>
//       </NavLinks>
//     </NavContainer>
//   );
// };

// Footer component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 Your Company. All rights reserved.</FooterText>
      <FooterLinks>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Terms of Service</FooterLink>
        <FooterLink>Contact Us</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

const UserBlog = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsPerPage = 9;

  const totalPages = Math.ceil(dummyBlogs.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = dummyBlogs.slice(indexOfFirstCard, indexOfLastCard);

  const handleBlogClick = (id) => {
    const selectedBlog = dummyBlogs.find((blog) => blog.id === id);
    setSelectedCard(selectedBlog);
    setShowDetails(true);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {showDetails ? (
        <DetailPage>
          <BlogDetails
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            selectedCard={selectedCard}
          />
        </DetailPage>
      ) : (
        <Container flexDirection="column" gap="2rem">
          {/* <HeaderSection>
            <Navbar />
          </HeaderSection> */}
          <Wrapper flexDirection="column" gap="2rem">
            <HeaderLarge>Recent blog posts</HeaderLarge>
            <LatestCard
              gap="1rem"
              onClick={() => handleBlogClick(dummyBlogs[0].id)}
            >
              <CardImage src={dummyBlogs[0].image} height={200} width={400} />
              <CardDescription>
                <Detail>
                  <HeaderLarge>{dummyBlogs[0].title}</HeaderLarge>
                  <DescriptionSmall>
                    {dummyBlogs[0].description}
                  </DescriptionSmall>
                </Detail>
                <Span>{dummyBlogs[0].date}</Span>
              </CardDescription>
              <ArrowIcon>
                <Icon src={"/images/icons/Icons/arrow-up-right.svg"} />
              </ArrowIcon>
            </LatestCard>
            <CardSection flexDirection="column" gap="2rem">
              <HeaderLarge>All blog posts</HeaderLarge>
              <CardWrapper>
                {isLoading
                  ? Array.from({ length: 2 }).map((_, index) => (
                      <Cards key={index}>
                        <BlogCard
                          title="Loading title..."
                          image="/images/images/blog.png"
                        />
                      </Cards>
                    ))
                  : currentCards.map((item, index) => (
                      <Cards
                        key={index}
                        onClick={() => handleBlogClick(item.id)}
                      >
                        <BlogCard title={item.title} image={item.image} />
                      </Cards>
                    ))}
              </CardWrapper>
            </CardSection>
            <PaginationSection
              alignItem="center"
              justifyContent="space-between"
            >
              <PageButton
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <IMG src="/images/icons/Icons/arrow-left.svg" />
                Previous
              </PageButton>
              <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  shape="rounded"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "var(--lighBgColor)",
                    },
                    "& .MuiPaginationItem-page.Mui-selected": {
                      backgroundColor: "var(--bgRedColor)",
                      color: "white",
                    },
                    "& .MuiPaginationItem-icon.MuiSvgIcon-root": {
                      width: "1.5em",
                      height: "1.5em",
                    },
                  }}
                />
              </Stack>
              <PageButton
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
                <IMG src="/images/icons/Icons/arrow-right.svg" />
              </PageButton>
            </PaginationSection>
            <FooterSection>
              <Footer />
            </FooterSection>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default UserBlog;

// Styled components
const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap || ""};
  align-items: ${(props) => props.alignItem || ""};
`;

const DetailPage = styled(FlexContainer)``;

const Container = styled(FlexContainer)`
  @media (min-width: 1440px) {
    max-width: 1400px;
    margin: auto;
    width: 100%;
  }
`;

const HeaderSection = styled.div`
  padding: 0rem 2rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Wrapper = styled(FlexContainer)`
  margin: 5rem 2rem 0rem 2rem;
  @media (max-width: 600px) {
    margin: 1rem;
  }
  @media (min-width: 1440px) {
    margin: 5rem 0rem 0rem 0rem;
  }
`;

const LatestCard = styled(FlexContainer)`
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  border-radius: 1rem;
  height: 18rem;
  width: 100%;
  object-fit: cover;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Icon = styled.img`
  width: 2rem;
  @media (max-width: 900px) {
    display: none;
  }
`;

const ArrowIcon = styled.div``;

const CardSection = styled(FlexContainer)``;

const CardWrapper = styled(FlexContainer)`
  cursor: pointer;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Cards = styled(FlexContainer)`
  width: calc(33.5% - 1.5rem);
  @media (max-width: 768px) {
    width: calc(50% - 1rem);
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const PaginationSection = styled(FlexContainer)`
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const PageButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const IMG = styled.img``;

const FooterSection = styled.div``;

// BlogCard styles
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  overflow: hidden;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: black;
`;
const Span = styled.span`
  font-size: 1.2rem;
  margin: 0;
  color: black;
`;

// BlogDetails styles
const DetailsContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DetailImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--lighBgColor);
  margin-bottom: 1rem;
`;

const ContentText = styled.p`
  line-height: 1.6;
`;

// Navbar styles
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const NavLogo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: var(--lighBgColor);
  text-decoration: none;
  cursor: pointer;
`;

// Footer styles
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  margin-top: 2rem;
  border-top: 1px solid var(--lighBgColor);
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: var(--lighBgColor);
  text-decoration: none;
  cursor: pointer;
`;
