import React, { useState } from "react";
import Carousel from "./components/Carousel";
import CategoryMenu from "./components/CategoryMenu";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import CartBox from "./components/ProductsinCart/CartBox";
import { Button } from "@mui/material";
import "@fontsource/roboto";

function App() {
  const images = [
    "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/1687264635816.jpg?updatedAt=1687264679363",
    "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/985dff66-4904-44f3-b07b-88bc2f6fdcb8.jpg?updatedAt=1687176223529",
    "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/4e6196fa-e1bd-4403-8518-9affd623fcf3.jpg?updatedAt=1687176215667",
    "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/1687264635816.jpg?updatedAt=1687264679363",
    "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/985dff66-4904-44f3-b07b-88bc2f6fdcb8.jpg?updatedAt=1687176223529",
    "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/4e6196fa-e1bd-4403-8518-9affd623fcf3.jpg?updatedAt=1687176215667",
    "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/1687264635816.jpg?updatedAt=1687264679363",
    "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/985dff66-4904-44f3-b07b-88bc2f6fdcb8.jpg?updatedAt=1687176223529",
    "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/4e6196fa-e1bd-4403-8518-9affd623fcf3.jpg?updatedAt=1687176215667",
  ];

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleCartItemCountChange = (count) => {
    setCartItemCount(count);
  };

  const openWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=9841666819",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div>
      <NavigationBar
        setIsCartDrawerOpen={setIsCartDrawerOpen}
        cartItemCount={cartItemCount}
      />
      <CategoryMenu />
      <Carousel images={images} width="100%" height="auto" />
      <CartBox
        isCartDrawerOpen={isCartDrawerOpen}
        setIsCartDrawerOpen={setIsCartDrawerOpen}
        onCartItemCountChange={handleCartItemCountChange}
      />
      <Footer />
      {/* whatsapp sticky icon for small screens */}
      <Button
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: {
            sm: "block",
            xs: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          borderRadius: 100,
          boxShadow: 50,
          "&:hover": {
            backgroundColor: "success.main",
            color: "primary.contrastText",
          },
        }}
        onClick={openWhatsApp}
      >
        <img
          alt="whatsapp for orders"
          src="https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/icons8-whatsapp-480.png?updatedAt=1687436609662"
          width="40px"
          height="40px"
        />
      </Button>
    </div>
  );
}

export default App;
