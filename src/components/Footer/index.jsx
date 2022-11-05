import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#353535",
      darker: "#1d1d1d",
    },
    neutral: {
      main: "#FF7A00",
      contrastText: "#ffffff",
    },
  },
  item: {
    a: {
      textDecoration: "none",
      color: "#727272",
      "&:hover": {
        color: "#989898",
      },
    },
    aIcon: {
      textDecoration: "none",
      color: "#727272",
      "&:hover": {
        color: "#989898",
      },
      display: "flex",
      alignItems: "center",
    },
  },
});

const Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "primary.main" }}>
          <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
                    Go-Catering
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom sx={{ color: "#727272", textAlign: "justify" }}>
                    Go-Catering is a website that allows you to buy food and drinks from anywhere at any time. This
                    service makes it easier for consumers to buy necessities and helps most modern people who prefer to
                    order foods at home instead of buying directly from restaurants. This year, Go-Catering achieve an
                    award as the top 1 seller of food and beverage ordering website based on compas.com. Go-Catering was
                    developed and maintained by a student studying as a Frontend Developer at Alterra Acedemy, Juan
                    Carlos, as the team leader of Go-Catering.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={4} md={2}>
                <Stack spacing={2} sx={{ textAlign: "start" }}>
                  <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
                    Menu
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.a}>
                    Promotion
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.a}>
                    Ala Carte
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.a}>
                    Drinks
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.a}>
                    Addition
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={4} md={2}>
                <Stack spacing={2} sx={{ textAlign: "start" }}>
                  <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
                    Help
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.a}>
                    Terms of Use
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.a}>
                    Privacy
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.a}>
                    FAQ
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.a}>
                    Help Center
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={4} md={2}>
                <Stack spacing={2} sx={{ textAlign: "start" }}>
                  <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
                    Contact
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.aIcon}>
                    <EmailIcon />
                    Email
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.aIcon}>
                    <LinkedInIcon />
                    Linked In
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.aIcon}>
                    <InstagramIcon />
                    Instagram
                  </Typography>
                  <Typography variant="body1" component="a" href="#" sx={theme.item.aIcon}>
                    <TelegramIcon />
                    Telegram
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ bgcolor: "primary.darker" }}>
          <Container maxWidth="md" sx={{ py: 1 }}>
            <Typography sx={{ color: "#b4b4b4" }}>© 2022 Juan Carlos. All rights reserved.</Typography>
          </Container>
        </Box>
      </ThemeProvider>
      {/* <CContainer fluid className="text-md-start bg-dark text-white">
        <CRow className="mx-5 py-5 justify-content-between">
          <CCol md="auto" lg={4} className="align-self-center">
            <h6 className="text-lg-center mb-4" style={{ fontWeight: "bold" }}>
              eNews
            </h6>
            <p style={{ textAlign: "justify" }}>
              Electronic news or eNews is a website that provides the latest news around the world. eNews was developed
              and maintained by a student studying as a Frontend Developer at Alterra Acedemy, Juan Carlos, as the team
              leader of eNews.
            </p>
          </CCol>
          <CCol md="auto" lg={2}>
            <h6 className="mb-4" style={{ fontWeight: "bold" }}>
              Come Say Hello!
            </h6>
            <p>4043 N</p>
            <p>Ravenswood Ave, Suite 316</p>
            <p>Chicago, IL, 60613</p>
            <p>(773) 348-4581</p>
          </CCol>
          <CCol md="auto" lg={2}>
            <h6 className="mb-4" style={{ fontWeight: "bold" }}>
              Contact Us
            </h6>
            <p className="py-1">
              <FaGoogle />
              <a
                href="mailto: tepanuspardosi.jp@gmail.com"
                className="text-light m-3"
                style={{ textDecoration: "none" }}
              >
                Email
              </a>
            </p>
            <p className="py-1">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/juan-pardosi-257504238/"
                className="text-light m-3"
                style={{ textDecoration: "none" }}
              >
                Linked In
              </a>
            </p>
            <p className="py-1">
              <FaGithub />
              <a href="https://github.com/JadeFox417" className="text-light m-3" style={{ textDecoration: "none" }}>
                GitHub
              </a>
            </p>
            <p className="py-1">
              <FaInstagram />
              <a
                href="https://www.instagram.com/juanprdsi/"
                className="text-light m-3"
                style={{ textDecoration: "none" }}
              >
                Instagram
              </a>
            </p>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer className="text-center p-4"></CContainer> */}
    </>
  );
};

export default Footer;
