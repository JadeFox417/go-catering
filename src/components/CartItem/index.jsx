import React from "react";
import LoadingSvg from "../Loading/LoadingSvg";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import useDeleteCartItem from "../../hooks/mutations/useDeleteCartItem";
import useUpdateCartItem from "../../hooks/mutations/useUpdateCartItem";
import useUpdateMenu from "../../hooks/mutations/useUpdateMenu";

const CartItem = ({ item }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F0F0F3",
        darker: "#053e85",
      },
      neutral: {
        main: "#FF7A00",
        contrastText: "#ffffff",
      },
    },
  });

  const { deleteCartItem, deleteLoading } = useDeleteCartItem();
  const { updateCart } = useUpdateCartItem();
  const { updateMenuFalse } = useUpdateMenu();

  const handleUpdateCart = (id, quantity, totalPrice) => {
    updateCart({
      variables: {
        id,
        quantity,
        totalPrice,
      },
    });
  };

  if (deleteLoading) {
    return <LoadingSvg />;
  }

  const handleDelete = (id) => {
    deleteCartItem({
      variables: {
        id,
      },
    });
  };

  const handleUpdateMenu = (id) => {
    updateMenuFalse({
      variables: {
        id,
      },
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          item
          xs={12}
          md={4}
          alignItems="center"
          justifyContent="center"
          sx={{ display: "flex", paddingTop: "5vh" }}
        >
          <Card sx={{ width: 300, height: 500, backgroundColor: "primary.main", position: "relative" }}>
            <CardActions sx={{ position: "absolute", zIndex: 99, right: 0 }}>
              <IconButton
                aria-label="delete"
                size="small"
                color="error"
                sx={{ backgroundColor: "primary.main", "&:hover": { backgroundColor: "primary.main" } }}
                onClick={() => {
                  handleDelete(item.id);
                  handleUpdateMenu(item.menu.id);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </CardActions>
            <CardActionArea sx={{ height: 435 }}>
              <CardMedia component="img" height="250" image={item.menu.image} loading="lazy" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.menu.name}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
                  {item.menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
              <Button
                size="small"
                color="neutral"
                variant="contained"
                onClick={() =>
                  handleUpdateCart(
                    item.id,
                    item.quantity - 1,
                    (item.totalPrice = (item.quantity - 1) * item.menu.price)
                  )
                }
                disabled={item.quantity === 1}
              >
                -
              </Button>
              <Typography gutterBottom variant="subtitle2">
                {item.quantity}
              </Typography>
              <Button
                size="small"
                color="neutral"
                variant="contained"
                onClick={() =>
                  handleUpdateCart(
                    item.id,
                    item.quantity + 1,
                    (item.totalPrice = (item.quantity + 1) * item.menu.price)
                  )
                }
                disabled={item.quantity === 10}
              >
                +
              </Button>
              <Typography gutterBottom variant="subtitle2">
                $ {item.menu.price * item.quantity}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default CartItem;
