import React, { useContext, useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { VerticalSpace } from "../../atoms/VerticalSpace";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserProfileRestApi } from "../../../restapi/players-profiles";
import { EntityIdGenerator } from "../../atoms/idGenerator/EntityIdGenerator";
import { TournamentRegistrationsRestApi } from "../../../restapi/tournament-registrations";
import { TournamentRegistrationsContext } from "../TournamentRegistrationsComponents/Context";
import Notification from "../Notification/Notification";

const validationSchema = yup.object({
  name: yup.string().required("To pole jest wymagane."),
  surname: yup.string().required("To pole jest wymagane."),
  email: yup
    .string()
    .email("Niepoprawny adres e-mail.")
    .required("To pole jest wymagane."),
  phone: yup
    .string()
    .min(9, "Wprowadź przynajmniej 9 znaków.")
    .required("To pole jest wymagane."),
});

function CreatePlayerProfileForm(props: {
  onDrawerClose: () => void;
  tournamentId: string;
}) {
  const { onPlayerProfileCreated } = useContext(TournamentRegistrationsContext);
  const [openAlert, setOpenAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("");

  const onNotificationOpen = (errorMessage: string) => {
    setTextAlert(errorMessage);
    setOpenAlert(true);
  };

  const onNotificationClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const playerId = EntityIdGenerator.generate();
        await UserProfileRestApi().postPlayersProfile({
          playerId: playerId,
          firstName: values.name,
          lastName: values.surname,
          phoneNumber: values.phone,
          emailAddress: values.email,
        });
        await TournamentRegistrationsRestApi().postPlayersForTournament({
          tournamentId: props.tournamentId,
          playerId: playerId,
        });
        props.onDrawerClose();
        onPlayerProfileCreated(values.name, values.surname);
      } catch (error) {
        onNotificationOpen(error.response.data.message);
      }
    },
  });

  return (
    <Grid container direction={"column"} justify="center" alignItems="center">
      <VerticalSpace height="10px" />
      <Typography component="h6" variant="h6">
        Nowy zawodnik
      </Typography>
      <VerticalSpace height="10px" />

      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction={"column"}
          justify="center"
          alignItems="center"
        >
          <TextField
            id="Imię"
            value={formik.values.name}
            label="Imię"
            name="name"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <VerticalSpace height="10px" />

          <TextField
            id="Nazwisko"
            value={formik.values.surname}
            label="Nazwisko"
            name="surname"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
          <VerticalSpace height="10px" />

          <TextField
            id="Adres e-mail"
            value={formik.values.email}
            label="Adres e-mail"
            name="email"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <VerticalSpace height="10px" />

          <TextField
            id="Numer telefonu"
            value={formik.values.phone}
            label="Numer telefonu"
            name="phone"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />

          <VerticalSpace height="1rem" />
          <Button type="submit" variant="contained" color="primary">
            Zapisz zawodnika
          </Button>
          <VerticalSpace height="1rem" />
        </Grid>
      </form>
      <Notification
        text={textAlert}
        open={openAlert}
        handleClose={onNotificationClose}
        isError={true}
      />
    </Grid>
  );
}

export default CreatePlayerProfileForm;
