"use client";
import React, { useState } from "react";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import ROUTES from "@/components/utils/ROUTES";

const AdminSidebar = () => {
  const sidebarItems = [
    //   {
    //     id: 1,
    //     title: "Dashboard",
    //     icon: "/images/sidebarIcons/dashboard.svg",
    //     route: ROUTES.DASHBOARD,
    //   },
    //   {
    //     id: 2,
    //     title: "Notifications",
    //     icon: "/images/sidebarIcons/notification.svg",
    //     route: "/notifications",
    //   },
    //   {
    //     id: 3,
    //     title: "User",
    //     icon: "/images/sidebarIcons/usersIcon.svg",
    //     submenu: [
    //       { title: "All Users", route: "/user/all" },
    //       { title: "Add User", route: "/user/add" },
    //     ],
    //   },
    //   {
    //     id: 4,
    //     title: "Flagged Posts",
    //     icon: "/images/sidebarIcons/flaggedpostIcon.svg",
    //     route: "/flagged-posts",
    //   },
    //   {
    //     id: 5,
    //     title: "Advertisements",
    //     icon: "/images/sidebarIcons/advertisment.svg",
    //     route: "/ads",
    //   },
    {
      id: 6,
      title: "Blogs",
      icon: "/images/sidebarIcons/blogIcon.svg",
      route: "/blogs",
    },
  ];

  const pathname = usePathname();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isActive = (route) => pathname === route;

  return (
    <StyledDrawer variant="permanent" anchor="left" open>
      <SidebarContainer>
        <TopSection>
          <LogoWrapper>
            <Logo src="/images/weesharelogo.svg" alt="Logo" />
          </LogoWrapper>
          <SearchBar placeholder="Search for..." />
          <NavList>
            {sidebarItems.map((item) => {
              const hasSubmenu = !!item.submenu;
              const isSectionActive =
                isActive(item.route) ||
                (hasSubmenu && item.submenu.some((sub) => isActive(sub.route)));

              return (
                <React.Fragment key={item.id}>
                  <NavItem
                    $isActive={isSectionActive}
                    onClick={() => hasSubmenu && toggleExpand(item.id)}
                  >
                    <ItemContent>
                      <Icon src={item.icon} alt={item.title} />
                      <span>{item.title}</span>
                    </ItemContent>
                    {hasSubmenu &&
                      (expanded[item.id] ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      ))}
                  </NavItem>

                  {hasSubmenu && expanded[item.id] && (
                    <Submenu>
                      {item.submenu.map((sub, index) => (
                        <Link key={index} href={sub.route} passHref>
                          <SubmenuItem isActive={isActive(sub.route)}>
                            {sub.title}
                          </SubmenuItem>
                        </Link>
                      ))}
                    </Submenu>
                  )}
                </React.Fragment>
              );
            })}
          </NavList>
        </TopSection>
        <LogoutButton>
          {/* <Icon src="/images/icons/logout.svg" alt="logout" /> */}
          Logout
        </LogoutButton>
      </SidebarContainer>
    </StyledDrawer>
  );
};

export default AdminSidebar;

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    background: linear-gradient(180deg, #141627 0%, #292944 100%);
    width: 260px;
    color: #fff;
    border-right: none;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const TopSection = styled.div``;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Logo = styled.img`
  max-width: 140px;
`;

const SearchBar = styled.input`
  width: 90%;
  margin: 0 auto 1rem;
  padding: 0.6rem 1rem;
  background: #1c1c2e;
  border: 1px solid #444;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;

  &::placeholder {
    color: #888;
  }
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled.div`
  background: ${({ $isActive }) =>
    $isActive ? "#1f103f" : "transparent"}; /* deep purple bg */
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#d0d0d0")};
  border: ${({ $isActive }) => ($isActive ? "1px solid #933FFE" : "none")};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ $isActive }) => ($isActive ? "#1f103f" : "#1a1a1f")};
  }
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const Submenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-top: 0.3rem;
  gap: 0.3rem;
`;

const SubmenuItem = styled.a`
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${({ isActive }) => (isActive ? "#fff" : "#aaa")};
  background: ${({ isActive }) => (isActive ? "#2c2c35" : "transparent")};
  transition: all 0.2s;
  &:hover {
    background: #2c2c35;
    color: #fff;
  }
`;

const LogoutButton = styled.button`
  margin: 1rem;
  padding: 0.75rem;
  background-color: #1c1c2e;
  color: #fff;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #292944;
  }
`;
