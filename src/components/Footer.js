import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadIcon from '@mui/icons-material/Markunread';

export default function Footer() {  
  return (
    <>
    <Grid  bgcolor={"#1e1e1e"} mt={2}  >
      <Grid container spacing={3} p={5}>
        <Grid item xs={12} md={3}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid sx={{ objectFit: "contain", maxWidth: "60%" }}>
              <img
                src="https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/logo.png?updatedAt=1687176242740"
                alt="Logo"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Typography variant="body1" color="white" m={2}>
                We work with a passion of taking challenges and creating new
                ones in advertising sector.
              </Typography>
              <Stack
                direction={"row"}
                color="white"
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                <FacebookIcon
                  style={{
                    transition:
                      "color 0.3s ease-in-out",
                    transform: "scale(1)",
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => (
                    (e.currentTarget.style.color = "green")
                  
                  )}
                  onMouseLeave={(e) => (
                    (e.currentTarget.style.color = "inherit")                   
                  )}
                />
                <TwitterIcon
                  style={{
                    transition: "color 0.3s ease-in-out",
                    transform: "scale(1)",
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "green")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "inherit")
                  }
                />
                <LanguageIcon
                  style={{
                    transition: "color 0.3s ease-in-out",
                    transform: "scale(1)",
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "green")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "inherit")
                  }
                />
                <InstagramIcon
                  style={{
                    transition: "color 0.3s ease-in-out",
                    transform: "scale(1)",
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "green")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "inherit")
                  }
                />
              </Stack>
            </Grid>
          </Stack>
        </Grid>

        <Grid item xs={12} md={3}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid
              sx={{ objectFit: "contain", maxWidth: "60%", color: "white" }}
            >
              <Typography variant="h4" color="white" textAlign="left" pl={2}>
                Links
              </Typography>

              <Stack
                direction={"column"}
                color="white"
                // spacing={1}
                justifyContent="flex-start"
                alignItems="start"
              >
                <Button
                  variant="text"
                  color="success"
                  sx={{ color: "white", textTransform: "capitalize" }}
                  startIcon={<KeyboardArrowRightIcon />}
                >
                  Home
                </Button>
                <Button
                  variant="text"
                  color="success"
                  sx={{ color: "white", textTransform: "capitalize" }}
                  startIcon={<KeyboardArrowRightIcon />}
                >
                  About us
                </Button>
                <Button
                  variant="text"
                  color="success"
                  sx={{ color: "white", textTransform: "capitalize" }}
                  startIcon={<KeyboardArrowRightIcon />}
                >
                  Privacy Policy
                </Button>
                <Button
                  variant="text"
                  color="success"
                  sx={{ color: "white", textTransform: "capitalize" }}
                  startIcon={<KeyboardArrowRightIcon />}
                >
                  Terms & Conditions
                </Button>
                <Button
                  variant="text"
                  color="success"
                  sx={{ color: "white", textTransform: "capitalize" }}
                  startIcon={<KeyboardArrowRightIcon />}
                >
                  Refund & Cancellation
                </Button>
              </Stack>
            </Grid>
          </Stack>
        </Grid>

        <Grid item xs={12} md={3}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid
              sx={{ objectFit: "contain", maxWidth: "60%", color: "white" }}
            >
              <Typography variant="h4" color="white" textAlign="left" pl={2}>
                Official info:
              </Typography>

              <Stack
                direction={"column"}
                color="white"
                // spacing={1}
                justifyContent="flex-start"
                alignItems="start"
              >
                <Button
                  variant="text"
                  color="success"
                  sx={{ color: "#94C973", textTransform: "capitalize", textAlign:"left", fontWeight:"500" }}
                  startIcon={<LocationOnIcon color="error" />}
                >
                  HealthySteps <br></br>
                  Address: 5 Arjun Flat ,<br></br> 
                  Nanmangalam, Chennai,<br></br>
                  Tamil Nadu 600117<br></br> 
                  Chrompet Salai <br></br>
                  Nanmangalam 600117 <br></br>
                  9841666819
                </Button>
                <Button
                  variant="text"
                  color="success"
                  sx={{ color: "white", textTransform: "capitalize" }}
                  startIcon={<MarkunreadIcon color="success" />}
                  href="mailto:info@healthysteps.in"
                >
                  info@healthysteps.in
                </Button>
              </Stack>
            </Grid>
          </Stack>
        </Grid>

        <Grid item xs={12} md={3}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid
              sx={{ objectFit: "contain", maxWidth: "60%", color: "white" }}
            >
              <Typography variant="h4" color="white" textAlign="left" pl={2}>
              Download App
              </Typography>
              <Stack
                direction={"column"}
                color="white"                
              >                
                <Button
                  variant="text"
                  color="success"
                  sx={{ color: "white", textTransform: "capitalize" }}
                  href="https://play.google.com/store/apps/details?id=com.webpos.healthysteps"
                  target="_blank"
                >
                  <img
                src="https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/5a902dbf7f96951c82922875.png?updatedAt=1687244040512"
                alt="Logo"
                style={{
                  borderRadius: "10px",
                  maxWidth: "150px",
                  height: "auto",
                  objectFit:"cover"
                }}
              />
                </Button>
                <Button
                  variant="text"
                  color="success"
                  sx={{ color: "white", textTransform: "capitalize" }}
                  href="https://play.google.com/store/apps/details?id=com.webpos.healthysteps"
                  target="_blank"
                >
                 <img
                src="https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/5a902db97f96951c82922874.png?updatedAt=1687244040644"
                alt="Logo"
                style={{
                  borderRadius: "10px",
                  maxWidth: "150px",
                  height: "auto",
                  objectFit:"cover"
                }}
              />
                </Button>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="body2" color="white" textAlign={"center"} p={2}>© 2022 -Kassapos Software Solutions. All rights reserved.</Typography>
      </Grid>
    </>
  );
}
