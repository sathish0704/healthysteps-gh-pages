import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Button,
  CardMedia,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = ({
  cartItems,
  onRemoveFromCart,
  onUpdateQuantity,
  onClearCart,
}) => {
  // Calculate total price of items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calculate total MRP (Maximum Retail Price) savings
  const getTotalMRP = () => {
    const MRP = cartItems.reduce(
      (total, item) => total + item.mrp * item.quantity,
      0
    );

    return Math.floor(MRP - getTotalPrice());
  };

  // Handle incrementing item quantity in the cart
  const handleIncrement = (productId) => {
    const updatedQuantity =
      cartItems.find((item) => item.id === productId).quantity + 1;
    onUpdateQuantity(productId, updatedQuantity);
  };

  // Handle decrementing item quantity in the cart
  const handleDecrement = (productId) => {
    const updatedQuantity =
      cartItems.find((item) => item.id === productId).quantity - 1;
    onUpdateQuantity(productId, updatedQuantity);
  };

  return (
    <>
      {/* Cart header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        m={2}
        sx={{
          position: "sticky",
          zIndex: 1,
          bgcolor: "white",
          top: 0,
          width: "auto",
          height: "auto",
        }}
      >
        <Typography variant="h5" m={2} textAlign={"left"} color="success">
          Shopping Cart ({cartItems.length} Items)
        </Typography>
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={onClearCart}
          startIcon={<RemoveShoppingCartIcon />}
        >
          Clear Cart
        </Button>
      </Stack>
      <Divider />

      {/* Cart items */}
      {cartItems && cartItems.length === 0 ? ( // Empty cart
        <Stack justifyContent="center" alignItems="center" spacing={2} m={2}>
          <CardMedia
            component="img"
            sx={{ width: "50%", height: "auto", objectFit: "contain", mt: 25 }}
            image="https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/empty-cart-2.png?updatedAt=1687176238062"
          />
          <Button
            size="large"
            variant="contained"
            color="success"
            fullWidth
            sx={{ position: "absolute", bottom: "20px", m: 10 }}
          >
            Proceed to Checkout
          </Button>
        </Stack>
      ) : (
        // Cart with items
        <>
          <Stack direction={"column"} pb={45}>
            <Grid xs={8} overflow={"clip"}>
              <List>
                {cartItems.map((item) => (
                  <ListItem key={item.id} divider>
                    <CardMedia
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        maxWidth: "70px",
                        height: "70px",
                        objectFit: "contain",
                        marginRight: "10px",
                      }}
                    />

                    <Stack direction="row" justifyContent="space-between">
                      <Stack direction={"row"}>
                        <Stack direction={"column"}>
                          <Typography variant="h6">{item.title}</Typography>
                          <Typography variant="caption">
                            Price: ₹ {item.price * item.quantity}
                          </Typography>

                          <Grid bgcolor={"success"}>
                            {/* Decrement quantity */}
                            <IconButton
                              color="success"
                              edge="end"
                              aria-label="decrement"
                              onClick={() => handleDecrement(item.id)}
                              disabled={item.quantity === 1}
                            >
                              <RemoveIcon />
                            </IconButton>
                            <Typography variant="caption" mx={2}>
                              {item.quantity}
                            </Typography>
                            {/* Increment quantity */}
                            <IconButton
                              color="success"
                              edge="end"
                              aria-label="increment"
                              onClick={() => handleIncrement(item.id)}
                            >
                              <AddIcon />
                            </IconButton>
                          </Grid>
                        </Stack>
                      </Stack>
                      <ListItemSecondaryAction>
                        {/* Remove item from cart */}
                        <Stack
                          direction={"column"}
                          mr={2}
                          justifyContent={"flex-end"}
                          alignItems={"flex-end"}
                        >
                          <IconButton
                            color="inherit"
                            edge="end"
                            aria-label="remove"
                            onClick={() => onRemoveFromCart(item.id)}
                          >
                            <ClearIcon />
                          </IconButton>
                          <Typography variant="body2" color="text.secondary">
                            <del>Market Price Rs: {item.mrp}</del>
                          </Typography>
                        </Stack>
                      </ListItemSecondaryAction>
                    </Stack>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Cart summary */}
            <Grid
              xs={4}
              boxShadow={3}
              sx={{
                position: "fixed",
                bottom: 0,
                width: {
                  sm: "80vw",
                  xs: "80vw",
                  lg: "40vw",
                  md: "40vw",
                  xl: "40vw",
                },
                height: "auto",
              }}
            >
              <Grid p={5} sx={{ backgroundColor: "#E6FFFD" }}>
                {/* Savings */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  m={2}
                >
                  <Typography
                    variant="body1"
                    m={2}
                    textAlign={"left"}
                    color="success"
                    fontWeight={600}
                  >
                    Savings
                  </Typography>
                  <Typography
                    variant="body1"
                    m={2}
                    textAlign={"right"}
                    color="success"
                    fontWeight={600}
                  >
                    ₹{getTotalMRP()}
                  </Typography>
                </Stack>
                {/* Delivery Charges */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  m={2}
                >
                  <Typography
                    variant="body1"
                    m={2}
                    textAlign={"left"}
                    color="success"
                    fontWeight={600}
                  >
                    Delivery Charges
                  </Typography>
                  <Typography
                    variant="body1"
                    m={2}
                    textAlign={"right"}
                    color="success"
                    fontWeight={600}
                  >
                    ₹ 0.00
                  </Typography>
                </Stack>
                {/* Total Price */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  m={2}
                >
                  <Typography
                    variant="body1"
                    m={2}
                    textAlign={"left"}
                    color="success"
                    fontWeight={600}
                  >
                    Total:
                  </Typography>
                  <Typography
                    variant="body1"
                    m={2}
                    textAlign={"right"}
                    color="success"
                    fontWeight={600}
                  >
                    ₹{getTotalPrice()}
                  </Typography>
                </Stack>
                {/* Proceed to Checkout */}
                <Button variant="outlined" color="success" fullWidth m={2}>
                  Proceed to Checkout
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </>
      )}
    </>
  );
};

export default Cart;
