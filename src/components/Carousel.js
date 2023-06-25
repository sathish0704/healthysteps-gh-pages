import React, { useEffect, useState } from "react";
import { Box, IconButton, useTheme, Container } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Carousel = ({ images, interval = 3000, width, height }) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Start the timer for automatic slide transition
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Clear the timer on component unmount or when images/interval change
    return () => clearInterval(timer);
  }, [images, interval]);

  const handlePrev = () => {
    // Move to the previous slide
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    // Move to the next slide
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Container maxWidth={"xxl"}>
      <Box
        position="relative"
        width={width}
        height={height}
        overflow={"hidden"}
        mt={2}
      >
        {/* Previous slide button */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: theme.spacing(1),
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          onClick={handlePrev}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        {/* Next slide button */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: theme.spacing(1),
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          onClick={handleNext}
        >
          <KeyboardArrowRightIcon />
        </IconButton>

        {/* Slide container */}
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {/* Render each slide */}
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                width: "100%",
                height: "auto",
                display: "flex",
              }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ width: "100%", maxHeight: "600px", objectFit: "fill" }}
              />
            </div>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default Carousel;
