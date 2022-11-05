import React from "react";
import { Helmet } from "react-helmet-async";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../components/Footer";
import LoadingWhiteSvg from "../../components/Loading/LoadingWhiteSvg";
import Review from "../../components/Review";
import useGetReview from "../../hooks/queries/useGetReview";

const About = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
        darker: "#053e85",
      },
      neutral: {
        main: "#FF7A00",
        contrastText: "#ffffff",
      },
    },
  });

  const { reviewData, reviewLoading, reviewError } = useGetReview();
  if (reviewLoading) {
    return <LoadingWhiteSvg />;
  }

  if (reviewError) {
    console.log(reviewError);
    return null;
  }

  return (
    <>
      <Helmet>
        <title>About Go-Catering</title>
        <meta
          name="description"
          content="Find out more about Go-Catering as the top 1 seller of food and beverage ordering website."
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{ backgroundColor: "#ededed", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Grid item xs={12} md={12} sx={{ padding: "40px", maxWidth: "100%" }}>
            <Paper elevation={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "primary.main",
                  borderRadius: "20px",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "60%" },
                    padding: "40px",
                  }}
                >
                  <Typography variant="h6" paddingBottom={2}>
                    About Us
                  </Typography>
                  <Typography variant="body1" textAlign="justify" paddingBottom={2}>
                    Technological advances are very closely related to our daily lives today. Technology makes tasks
                    easier. Many innovations have been made and new styles have emerged to perform daily activities
                    using ever-evolving technology. Over time, mobile phones have also developed as a communication tool
                    to send messages to others without having to go back and forth between space and time. The Internet
                    supports viewing various types of information quickly, both domestically and internationally.
                  </Typography>
                  <Typography variant="body1" textAlign="justify" paddingBottom={2}>
                    This service makes it easier for consumers to buy necessities and helps most modern people who
                    prefer to order foods and beverages at home instead of buying directly from restaurants. Based on
                    the background discussed and the existing phenomena, our team are interested in creating this
                    “Go-Catering” website related to purchasing decisions for online food ordering . This website build
                    using Hasura as the data storage and ReactJS to create this wonderful website.
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" } }}
                  >
                    <Button variant="contained" color="neutral">
                      Read more
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    width: { xs: "none", md: "40%" },
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{ objectFit: "cover", width: "100%", height: "100%", maxWidth: "300px", maxHeight: "300px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/mini-project-12ede.appspot.com/o/assets%2Flogo-white.png?alt=media&token=464b3618-f5dc-435d-aa4e-6daf03476288"
                    alt="logo"
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
          {reviewData?.review.map((item, key) => (
            <Review key={key} item={item} />
          ))}
        </Grid>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default About;
