import React, { useState, useEffect } from "react";
import {
  Typography,
  IconButton,
  Button,
  Stack,
  Grid,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Product = ({ product, onAddToCart, onRemoveFromCart, isCartEmpty }) => {
  const [quantity, setQuantity] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    // Reset product to initial state when the cart is cleared
    if (isCartEmpty) {
      setQuantity(0);
      setIsAddedToCart(false);
    }
  }, [isCartEmpty]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onAddToCart({ ...product, quantity: quantity + 1 });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onAddToCart({ ...product, quantity: quantity - 1 });
    } else if (quantity === 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onRemoveFromCart(product.id);
      setIsAddedToCart(false);
    }
  };

  const handleAddToCart = () => {
    setQuantity(1);
    onAddToCart({ ...product, quantity: 1 });
    setIsAddedToCart(true);
  };

  return (
    <>
      {/* Product card */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap={"nowrap"}
      >
        <Grid
          component={Paper}
          container
          p={1}
          maxWidth={"500px"}
          height={"400px"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              boxShadow: 5,
            },
          }}
        >
          {/* Product image */}
          <Grid item xs={12}>
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: "100%", height: "200px", objectFit: "contain" }}
            />
          </Grid>
          {/* Product title */}
          <Grid item xs={12}>
            <Typography variant="h6" component="div" textAlign="center"> 
              {product.title}
            </Typography>
          </Grid>
          {/* Weight unit and Wishlist button */}
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Typography variant="caption" color="text.secondary">
                {product.weightUnit}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                color="success"
                onClick={() => console.log("Add to Wishlist")}
              >
                <FavoriteIcon />
              </IconButton>
            </Grid>
          </Grid>
          {/* Price and MRP */}
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                Price: ₹{product.price}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ opacity: "0.5" }}
                color="text.secondary"
              >
                MRP: ₹<del>{product.mrp}</del>
              </Typography>
            </Grid>
          </Grid>
          {/* Add to Cart section */}
          <Grid item xs={12}>
            {isAddedToCart ? (
              // Quantity counter
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                bgcolor={"#ACE1AF"}
                borderRadius={2}
                sx={{
                  "&:hover": {
                    backgroundColor: "success.main",
                    color: "primary.contrastText",
                  },
                }}
              >
                <IconButton
                  size="small"
                  onClick={handleDecrement}
                  disabled={quantity === 1}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="button" width="100%" textAlign="center" component="span">
                  {quantity}
                </Typography>
                <IconButton size="small" onClick={handleIncrement}>
                  <AddIcon />
                </IconButton>
              </Stack>
            ) : (
              // Add to Cart button
              <Button
                variant="contained"
                color="success"
                fullWidth
                startIcon={<AddShoppingCartIcon />}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            )}
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Product;
