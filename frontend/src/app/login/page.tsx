'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Tabs, Tab, TextField, Button, Typography, Link } from '@mui/material';
import LoginCandidato from '@/components/Forms/LoginCandidato';
import LoginGestorRecrutador from '@/components/Forms/LoginGestorRecrutador';

const Page = () => {
    const [value, setValue] = useState<Number>(0);

    const handleChange = (event: any, newValue: Number) => {
        setValue(newValue);
    };

    function a11yProps(index: Number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    function CustomTabPanel({children, value, index, ...other}: any) { 
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && <>{children}</>}
          </div>
        );
      }

    return (
        <Box sx={{
            backgroundImage: 'url(bg.png)',
            backgroundRepeat: 'round',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw'
          }}>
            <Box
              sx={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                width: '30%',
                minHeight: '45%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <img src="talentSpotAILogo.png" alt="Logo" />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  width: '100%',
                }}
              >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
                  <Tab label="CANDIDATO" {...a11yProps(0)} />
                  <Tab label="GESTOR/RECRUTADOR" {...a11yProps(1)} />
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                  <LoginCandidato/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <LoginGestorRecrutador />
                </CustomTabPanel>
              </Box>
            </Box>
          </Box>
    );
}

export default Page;