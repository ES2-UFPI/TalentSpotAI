"use client";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ThemeSwitcher from "@/components/Switch/ThemeSwitcher";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Navbar() {
    const router = useRouter();
    const [menuDrawer, setMenuDrawer] = useState(false);

    const handleMenuDrawer = () => {
        setMenuDrawer(!menuDrawer);
    };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        borderBottom={"1px solid #CECECE"}
        bgcolor={"#F0F0F0"}
      >
        <IconButton onClick={handleMenuDrawer}>
          <MenuIcon />
        </IconButton>

        <Box>
          <img src="talentSpotAILogoNavbar.png" alt="Logo" />
        </Box>

        {/* <ThemeSwitcher /> */}

        <IconButton>
          <ExitToAppIcon />
        </IconButton>
      </Box>
      <Drawer anchor={"left"} open={menuDrawer} onClose={() => {setMenuDrawer(false)}}>
        <Box width={250}>
          <Box display={"flex"} justifyContent={"center"} p={2}>
            <img src="talentSpotAILogo.png" alt="Logo" />
          </Box>
        </Box>
        <Divider />
        <List>
          <ListItem key={"PaginaInicial"} disablePadding onClick={() => {router.push('/home'); setMenuDrawer(false) }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Página Inicial"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"MeuPerfil"} disablePadding onClick={() => {router.push('/perfil'); setMenuDrawer(false) }}>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary={"Meu Perfil"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"MeusCurriculos"} disablePadding onClick={() => {router.push('/meus-curriculos'); setMenuDrawer(false)}}>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={"Meus Currículos"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
