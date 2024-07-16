// src/App.js
import React, { useState } from 'react';
import './App.css';
import { createCurriculo } from './api'; // Importe a função de API
import Box from '@mui/material/Box';
import { Tabs, Tab, TextField, Button, Typography, Link } from '@mui/material';


function App() {
  const [value, setValue] = React.useState(0);

  const [form, setForm] = useState({
    nome: '',
    email: '',
    celular: '',
    cep: '',
    endereco: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: '',
    objetivo: '',
    formacao: [],
    experiencia: [],
    idiomas: [],
    certificacoes: [],
    habilidades: [],
    outrasInformacoes: ''
  });

  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };

  const handleNestedChange = (index, name, value, field) => {
    const updatedField = [...form[field]];
    updatedField[index][name] = value;
    setForm({ ...form, [field]: updatedField });
  };

  const handleAddNested = (field, newEntry) => {
    setForm({ ...form, [field]: [...form[field], newEntry] });
  };

  const handleRemoveNested = (index, field) => {
    const updatedField = [...form[field]];
    updatedField.splice(index, 1);
    setForm({ ...form, [field]: updatedField });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.nome) newErrors.nome = 'Nome é obrigatório';
    if (!form.email) newErrors.email = 'Email é obrigatório';
    if (!form.estado) newErrors.estado = 'Estado é obrigatório';
    if (!form.pais) newErrors.pais = 'País é obrigatório';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const curriculo = await createCurriculo(form);
        console.log('Currículo criado:', curriculo);
      } catch (error) {
        console.error('Erro ao criar currículo:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
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
            <Tab label="EMPRESA" {...a11yProps(1)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <form
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                  padding: '1rem'
                }}
              >
                <TextField
                  label="Usuário"
                  name="user"
                  value={form.nome}
                  onChange={(e) => handleChange(e)}
                  error={!!errors.nome}
                  helperText={errors.nome}
                />
                <TextField
                  label="Senha"
                  name="password"
                  value={form.nome}
                  onChange={(e) => handleChange(e)}
                  error={!!errors.nome}
                  helperText={errors.nome}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </Button>
              </form>
              <Typography variant="caption">Não possui uma conta? <Link>Registre-se</Link> </Typography>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <p>Em breve...</p>
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
