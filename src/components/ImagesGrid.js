import { Grid } from "@mui/material";
import React from "react";

export default function ImagesGrid() {
  return (
    <>
      <Grid container spacing={4} mt={0.5}>
        {/* Grid item 1 */}
        <Grid item xs={4}>
          <img
            src={
              "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/ffd0ce7f-cc3b-4a8c-81a0-5ffcecd9a062.jpg?updatedAt=1687176238168"
            }
            alt={"images"}
            style={{
              width: "100%",
              maxHeight: "auto",
              objectFit: "fill",
              borderRadius: "5px",
            }}
          />
        </Grid>
        {/* Grid item 2 */}
        <Grid item xs={4}>
          <img
            src={
              "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/121bf62c-1edd-465a-9eab-616d32554365.jpg?updatedAt=1687176209648"
            }
            alt={"images"}
            style={{
              width: "100%",
              maxHeight: "auto",
              objectFit: "fill",
              borderRadius: "5px",
            }}
          />
        </Grid>
        {/* Grid item 3 */}
        <Grid item xs={4}>
          <img
            src={
              "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/284be662-5df5-4d2d-b364-69af34dab4c3.jpg?updatedAt=1687176209463"
            }
            alt={"images"}
            style={{
              width: "100%",
              maxHeight: "auto",
              objectFit: "fill",
              borderRadius: "5px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
