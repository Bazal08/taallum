"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "@/redux/slice/blogSlice";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import DescriptionSmall from "@/components/templates/text/DescriptionSmall";
import HeaderLarge from "@/components/templates/text/HeaderLarge";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BlogCard = ({ title, image, description, date, onClick }) => {
  // Truncate description to 100 characters and add "..."
  const truncatedDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  const ImageURL = "http://localhost:8080/api/v1/blogsimage/";

  return (
    <CardContainer onClick={onClick}>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <DescriptionSmall style={{ minHeight: "0.4rem" }}>
          {truncatedDescription}
        </DescriptionSmall>
        <Span>{date}</Span>
      </CardContent>
    </CardContainer>
  );
};

const AdminBlog = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsPerPage = 9;

  // Fetch blogs on mount
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  const ImageURL = "http://localhost:8080/api/v1/blogsimage/";
  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogs.slice(indexOfFirstCard, indexOfLastCard);

  const handleBlogClick = (blog) => {
    router.push(`/admin/blogs/${blog.id}`);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <AddBlog>
        <AddBlogButton onClick={() => router.push("/admin/add-blog")}>
          Add New Blog
        </AddBlogButton>
      </AddBlog>
      <Container flexDirection="column" gap="2rem">
        <Wrapper flexDirection="column" gap="2rem">
          <HeaderLarge>Recent blog posts</HeaderLarge>
          {blogs.length > 0 && (
            <LatestCard onClick={() => handleBlogClick(blogs[0])}>
              <CardImage
                src={
                  blogs[0].images?.image1?.fileName
                    ? `${ImageURL}${blogs[0].images.image1.fileName}`
                    : "/images/images/blog.png"
                }
                height={200}
                width={400}
              />
              <CardDescription>
                <Detail>
                  <HeaderLarge>{blogs[0].name}</HeaderLarge>
                  <DescriptionSmall>
                    {blogs[0].metaDescription || "No description available"}
                  </DescriptionSmall>
                </Detail>
                <Span>
                  {new Date(blogs[0].createdAt).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Span>
              </CardDescription>
              <ArrowIcon>
                <Icon src="/images/icons/Icons/arrow-up-right.svg" />
              </ArrowIcon>
            </LatestCard>
          )}
          <CardSection>
            <HeaderLarge>All blog posts</HeaderLarge>
            <CardWrapper>
              {loading ? (
                Array.from({ length: 2 }).map((_, index) => (
                  <Cards key={index}>
                    <BlogCard
                      title="Loading title..."
                      image="/images/images/blog.png"
                      description="Loading description..."
                      date="Loading date..."
                    />
                  </Cards>
                ))
              ) : error ? (
                <ErrorText>
                  {error.error}: {error.details}
                </ErrorText>
              ) : blogs.length === 0 ? (
                <ErrorText>No blogs found</ErrorText>
              ) : (
                currentCards.map((blog) => (
                  <Cards key={blog.id} onClick={() => handleBlogClick(blog)}>
                    <BlogCard
                      title={blog.name}
                      image={
                        blog.images?.image1?.fileName
                          ? `${ImageURL}${blog.images.image1.fileName}`
                          : "/images/images/blog.png"
                      }
                      description={
                        blog.metaDescription || "No description available"
                      }
                      date={new Date(blog.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    />
                  </Cards>
                ))
              )}
            </CardWrapper>
          </CardSection>
          <PaginationSection alignItem="center" justifyContent="space-between">
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
        </Wrapper>
      </Container>
    </>
  );
};

// Styled components (unchanged from your code, included for completeness)
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

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardWrapper = styled(FlexContainer)`
  cursor: pointer;
  gap: 2rem;
  flex-wrap: wrap;
`;

const AddBlog = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const AddBlogButton = styled.button`
  background-color: blue;
  cursor: pointer;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  border: none;
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
  font-size: 0.9rem;
  color: black;
`;

const ErrorText = styled.p`
  color: #ff4d4f;
  font-size: 0.9rem;
  text-align: center;
`;

export default AdminBlog;
