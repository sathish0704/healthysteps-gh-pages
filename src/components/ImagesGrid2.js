import { Container, Grid } from "@mui/material";
import React from "react";

export default function ImagesGrid2() {
  return (
    <>
    <Container maxWidth={"xxl"}>
      <Grid container spacing={1} mt={2} >
        <Grid item md={6}>
          <img
            src={
              "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/9f3f9a2b-6d7b-4464-837b-de3d66416eb3.jpg?updatedAt=1687176228650"
            }
            alt={"images"}
            style={{ width: "100%", maxHeight: "600px", objectFit: "fill",borderRadius:"5px" }}
          />
        </Grid>        
        <Grid item md={6}>
          <img
            src={
              "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/355a7215-8789-49a6-a17a-697c55b09408.jpg?updatedAt=1687176209643"
            }
            alt={"images"}
            style={{ width: "100%", maxHeight: "600px", objectFit: "fill",borderRadius:"5px" }}
          />
        </Grid>
      </Grid>
      </Container>
    </>
  );
}
