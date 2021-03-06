import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MIN_CARD_COMPONENT_WIDTH } from "../../atoms/constants/sizes";
import {
  PATH_FOR_TOURNAMENT,
  PATH_FOR_TOURNAMENT_REGISTRATIONS_VIEW,
} from "../../atoms/constants/routerPaths";
import { PATH_FOR_IMAGES } from "../../atoms/constants/imgPaths";
import LinkButton from "../../atoms/TextButton/LinkButton";
import { VerticalSpace } from "../../atoms/VerticalSpace";

type TournamentCardProps = {
  readonly tournamentId: string;
  readonly tournamentName: string;
  readonly registrationStatus: string;
};

const useStyles = makeStyles({
  root: {
    maxWidth: MIN_CARD_COMPONENT_WIDTH,
  },
  media: {
    height: 150,
  },
  cardActions: {
    justifyContent: "flex-end",
  },
});

const TournamentCard = ({
  tournamentId,
  tournamentName,
  registrationStatus,
}: TournamentCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${PATH_FOR_IMAGES}/foosball_tournament.jpg`}
        title="Tournament Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {tournamentName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ZAPISY: {registrationStatus}
        </Typography>
      </CardContent>
      <VerticalSpace height={"20px"} />
      <CardActions disableSpacing={true} className={classes.cardActions}>
        <>
          {registrationStatus === "OPENED" ? (
            <LinkButton
              text={"Zapisy"}
              onLink={
                PATH_FOR_TOURNAMENT_REGISTRATIONS_VIEW + `/${tournamentId}`
              }
            />
          ) : (
            <LinkButton
              text={"Mecze i wyniki"}
              onLink={PATH_FOR_TOURNAMENT + `/${tournamentId}/matches`}
            />
          )}
        </>
      </CardActions>
    </Card>
  );
};

export default TournamentCard;
