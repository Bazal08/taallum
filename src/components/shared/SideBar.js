import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import styled from "styled-components";
import DescriptionSmall from "../templates/text/DescriptionSmall";

export default function Sidebar({ scrollToSection }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const navbarItems = [
    { title: "Home", key: "home", link: "/" },
    { title: "Salah Timings", key: "howWorks", link: "/#howWorks" },
    { title: "About" },
    { title: "Arabic Language", key: "", link: "/pages/arabiclanguage" },
    // { title: "Quran Classes", key: "", link: "/pages/quranClass" },
    { title: "Quran Classes", key: "", link: "/pages/quranClass" },
    { title: "Blogs & News", key: "", link: "/pages/blog" },
    { title: "HotDesk", key: "", link: "/pages/hotdesk" },
    { title: "Seminars", key: "", link: "/pages/seminarPage" },
  ];

  return (
    <>
      <Button onClick={toggleDrawer(true)} sx={{ color: "white" }}>
        <MenuIcon color="inherit" />
      </Button>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <LogoIcon src="/images/logo.png" />
          <List>
            {navbarItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton href={item.link}>
                  <DescriptionSmall textColor={"black"}>
                    {item.title}
                  </DescriptionSmall>
                </ListItemButton>
              </ListItem>
            ))}
            <ButtonWrapper>
              <Button>Contact</Button>
            </ButtonWrapper>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
}

const ButtonWrapper = styled.div``;

const LogoIcon = styled.img`
  padding: 1rem;
  width: 60%;
`;

// const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem 0.8rem;
//   border: none;
//   cursor: pointer;
//   border-radius: 1rem;
//   background-color: blue;
// `;
