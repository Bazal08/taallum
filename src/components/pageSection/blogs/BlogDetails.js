// import React from "react";
// import styled from "styled-components";
// import ButtonWithIcon from "@/components/templates/button/ButtonWithIcon";
// import Footer from "@/components/shared/Footer";
// import Navbar from "@/components/shared/Navbar";
// import { useRouter } from "next/navigation";
// import HeaderLarge from "@/components/templates/text/HeaderLarge";
// import { Span } from "next/dist/trace";
// const BlogDetails = ({ showDetails, selectedCard }) => {
//   const router = useRouter();
//   return (
//     // <Container showDetails={showDetails}>
//     <>
//       <HeaderSection>
//         <Navbar />
//       </HeaderSection>
//       <Wrapper>
//         <ButtonSection>
//           <ButtonWithIcon
//             handleClick={() => router.back()}
//             src={"/images/icons/Icons/ArrowIcon.svg"}
//             bgColor={"transparent"}
//             padding={"1rem 0rem"}
//             fontSize={"1.125rem"}
//             >
//             Back
//           </ButtonWithIcon>
//         </ButtonSection>
//         <DetailSection>
//           <DescriptionWithIcon>
//             <CardDescription>
//               <Detail>
//                 <HeaderLarge>{selectedCard.title}</HeaderLarge>
//                 <ImageSection>
//                   <CardImage
//                     src={
//                         selectedCard
//                         ? selectedCard.image
//                         : "/images/images/blog.png"
//                     }
//                     />
//                 </ImageSection>
//                 <DecriptionText
//                   dangerouslySetInnerHTML={{
//                       __html: selectedCard.content || "testing",
//                     }}
//                     />
//               </Detail>
//               <Span smSize={"0.75rem"} fontSize={"1rem"}>
//                 Sunday , 1 Jan 2024
//               </Span>
//             </CardDescription>
//             {/* <ArrowIcon>
//               <Icon src={"/images/icons/Icons/arrow-up-right.svg"} />
//               </ArrowIcon> */}
//           </DescriptionWithIcon>
//           {/* <ImageSection>
//             <CardImage src={selectedCard.img} />
//             </ImageSection> */}
//         </DetailSection>
//         <FooterSection>
//           <Footer />
//         </FooterSection>
//       </Wrapper>
//       </>
//     // </Container>
//   );
// };

// export default BlogDetails;

// const HeaderSection = styled.div`
//   @media (max-width: 600px) {
//     padding: 2rem;
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 4rem 2rem 0rem 2rem;
//   @media (max-width: 600px) {
//     padding: 1rem;
//   }
//   @media (min-width: 1440px) {
//     padding: 4rem 0rem 0rem 0rem;
//   }
// `;

// const ButtonSection = styled.div`
//   margin-top: 3rem;
//   @media (max-width: 600px) {
//     margin-top: 1rem;
//   }
// `;

// const DetailSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const DescriptionWithIcon = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const CardDescription = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   width: 100%;
// `;

// const Detail = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const ArrowIcon = styled.div``;

// const Icon = styled.img``;

// const ImageSection = styled.div`
//   background-color: var(--bgGrayColor);
//   display: flex;
//   height: 30rem;
//   width: 100%;
//   justify-content: center;
//   border-radius: 2rem;
//   object-fit: cover;
//   @media (max-width: 600px) {
//     border-radius: 2rem;
//   }
// `;

// const CardImage = styled.img`
//   width: 100%;
//   object-fit: cover;
//   border-radius: 2rem;
//   @media (max-width: 600px) {
//     width: 100%;
//   }
// `;

// const FooterSection = styled.div`
//   padding-top: 5rem;
// `;

// const DecriptionText = styled.p`
//   & p {
//     font-size: 0.875rem;
//   }
//   & li {
//     font-size: 0.875rem;
//   }
//   & h2 {
//     margin: 1rem 0;
//   }
//   & h3 {
//     margin: 1rem 0;
//   }
//   & ul {
//     margin-left: 1rem;
//   }
//   & ol {
//     margin-left: 1rem;
//     margin-top: 0.5rem;
//   }
// `;
