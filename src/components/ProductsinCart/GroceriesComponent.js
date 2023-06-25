import React, { useRef, useState } from "react";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import Product from "./Product";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const GroceriesComponent = ({ products, onAddToCart, onRemoveFromCart,checkEmpty }) => {
  // Ref to the container element
  const containerRef = useRef(null);

  // State variables for drag scrolling
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Event handler for mouse down event
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // Event handler for mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Event handler for mouse move event
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Event handler for previous button click
  const handlePrevButtonClick = () => {
    containerRef.current.scrollLeft -= 300; // Adjust the scroll amount as per your preference
  };

  // Event handler for next button click
  const handleNextButtonClick = () => {
    containerRef.current.scrollLeft += 300; // Adjust the scroll amount as per your preference
  };

  // Event handler for scroll end
  const handleScrollEnd = () => {
    containerRef.current.style.scrollBehavior = "smooth";
  };

  return (
    <Grid style={{ position: "relative" }}>
      {/* Header section */}
      <Stack
        direction="row"
        justifyContent="space-between"
        my={2}
        p={1}
        bgcolor="#e0f2f1"
        borderRadius={1}
      >
        <Typography variant="h5" color="initial">
          Grocery
        </Typography>
        <Button variant="contained" size="small" color="success">
          VIEW ALL
        </Button>
      </Stack>

      {/* Products grid section */}
      <Grid
        style={{
          overflow: "auto",
          overflowX: "hidden",
        }}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScrollEnd}
      >
        <Grid sx={{ display: "flex" }}>
          {/* Previous button */}
          <IconButton
            color="success"
            onClick={handlePrevButtonClick}
            style={{
              position: "absolute",
              left: 0,
              bottom: "45%",
              zIndex: 1,
            }}
          >
            <ArrowBackIosIcon color="success" />
          </IconButton>

          {/* Product items */}
          {products.map((product) => (
            <Stack
              item
              key={product.id}
              sx={{ cursor: "pointer", minWidth: "250px", p: 1 }}
              ml={2}
            >
              <Product
                product={product}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
                isCartEmpty={checkEmpty}
              />
            </Stack>
          ))}

          {/* Next button */}
          <IconButton
            color="success"
            onClick={handleNextButtonClick}
            style={{
              position: "absolute",
              right: 0,
              zIndex: 1,
              bottom: "45%",
            }}
          >
            <ArrowForwardIosRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GroceriesComponent;
