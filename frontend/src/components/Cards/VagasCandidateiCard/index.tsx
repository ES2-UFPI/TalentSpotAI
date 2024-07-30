import VagasCandidateiList from "@/components/Lists/VagasCandidateiList";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function VagasCandidateiCard() {
  return (
    <Card style={{marginBottom: 10}}>
      <CardHeader title="Vagas que me candidatei" />
      <CardContent>
        <VagasCandidateiList />
      </CardContent>
    </Card>
  );
}
