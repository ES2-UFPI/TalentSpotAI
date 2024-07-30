import {
  Grid,
  Box,
  TextField,
  Divider,
  Button,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

export default function MeusCurriculos() {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{marginY:2}}>
        <Link underline="hover" color="inherit" href="/home">
          Página Inicial
        </Link>
        <Typography color="text.primary">Meu Perfil</Typography>
      </Breadcrumbs>
      <Grid container mt={3}>
        <Grid item xs={9}>
          <Box display={"flex"} flexDirection={"column"}>
            <form
              style={{ display: "flex", flexDirection: "column", rowGap: 20 }}
            >
              <TextField id="outlined-basic" label="Nome" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Usuário"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="CPF" variant="outlined" />
              <Divider />
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Nova Senha"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Confirmar Senha"
                variant="outlined"
              />
              <Divider />

              <TextField
                id="outlined-basic"
                label="Senha Atual"
                variant="outlined"
              />

              <Button variant="contained" color="primary">
                Salvar
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Card style={{ marginInline: 10 }}>
            <CardHeader title="Foto de perfil" />
            <CardContent>
              <Box
                alignItems={"center"}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <img src="person.png" alt="Logo" width={"50%"} />
                <IconButton size="large">
                  <CloudUploadOutlinedIcon sx={{ color: "#2196F3" }} />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
