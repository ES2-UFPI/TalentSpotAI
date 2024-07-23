// JobItem.tsx
import React from "react";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

type JobType = "CLT" | "Estágio" | "PJ";

interface VagaCandidatoProps {
  title: string;
  type: JobType;
  company: string;
  description: string;
  salary: string;
  compatible: boolean;
}

const VagaCandidato: React.FC<VagaCandidatoProps> = ({
  title,
  type,
  company,
  description,
  salary,
  compatible,
}) => {
  const getTypeColor = (type: JobType) => {
    switch (type) {
      case "CLT":
        return "primary";
      case "Estágio":
        return "info";
      case "PJ":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display={"flex"} gap={1}>
            <Typography variant="h6">{title}</Typography>
            <Chip label={type} color={getTypeColor(type)} />
          </Box>
          <Box display="flex" alignItems="center">
            <Chip
              label={compatible ? "COMPATÍVEL" : "INCOMPATÍVEL"}
              color={compatible ? "success" : "error"}
              icon={compatible ? <CheckCircle /> : <Cancel />}
            />
            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              {salary}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
          {company}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VagaCandidato;
