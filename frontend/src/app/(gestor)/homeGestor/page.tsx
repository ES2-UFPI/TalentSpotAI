import EmpresasGestorCard from "@/components/Cards/EmpresasGestorCard";
import MiniAgendaCard from "@/components/Cards/MiniAgendaCard";
import { Box, Grid } from "@mui/material";

export default function HomeGestor() {
  return (
    <Grid container mt={1}>
      <Grid item xs={7.9}>
        <Box display={"flex"} flexDirection={"column"}>
          <EmpresasGestorCard title="Empresa Fictícia X" type="Gestor" />
          <EmpresasGestorCard title="Empresa Fictícia Y" type="Recrutador" />
        </Box>
      </Grid>
      <Grid item xs={0.1}></Grid>
      <Grid item xs={4}>
        <MiniAgendaCard />
      </Grid>
    </Grid>
  );
}
