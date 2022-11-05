import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoadingSvg from "../Loading/LoadingSvg";
import useAddToCart from "../../hooks/mutations/useAddToCart";
import useUpdateMenu from "../../hooks/mutations/useUpdateMenu";

const ListItem = ({ item }) => {
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

  const { addToCart, addLoading } = useAddToCart();
  const { updateMenuTrue } = useUpdateMenu();

  if (addLoading) {
    return <LoadingSvg />;
  }

  const addNewItem = (menu_id, totalPrice) => {
    addToCart({
      variables: {
        menu_id,
        totalPrice,
      },
    });
  };

  const updateMenu = (id) => {
    updateMenuTrue({
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
          <Card sx={{ width: 300, height: 500, backgroundColor: "primary.main" }}>
            <CardActionArea sx={{ height: 435 }}>
              <CardMedia component="img" height="250" image={item.image} loading="lazy" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
              {item.inCart === false ? (
                <Button
                  size="small"
                  color="neutral"
                  variant="contained"
                  onClick={() => {
                    addNewItem(item.id, item.price);
                    updateMenu(item.id);
                  }}
                >
                  <ShoppingCartIcon />
                  Add to Cart
                </Button>
              ) : (
                <Button size="small" disabled>
                  <ShoppingCartIcon />
                  In Cart
                </Button>
              )}
              <Typography variant="subtitle2" sx={{ textAlign: "right" }}>
                $ {item.price}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default ListItem;
