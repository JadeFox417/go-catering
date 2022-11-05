import { React, useState } from "react";
import CartItem from "../CartItem";
import { Box, Button, Grid, IconButton, Modal, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import LoadingSvg from "../Loading/LoadingSvg";
import useCheckoutCart from "../../hooks/mutations/useCheckoutCart";
import useSubscriptionCart from "../../hooks/subscriptions/useSubscriptionCart";
import useSubscriptionTotalPrice from "../../hooks/subscriptions/useSubscriptionTotalPrice";
import { Link } from "react-router-dom";

const CartMenu = () => {
  const { cartData, cartLoading, cartError } = useSubscriptionCart();
  const { totalPriceData, totalPriceLoading, totalPriceError } = useSubscriptionTotalPrice();
  const { checkoutCart, updateAllMenu, checkoutLoading, updateAllMenuLoading } = useCheckoutCart();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (cartLoading || totalPriceLoading || checkoutLoading || updateAllMenuLoading) {
    return <LoadingSvg />;
  }

  if (cartError || totalPriceError) {
    console.log(cartError);
    return null;
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F0F0F3",
        darker: "#053e85",
      },
      neutral: {
        main: "#FF7A00",
        contrastText: "#FFFFFF",
      },
    },
  });

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 200, md: 400 },
    bgcolor: "#F0F0F3",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
  };

  return (
    <>
      <Grid container>
        {cartData?.cart.map((item, key) => (
          <CartItem key={key} item={item} />
        ))}
      </Grid>
      <ThemeProvider theme={theme}>
        <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              padding: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingY: "40px",
              maxWidth: "100%",
            }}
          >
            {totalPriceData.cart_aggregate.aggregate.sum.quantity > 0 ? (
              <Paper elevation={4} sx={{ borderRadius: "20px" }}>
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
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <Typography variant="body1">
                      Total Price: $ {totalPriceData.cart_aggregate.aggregate.sum.totalPrice}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="neutral"
                      onClick={() => {
                        handleOpen();
                      }}
                    >
                      Checkout
                    </Button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="title" aria-describedby="description">
                      <Box sx={modalStyle}>
                        <IconButton
                          aria-label="delete"
                          size="medium"
                          color="error"
                          sx={{
                            position: "absolute",
                            right: 5,
                            top: 5,
                            backgroundColor: "primary.main",
                            "&:hover": { backgroundColor: "primary.main" },
                          }}
                          onClick={() => handleClose()}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                        {totalPriceData.cart_aggregate.aggregate.sum.quantity > 1 ? (
                          <Typography id="title" variant="h6" component="h2">
                            Items : {totalPriceData.cart_aggregate.aggregate.sum.quantity} menus
                          </Typography>
                        ) : (
                          <Typography id="title" variant="h6" component="h2">
                            Item : {totalPriceData.cart_aggregate.aggregate.sum.quantity} menu
                          </Typography>
                        )}
                        <Typography id="title" variant="h6" component="h2">
                          Price : $ {totalPriceData.cart_aggregate.aggregate.sum.totalPrice}
                        </Typography>
                        <Typography gutterBottom id="description" sx={{ mt: 2 }}>
                          Are you sure want to checkout?
                        </Typography>
                        <Button
                          variant="contained"
                          color="neutral"
                          size="small"
                          sx={{ marginTop: "10px", justifyContent: "center" }}
                          onClick={() => {
                            checkoutCart();
                            updateAllMenu();
                          }}
                        >
                          <Link style={{ textDecoration: "none", color: "#FFFFFF" }} to="/home">
                            Proceed to Checkout
                          </Link>
                        </Button>
                      </Box>
                    </Modal>
                  </Box>
                </Box>
              </Paper>
            ) : (
              <Box display="flex" alignItems="center" justifyContent="center">
                <Box
                  component="img"
                  sx={{ objectFit: "cover", width: "100%", height: "100%" }}
                  src="https://firebasestorage.googleapis.com/v0/b/mini-project-12ede.appspot.com/o/assets%2FEmptyCart.png?alt=media&token=66ee8113-2a76-4644-93ff-1d9f8127e5c5"
                  alt="logo"
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default CartMenu;
