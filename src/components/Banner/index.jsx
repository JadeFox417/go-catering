import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "rgba(196, 196, 196, 0.6)",
      darker: "#053e85",
    },
    neutral: {
      main: "#FF7A00",
      contrastText: "#ffffff",
    },
  },
});

const Banner = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/mini-project-12ede.appspot.com/o/assets%2Fbanner.jpg?alt=media&token=d7af1a4d-9128-47f4-83b9-b10b6949a104)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        >
          <Grid
            container
            rowSpacing={5}
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "40%",
              height: "20%",
              display: "flex",
              backgroundColor: "primary.main",
              borderRadius: "16px",
            }}
          >
            <Grid item xs={12} sm>
              <Typography gutterBottom variant="h6" component="div">
                Welcome To Go-Catering
              </Typography>
              <Link style={{ textDecoration: "none" }} to="/home">
                <Button color="neutral" variant="contained">
                  ORDER NOW
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Banner;
