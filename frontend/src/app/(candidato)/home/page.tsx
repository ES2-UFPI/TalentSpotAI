"use client";
import MiniAgendaCard from "@/components/Cards/MiniAgendaCard";
import VagaCandidato from "@/components/Cards/VagaCandidato";
import VagasCandidateiCard from "@/components/Cards/VagasCandidateiCard";
import TODAS_VAGAS_QUERY from "@/querys";
import { useQuery } from "@apollo/client";
import { Box, Grid, Skeleton } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  const { data, loading, error } = useQuery(TODAS_VAGAS_QUERY);

  console.log(data, loading, error);

  // useEffect(() => {
  //   async function fetchData() {
  //     await fetch("http://localhost:5000/vagas", {method: "GET", mode: "no-cors"}).then((response) => response.json()).then((data) => console.log(data))
  //   };
  //   fetchData();
  // }, []);

  return (
    <Grid container mt={1}>
      <Grid item xs={7.9}>
        <Box>
          {loading ? (
            <>
              <Skeleton variant="rectangular" height={100} sx={{marginBottom: 2}} />
              <Skeleton variant="rectangular" height={100} sx={{marginBottom: 2}} />
              <Skeleton variant="rectangular" height={100} sx={{marginBottom: 2}} />
              <Skeleton variant="rectangular" height={100} sx={{marginBottom: 2}} />
              <Skeleton variant="rectangular" height={100} sx={{marginBottom: 2}} />
              <Skeleton variant="rectangular" height={100} sx={{marginBottom: 2}} />
            </>
          ) : (
            data?.todasVagas.map((el: any, index: number) => (
              <VagaCandidato
                title={el.nomeVaga}
                type={el.tipo}
                company={el.empresa}
                description={el.detalhes}
                salary={`R$ ${el.salario}`}
                compatible={el.compativel}
                key={index}
              />
            ))
          )}
          {/* <VagaCandidato
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
          /> */}
        </Box>
      </Grid>
      <Grid item xs={0.1}></Grid>
      <Grid item xs={4}>
        <Box>
          <VagasCandidateiCard />
          <MiniAgendaCard />
        </Box>
      </Grid>
    </Grid>
  );
}
