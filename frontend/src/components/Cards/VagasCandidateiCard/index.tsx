import VagasCandidateiList from "@/components/Lists/VagasCandidateiList";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function VagasCandidateiCard() {
  return (
    <Card>
      <CardHeader title="Vagas que me candidatei" />
      <CardContent>
        <VagasCandidateiList />
      </CardContent>
    </Card>
  );
}
