"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
// import LoadingCircular from "@/components/templates/loading/LoadingCircular";

export default function AdminLayout({ children }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [childrenLoaded, setChildrenLoaded] = useState(true);
  const [sideBarLoaded, setSideBarLoaded] = useState(true);

  useEffect(() => {
    if (childrenLoaded && sideBarLoaded) {
      setShowLoader(false);
    }
  }, [childrenLoaded, sideBarLoaded]);

  return (
    <>
      {/* {showLoader && <LoadingCircular />} */}
      <DashboardContainer>
        <NavbarContainer>
          <AdminNavbar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
        </NavbarContainer>
        <SideBarContainer isOpen={openSideBar}>
          <AdminSidebar
            openSideBar={openSideBar}
            setOpenSideBar={setOpenSideBar}
            onLoad={() => setSideBarLoaded(true)}
          />
        </SideBarContainer>
        <ChildrenContainer>
          {React.cloneElement(children, {
            onLoad: () => setChildrenLoaded(true),
          })}
        </ChildrenContainer>
      </DashboardContainer>
    </>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
    margin: 0.4rem 1rem;
  }
`;

// Use forwardRef and filter props to avoid passing `isOpen` to the div element
const SideBarContainer = styled(
  React.forwardRef(({ isOpen, ...props }, ref) => <div ref={ref} {...props} />)
)`
  width: 22rem;
  transition: transform 0.3s ease-in-out;
  ${(props) =>
    props.isOpen &&
    `
    display: block;
  `}

  @media (max-width: 1100px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

const ChildrenContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem 1rem 1rem 1rem;

  @media (max-width: 1100px) {
    margin: 1rem 0;
    width: 100%;
  }
  @media (min-width: 1400px) {
    margin: 1rem 2rem 1rem 3rem;
  }
`;

const NavbarContainer = styled.div`
  display: none;
  @media (max-width: 1100px) {
    margin-right: 1rem;
    display: block;
    width: 100%;
  }
`;