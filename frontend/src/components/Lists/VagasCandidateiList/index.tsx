"use client"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ApartmentIcon from '@mui/icons-material/Apartment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";

export default function VagasCandidateiList() {
  const [dense, setDense] = useState(false);

  // function generate(element: React.ReactElement) {
  //   return [0, 1, 2].map((value) =>
  //     React.cloneElement(element, {
  //       key: value,
  //     }),
  //   );
  // }

  return (
    <List dense={dense}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <VisibilityIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <ApartmentIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Empresa X"
            secondary={"Há 1 dia"}
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <VisibilityIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <ApartmentIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Empresa Y"
            secondary={"Há 2 dias"}
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <VisibilityIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <ApartmentIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Empresa Z"
            secondary={"Há 2 semanas"}
          />
        </ListItem>
    </List>
  );
}
