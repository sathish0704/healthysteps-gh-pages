import React, { useRef, useState } from "react";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import Product from "./Product";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const RiceComponent = ({ products, onAddToCart, onRemoveFromCart,checkEmpty }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse down event handler
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // Mouse up event handler
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mouse move event handler
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Scroll to previous button click event handler
  const handlePrevButtonClick = () => {
    containerRef.current.scrollLeft -= 300; // Adjust the scroll amount as per your preference
  };

  // Scroll to next button click event handler
  const handleNextButtonClick = () => {
    containerRef.current.scrollLeft += 300; // Adjust the scroll amount as per your preference
  };

  // Scroll end event handler
  const handleScrollEnd = () => {
    containerRef.current.style.scrollBehavior = "smooth";
  };

  return (
    <Grid style={{ position: "relative" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        my={2}
        p={1}
        bgcolor="#e0f2f1"
        borderRadius={1}
      >
        <Typography variant="h5" color="initial">
          Vegetables & Fruits
        </Typography>
        <Button variant="contained" size="small" color="success">
          VIEW ALL
        </Button>
      </Stack>
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
            <ArrowBackIosIcon color="sucesss" />
          </IconButton>
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

export default RiceComponent;
