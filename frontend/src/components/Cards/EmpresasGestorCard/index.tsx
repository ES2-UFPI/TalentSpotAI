// JobItem.tsx
import React from "react";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

type JobType = "Gestor" | "Recrutador";

interface EmpresasGestorCardProps {
  title: string;
  type: JobType;
}

const EmpresasGestorCard: React.FC<EmpresasGestorCardProps> = ({
  title,
  type,
}) => {
  const getTypeColor = (type: JobType) => {
    switch (type) {
      case "Gestor":
        return "warning";
      case "Recrutador":
        return "primary";
      default:
        return "default";
    }
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display={"flex"} gap={1}>
            <Typography variant="h6" sx={{cursor: "pointer"}}>{title}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Chip
              label={type}
              color={getTypeColor(type)}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EmpresasGestorCard;
