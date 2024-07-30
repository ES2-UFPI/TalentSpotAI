import MiniAgendaCard from "@/components/Cards/MiniAgendaCard";
import VagaCandidato from "@/components/Cards/VagaCandidato";
import VagasCandidateiCard from "@/components/Cards/VagasCandidateiCard";
import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container mt={1}>
      <Grid item xs={7.9}>
        <Box>
          <VagaCandidato
            title="Vaga Programador Delphi"
            type="CLT"
            company="Empresa Fictícia"
            description="Busca-se programador que possua conhecimento em DELPHI 7, MySQL, De..."
            salary="R$ 4.000,00"
            compatible={true}
          />
          <VagaCandidato
            title="Suporte de T.I"
            type="Estágio"
            company="Empresa Fictícia"
            description="Monitorar ativos de rede, identificar e diagnosticar falhas, solucionar..."
            salary="R$ 700,00"
            compatible={false}
          />
          <VagaCandidato
            title="Vaga Programador Delphi"
            type="PJ"
            company="Empresa Fictícia"
            description="Busca-se programador que possua conhecimento em DELPHI 7, MySQL, De..."
            salary="R$ 4.000,00"
            compatible={true}
          />
        </Box>
      </Grid>
      <Grid item xs={0.1}></Grid>
      <Grid item xs={4}>
        <Box>
          <VagasCandidateiCard/>
          <MiniAgendaCard />
        </Box>
      </Grid>
    </Grid>
  );
}
