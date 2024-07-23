import { Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ThemeSwitcher from "@/components/Switch/ThemeSwitcher";

export default function Navbar () {
    return (
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} borderBottom={"1px solid #CECECE"} bgcolor={"#F0F0F0"}>
            <IconButton>
                <MenuIcon />
            </IconButton>

            <Box>
                <img src="talentSpotAILogoNavbar.png" alt="Logo" />
            </Box>

            {/* <ThemeSwitcher /> */}

            <IconButton>
                <ExitToAppIcon/>
            </IconButton>

        </Box>
    );
}