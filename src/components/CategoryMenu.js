import React, { useRef, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";


// Define the categories array
const categories = [
  {
    id: 1,
    title: "All Categories",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/All-categories.png?updatedAt=1687176228781",
  },
  {
    id: 2,
    title: "Top Offers",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/top-offers.png?updatedAt=1687176242659",
  },
  {
    id: 3,
    title: "Dairy Products",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/a0d87091-88bc-4cc0-aed2-95e7b3fe56d3.png?updatedAt=1687176229323",
  },
  {
    id: 4,
    title: "Grocery",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/60c95260-5cce-407a-8c06-a26537e570e1.jpg?updatedAt=1687176215714",
  },
  {
    id: 5,
    title: "Dry Fruits",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/9edade00-2346-45c9-bfd3-b2aa6af9a3b4.jpg?updatedAt=1687176223541",
  },
  {
    id: 6,
    title: "Traditional Rice & Millets",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/3608fbf6-9404-48d4-abf3-70fbaf34ee30.jpg?updatedAt=1687176209663",
  },
  {
    id: 7,
    title: "Ready To Cook",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/fc181ec9-b252-43be-810c-2241990a2c07.jpg?updatedAt=1687176238033",
  },
  {
    id: 8,
    title: "Vegetables & Fruits",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/fc181ec9-b252-43be-810c-2241990a2c07.jpg?updatedAt=1687176238033",
  },
  {
    id: 9,
    title: "Personal Care",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/48dadeae-e8a4-4352-b04a-11b9d6c68a99.jpg?updatedAt=1687176215650",
  },
  {
    id: 10,
    title: "Household Care",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/e09d9269-8973-465e-8fae-f0c883fa2fd9.jpg?updatedAt=1687176237947",
  },
  {
    id: 11,
    title: "Pooja Items",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/857d93ae-2d93-44d5-bf4c-7e290178a5da.png?updatedAt=1687176223430",
  },
  {
    id: 12,
    title: "Traditional Snacks & Sweet",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/651cb081-4486-4822-9734-a89d9f2a4bc5.jpg?updatedAt=1687176215962",
  },
  {
    id: 13,
    title: "Traditional Rice & Millets",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/9edade00-2346-45c9-bfd3-b2aa6af9a3b4.jpg?updatedAt=1687176223541",
  },
  {
    id: 14,
    title: "Ready To Cook",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/fc181ec9-b252-43be-810c-2241990a2c07.jpg?updatedAt=1687176238033",
  },
  {
    id: 15,
    title: "Vegetables & Fruits",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/fc181ec9-b252-43be-810c-2241990a2c07.jpg?updatedAt=1687176238033",
  },
  {
    id: 16,
    title: "Personal Care",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/48dadeae-e8a4-4352-b04a-11b9d6c68a99.jpg?updatedAt=1687176215650",
  },
  {
    id: 17,
    title: "Household Care",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/e09d9269-8973-465e-8fae-f0c883fa2fd9.jpg?updatedAt=1687176237947",
  },
  {
    id: 18,
    title: "Pooja Items",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/857d93ae-2d93-44d5-bf4c-7e290178a5da.png?updatedAt=1687176223430",
  },
  {
    id: 19,
    title: "Traditional Snacks & Sweet",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/651cb081-4486-4822-9734-a89d9f2a4bc5.jpg?updatedAt=1687176215962",
  },
];


const CategoryMenu = () => {

  // Create a reference to the container element
  const containerRef = useRef(null);
    
  // State variables for dragging behavior
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Event handler for mouse down
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // Event handler for mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Event handler for mouse move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      style={{ overflowX: "hidden" }}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Grid
        container
        mt={1}
        sx={{ display: "flex", flexWrap: "nowrap" }}
        bgcolor={"#ddecd6"}
      >
        {categories.map((category) => (
          <Stack
            bgcolor={"#ddecd6"}
            key={category.id}
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ cursor: "pointer", minWidth: "160px" }}
          >
            <img
              src={category.image}
              alt={category.title}
              style={{
                maxWidth: "75px",
                height: "75px",
                borderRadius: "50%",
                backgroundColor: "white",
                objectFit: "contain",
              }}
            />
            <Typography variant="body2" align="center" mt={1}>
              {category.title}
            </Typography>
          </Stack>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryMenu;
