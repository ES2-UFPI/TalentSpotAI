import { MeusCurriculosTable } from "@/components/Tables/MeusCurriculosTable";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export default function MeusCurriculos() {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginY: 2 }}>
        <Link underline="hover" color="inherit" href="/home">
          Página Inicial
        </Link>
        <Typography color="text.primary">Meus Currículos</Typography>
      </Breadcrumbs>
      <Box display={"flex"} justifyContent={"center"}>
        <Box width={"90%"} height={"70%"}>
          <MeusCurriculosTable />
        </Box>
      </Box>
    </>
  );
}
