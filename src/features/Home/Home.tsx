import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext, anonimousUser } from "../../AuthContext";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © The Movies DB {new Date().getFullYear()}
    </Typography>
  );
}

export function Home() {
  const { user } = useContext(AuthContext);
  const loggedIn = user !== anonimousUser;
  const greeting = loggedIn
    ? `${user.name}, explore movies today with us!`
    : "Explore movies today with us!";

  return (
    <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 8 }}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {greeting}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            component={RouterLink}
            to="/movies"
            variant="contained"
            color="secondary"
          >
            Explore
          </Button>
        </Stack>
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright />
      </Container>
    </Box>
  );
}
