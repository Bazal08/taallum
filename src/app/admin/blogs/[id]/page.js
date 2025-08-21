"use client";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import HeaderLarge from "@/components/templates/text/HeaderLarge";
import DescriptionSmall from "@/components/templates/text/DescriptionSmall";
import { getBlogById } from "@/redux/slice/blogSlice";

const AdminBlogDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentBlog, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    if (id) {
      dispatch(getBlogById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <LoadingText>Loading...</LoadingText>;
  }

  if (error) {
    return (
      <ErrorText>
        {error.error}: {error.details}
      </ErrorText>
    );
  }

  if (!currentBlog) {
    return <ErrorText>No blog found.</ErrorText>;
  }

  // Truncate metaDescription to 100 characters
  const truncatedDescription =
    currentBlog.metaDescription.length > 100
      ? `${currentBlog.metaDescription.slice(0, 100)}...`
      : currentBlog.metaDescription;

  const ImageURL = "http://localhost:8080/api/v1/blogsimage/";

  return (
    <Container>
      <BackButton onClick={() => router.push("/admin")}>
        <IMG src="/images/icons/back.png" alt="Back" />
        Back to Blogs
      </BackButton>
      <DetailsContent>
        <HeaderLarge>{currentBlog.name}</HeaderLarge>
        <DescriptionSmall style={{ minHeight: "0.4rem" }}>
          {truncatedDescription}
        </DescriptionSmall>
        {currentBlog.images?.image1?.fileName && (
          <CardImage
            src={`${ImageURL}${currentBlog.images.image1.fileName}`}
            alt={currentBlog.name}
          />
        )}
        {currentBlog.content?.info?.map((info, index) => (
          <ContentSection key={index}>
            {currentBlog.content.headings[index] && (
              <ContentHeading>
                {currentBlog.content.headings[index]}
              </ContentHeading>
            )}
            <ContentText>{info}</ContentText>
          </ContentSection>
        ))}
        <DateText>
          Date:{" "}
          {new Date(currentBlog.createdAt).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </DateText>
      </DetailsContent>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardImage = styled.img`
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContentHeading = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: black;
`;

const ContentText = styled.p`
  line-height: 1.6;
  color: black;
`;

const DateText = styled.p`
  font-size: 0.9rem;
  color: black;
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
  font-size: 1rem;
`;

const IMG = styled.img`
  width: 1.5rem;
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: black;
`;

const ErrorText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #ff4d4f;
`;

export default AdminBlogDetails;
