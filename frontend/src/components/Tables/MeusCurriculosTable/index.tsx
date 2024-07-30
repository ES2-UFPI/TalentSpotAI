"use client";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { data } from "./__data";
import { useMemo } from "react";
import { Box, Button, IconButton, Switch } from "@mui/material";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

type TMeusCurriculos = {
  id: number;
  data_de_cadastro: string;
  status: boolean;
  ranking: number;
};

function MeusCurriculosTable() {
  const columns = useMemo<MRT_ColumnDef<TMeusCurriculos>[]>(
    () => [
      {
        header: "ID",
        accessorKey: "id",
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        muiTableFooterCellProps: {
          align: 'center',
        },
      },
      {
        header: "Data de Cadastro",
        accessorKey: "data_de_cadastro",
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        muiTableFooterCellProps: {
          align: 'center',
        },
      },
      {
        Cell: ({ row }) => (
          <>
            {row.original.status == true ? (
              <>
                <Switch defaultChecked /> Habilitado
              </>
            ) : (
              <>
                <Switch /> Desabilitado
              </>
            )}
          </>
        ),
        header: "Status",
        accessorKey: "status",
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        muiTableFooterCellProps: {
          align: 'center',
        },
      },
      {
        header: "Ranking",
        accessorKey: "ranking",
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        muiTableFooterCellProps: {
          align: 'center',
        },
      },
      {
        Cell: () => (
          <Box display="flex" justifyContent={"space-around"}>
            <Box>
              <IconButton>
                <VisibilityOutlinedIcon sx={{ color: "#2196F3" }} />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <DeleteOutlinedIcon sx={{ color: "#FF0000" }} />
              </IconButton>
            </Box>
          </Box>
        ),
        header: "Ações",
        accessor: "acoes",
        size: 50,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        muiTableFooterCellProps: {
          align: 'center',
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    getRowId: (row) => row.id.toString(),
    localization: MRT_Localization_PT_BR,
    renderTopToolbarCustomActions: () => (
      <Button variant="contained">Adicionar Currículo</Button>
    ),
  });

  return <MaterialReactTable table={table} />;
}

export { MeusCurriculosTable };
