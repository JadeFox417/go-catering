import React from "react";
import { Grid } from "@mui/material";
import ListItem from "../ListItem";
import LoadingSvg from "../Loading/LoadingSvg";
import useSubscriptionMenu from "../../hooks/subscriptions/useSubscriptionMenu";

const ListMenu = () => {
  const { menuData, menuLoading, menuError } = useSubscriptionMenu();

  if (menuLoading) {
    return <LoadingSvg />;
  }

  if (menuError) {
    console.log(menuError);
    return null;
  }

  return (
    <>
      <Grid container>
        {menuData?.menu.map((item, key) => (
          <ListItem key={key} item={item} />
        ))}
      </Grid>
    </>
  );
};

export default ListMenu;
