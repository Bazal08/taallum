import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DescriptionSmall from "../templates/text/DescriptionSmall";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

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
    { title: "Salah Timings", key: "howWorks", link: "#howWorks" },
    { title: "Safety & Trust", key: "security", link: "#security" },
    { title: "Quran Classes", key: "contact", link: "#contact" },
    { title: "Arabic Language", key: "contact", link: "#contact" },
    { title: "Salah Timings", key: "contact", link: "#contact" },
    { title: "Seminars", key: "contact", link: "#contact" },
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
          <LogoIcon src="/images/images/logoblack.png" />
          <List>
            {navbarItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.key)}>
                  <DescriptionSmall textColor={"black"}>
                    {item.title}
                  </DescriptionSmall>
                </ListItemButton>
              </ListItem>
            ))}
            <ButtonWrapper>
              <Button>Booking</Button>
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
