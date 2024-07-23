"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GroupsIcon from "@mui/icons-material/Groups";

export default function MiniAgendaList() {
  const [dense, setDense] = useState(false);

  return (
    <List dense={dense}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <LinkIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <GroupsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Programador Web..." secondary={"Hoje, às 14h30"} />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <LinkIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <GroupsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Suporte de T.I" secondary={"Amanhã, às 08h"} />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <LinkIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <GroupsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Desenvoldor Fron..." secondary={"Quarta-feira, às 10h"} />
      </ListItem>
    </List>
  );
}
