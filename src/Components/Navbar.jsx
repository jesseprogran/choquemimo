import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Sobre Nós",
      icon: <InfoIcon />,
    },
    {
      text: "Nosso Trabalho",
      icon: <HomeWorkIcon />,
    },
    {
      text: "Avaliação",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#">Sobre Nós</a>
        <a href="#">Nosso Trabalho</a>
        <a href="#">Avaliações</a>
        <a href="#">Contatos</a>
        <a href="#">
          <BsCart2 className="navbar-cart-icon" />
        </a>

        <button className="primary-button">Reservas Agora</button>
      </div>

      <div className="nav-bar-menu-container">
        <HiOutlineBars3 onclick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onclick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;