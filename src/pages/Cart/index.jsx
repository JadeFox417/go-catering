import React from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartMenu from "../../components/CartMenu";
import Footer from "../../components/Footer";

const Cart = () => {
  return (
    <>
      <Helmet>
        <title>My Cart</title>
        <meta name="description" content="Checkout your cart from our best seller menu." />
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
        <ShoppingCartIcon sx={{ fontSize: 40, paddingRight: "1vh" }} />
        <Typography variant="h4" gutterBottom sx={{ paddingTop: "2vh" }}>
          Cart
        </Typography>
      </Grid>
      <Grid container sx={{ backgroundColor: "#ededed", paddingBottom: "5vh" }}>
        <CartMenu />
      </Grid>
      <Footer />
    </>
  );
};

export default Cart;
