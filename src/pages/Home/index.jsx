import React from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Typography } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Footer from "../../components/Footer";
import ListMenu from "../../components/ListMenu";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>List of Menu</title>
        <meta name="description" content="Choose your favourite menu." />
      </Helmet>
      <Grid
        container
        sx={{
          backgroundColor: "#ededed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5vh",
        }}
      >
        <RestaurantMenuIcon sx={{ fontSize: 40, paddingRight: "1vh" }} />
        <Typography variant="h4" gutterBottom sx={{ paddingTop: "2vh" }}>
          Best Seller
        </Typography>
        <RestaurantMenuIcon sx={{ fontSize: 40, paddingLeft: "1vh" }} />
      </Grid>
      <Grid sx={{ backgroundColor: "#ededed", paddingBottom: "5vh" }}>
        <ListMenu />
      </Grid>
      <Footer />
    </>
  );
};
export default Home;
