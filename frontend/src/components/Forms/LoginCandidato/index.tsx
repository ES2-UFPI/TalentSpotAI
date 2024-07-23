import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginCandidato() {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    router.push("/home");
  };

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
            label="Usuário"
            name="user"
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
