"use client"
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if(!mounted){
        return null;
    }

    const handleTheme = () => {
        if(theme === "dark"){
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    return (
        <Switch
            checked={theme === "dark"}
            onChange={handleTheme}
            icon={<LightModeIcon />}
            checkedIcon={<DarkModeIcon />}
        />
    );

}