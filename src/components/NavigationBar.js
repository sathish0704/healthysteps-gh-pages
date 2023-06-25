import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Home, ShoppingCart, Menu } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { Badge, Grid, InputAdornment, Stack, Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import Categories from "./Categories";

// Styled Image component
const StyledImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    maxWidth: "60%",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

// Styled Button component
const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

// Styled Button Text component
const StyledButtonText = styled(Typography)(({ theme }) => ({
  display: "none",
  textTransform: "capitalize",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const NavigationBar = ({ setIsCartDrawerOpen, cartItemCount }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCartButtonClick = () => {
    setIsCartDrawerOpen(true);
  };

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", boxShadow: "10" }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid xs={2} sx={{ objectFit: "contain" }}>
              {/* Logo */}
              <StyledImage
                src="https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/logo.png?updatedAt=1687176242740"
                alt="Logo"
              />
            </Grid>

            <Stack
              xs={8}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              {/* Search TextField */}
              <TextField
                placeholder="Search for products..."
                color="success"
                size="small"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderBottom: "2px solid green",
                  borderRadius: "5px",
                  display: {
                    sm: "none",
                    xs: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
              />

              {/* Search TextField (Mobile) */}
              {isSearchOpen ? (
                <TextField
                  autoFocus
                  placeholder="Search for products..."
                  color="success"
                  fullWidth
                  size="small"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    borderBottom: "2px solid green",
                    borderRadius: "5px",
                    display: {
                      sm: "block",
                      xs: "block",
                      md: "none",
                      lg: "none",
                      xl: "none",
                    },
                    width: "200px",
                  }}
                />
              ) : (
                <IconButton
                  onClick={() => setIsSearchOpen(true)}
                  sx={{
                    display: {
                      sm: "block",
                      xs: "block",
                      md: "none",
                      lg: "none",
                      xl: "none",
                    },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              )}

              {/* Location Button */}
              <StyledButton
                variant="text"
                color="error"
                startIcon={<LocationOnIcon />}
              >
                <StyledButtonText
                  variant="caption"
                  color="initial"
                  fontWeight="600"
                >
                  Washermenpet <br></br>600021
                </StyledButtonText>
              </StyledButton>

              {/* Whatsapp Button */}
              <a
                href={"https://api.whatsapp.com/send?phone=9841666819"}
                target="_blank"
                style={{ textDecoration: "none" }}
                rel="noopener noreferrer"
              >
                <StyledButton
                  variant="outlined"
                  color="success"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    "&:hover": {
                      backgroundColor: "success.main",
                      color: "primary.contrastText",
                    },
                  }}
                >
                  <StyledButtonText variant="button" fontWeight={"600"}>
                    Whatsapp Only
                  </StyledButtonText>
                </StyledButton>
              </a>

              {/* Home Button */}
              <StyledButton variant="text" color="success" endIcon={<Home />}>
                <StyledButtonText
                  variant="button"
                  color="initial"
                  fontWeight="600"
                >
                  Home
                </StyledButtonText>
              </StyledButton>

              {/* Register Button */}
              <StyledButton
                variant="text"
                color="success"
                endIcon={<PersonAddAltIcon />}
              >
                <StyledButtonText
                  variant="button"
                  color="initial"
                  fontWeight="600"
                >
                  Register
                </StyledButtonText>
              </StyledButton>

              {/* Sign In Button */}
              <StyledButton
                variant="text"
                color="success"
                endIcon={<ManageAccountsIcon />}
              >
                <StyledButtonText
                  variant="button"
                  color="initial"
                  fontWeight="600"
                >
                  Sign in
                </StyledButtonText>
              </StyledButton>

              {/* Cart Button */}
              <IconButton
                sx={{ color: "black" }}
                onClick={handleCartButtonClick}
              >
                <Badge badgeContent={cartItemCount} color="success">
                  <ShoppingCart />
                </Badge>
              </IconButton>

              {/* Menu Button (Mobile) */}
              <IconButton
                color="default"
                aria-label="Open side bar"
                onClick={toggleDrawer}
                edge="start"
                sx={{
                  display: {
                    sm: "block",
                    xs: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                <Menu />
              </IconButton>
            </Stack>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        bgcolor="green"
      >
        {/* Logo */}
        <img
          src="https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/logo.png?updatedAt=1687176242740"
          alt="Logo"
          sx={{ maxWidth: "20px", height: "auto", objectFit: "contain", m: 2 }}
        />

        {/* Home Button */}
        <Button
          variant="outlined"
          color="success"
          startIcon={<Home />}
          borderRadius="0"
          sx={{ m: 1 }}
        >
          Home
        </Button>

        {/* Register Button */}
        <Button
          variant="outlined"
          color="success"
          startIcon={<PersonAddAltIcon />}
          sx={{ m: 1 }}
        >
          Register
        </Button>

        {/* Sign In Button */}
        <Button
          variant="outlined"
          color="success"
          startIcon={<ManageAccountsIcon />}
          sx={{ m: 1 }}
        >
          Sign in
        </Button>

        {/* Categories Component */}
        <Categories />
      </Drawer>
      
    </React.Fragment>
  );
};

export default NavigationBar;
