import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  OutlinedInput,
  Typography
} from "@material-ui/core";
import {
  AddCircleOutline,
  Search,
  SupervisedUserCircle
} from "@material-ui/icons";

export interface PlayerProfileDto {
  readonly playerId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
}

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Divider = (props: { height: string | number }) => (
  <div style={{ minHeight: props.height }} />
);

export interface TournamentRegistrationsProps {
  readonly tournamentId: string;
}

export const TournamentRegistrations = (
  props: TournamentRegistrationsProps
) => {
  const [initPlayers, setInitPlayers] = useState<PlayerProfileDto[]>([]);
  const [players, setPlayers] = useState<PlayerProfileDto[]>([]);
  const [registeredPlayers, setRegisteredPlayers] = useState<{ playerId: string }[]>([]);

  //TODO: Create abstraction for requests. Something like UserProfilesRestApi class
  useEffect(() => {
    axios
      .get<{ items: PlayerProfileDto[] }>(
        "http://localhost:5000/rest-api/players-profiles"
      )
      .then((r) => {
        const players = r.data.items;
        setInitPlayers(players);
        setPlayers(players);
      });
  }, []);

  function onPlayerSearch(searchInput: string) {
    if (searchInput.trim() === "") {
      setPlayers(initPlayers);
    } else {
      setPlayers(
        players.filter((player) =>
          `${player.firstName} ${player.lastName} ${player.emailAddress}`.includes(
            searchInput.trim()
          )
        )
      );
    }
  }

  return (
    <RegistrationsCard>
      <CardContent>
        <Centered>
          <Typography component="h6" variant="h6">
            Zapisy na turniej
          </Typography>
          <Divider height="1rem" />
          <FormControl variant="outlined">
            <InputLabel htmlFor="player-search-input">Zawodnik</InputLabel>
            <OutlinedInput
              id="player-search-input"
              onChange={(event) => onPlayerSearch(event.target.value)}
              endAdornment={<Search />}
              labelWidth={70}
            />
          </FormControl>
          <Divider height="1rem" />
        </Centered>
        <PlayersList players={players} />
      </CardContent>
    </RegistrationsCard>
  );
};

const RegistrationsCard = styled(Card)({
  maxWidth: "500px",
  minHeight: "500px"
});

export const PlayersList = (props: { players: PlayerProfileDto[] }) => (
  <List>
    {props.players.map((player) => (
      <PlayersListItem key={player.playerId} player={player} />
    ))}
  </List>
);

type PlayersListItemProps = { player: PlayerProfileDto };
export const PlayersListItem = (props: PlayersListItemProps) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <SupervisedUserCircle />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={`${props.player.firstName} ${props.player.lastName}`}
      secondary={props.player.emailAddress}
    />
    <ListItemSecondaryAction>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => console.log("Register player clicked!")}
      >
        <AddCircleOutline />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
