'use client';
import LOGIN_MUTATION  from "@/hooks/login";
import { useMutation } from "@apollo/client";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginCandidato() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const router = useRouter();

  const handleSubmit = (e: any) => {
    router.push("/home");
  };

  // const handleLogin = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const result = await login({ variables: { email, password } });
  //     const token = result.data.tokenAuth.token;
  //     localStorage.setItem('token', token);
  //     // Redirecione ou atualize a UI conforme necessário
  //     console.log('Login bem-sucedido', result.data.tokenAuth.user);
  //   } catch (e) {
  //     console.error('Erro no login', e);
  //   }
  // };

  return (    
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <form
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
            padding: "1rem",
          }}
        >
          <TextField
            label="E-mail"
            name="email"
            // value={form.nome}
            // onChange={(e) => handleChange(e)}
            // error={!!errors.nome}
            // helperText={errors.nome}
          />
          <TextField
            label="Senha"
            name="password"
            type="password"
            // value={form.nome}
            // onChange={(e) => handleChange(e)}
            // error={!!errors.nome}
            // helperText={errors.nome}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </Button>
        </form>
        <Typography variant="caption" color={"#000"}>
          Não possui uma conta? <Link>Registre-se</Link>{" "}
        </Typography>
      </Box>
  );
}
