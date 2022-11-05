import React from "react";
import { Avatar, CardActionArea, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Review = ({ item }) => {
  return (
    <>
      <Grid item xs={12} md={4} sx={{ padding: "40px", maxWidth: "100%" }}>
        <Paper elevation={4}>
          <CardActionArea>
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
                  padding: "20px",
                }}
              >
                <Box sx={{ display: " flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                  <Avatar alt={item.name} src={item.image} sx={{ width: 100, height: 100 }} />
                </Box>
                <Typography variant="h6" paddingBottom={2}>
                  {item.name}
                </Typography>
                <Box sx={{ paddingBottom: "15px" }}>
                  <Rating name="read-only" value={item.rating} readOnly />
                </Box>
                <Typography variant="body1">{item.comment}</Typography>
              </Box>
            </Box>
          </CardActionArea>
        </Paper>
      </Grid>
    </>
  );
};

export default Review;
