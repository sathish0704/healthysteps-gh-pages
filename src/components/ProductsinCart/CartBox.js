import React, { useEffect } from "react";
import { Container, Drawer } from "@mui/material";
import Cart from "./Cart";
import ProductsComponent from "./ProductsComponent";
import GroceriesComponent from "./GroceriesComponent";
import ImagesGrid from "../ImagesGrid";
import ImagesGrid2 from "../ImagesGrid2";
import RiceComponent from "./RiceComponent";

// Define the products category data
const products = [
  {
    id: 21,
    title: "Healthy Step Cow Milk",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/f6b009dc-38dc-406b-b532-09fc899c543b.png?updatedAt=1687176238053",
    price: 50,
    mrp: 55,
    weight: 1, // in liters
    weightUnit: "L",
  },
  {
    id: 22,
    title: "A2 Paneer",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/6a4f43f1-15b2-4f87-ada4-e39ef9a5cf35.jpg?updatedAt=1687176215598",
    price: 140,
    mrp: 150,
    weight: 250, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 23,
    title: "Ghee",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/ea4cce5f-6d50-4b95-8e25-af8eac126338.jpg?updatedAt=1687176238011",
    price: 300,
    mrp: 320,
    weight: 500, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 24,
    title: "Yogurt",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/a0d87091-88bc-4cc0-aed2-95e7b3fe56d3.png?updatedAt=1687176229323",
    price: 30,
    mrp: 35,
    weight: 500, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 25,
    title: "Butter",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/960ddbe0-c3cd-424a-a741-275d701bfacc.jpg?updatedAt=1687176223352",
    price: 80,
    mrp: 85,
    weight: 200, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 26,
    title: "Cheese",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/9edade00-2346-45c9-bfd3-b2aa6af9a3b4.jpg?updatedAt=1687176223541",
    price: 100,
    mrp: 110,
    weight: 250, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 27,
    title: "Flavored Milk",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/48b699ca-b8bc-4ac1-8f86-5370ae8e3634.png?updatedAt=1687176215657",
    price: 40,
    mrp: 45,
    weight: 200, // in milliliters
    weightUnit: "ml",
  },
  {
    id: 28,
    title: "Curd",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/99c6753e-c646-44ca-8ad3-6da465c03ed7.jpg?updatedAt=1687176223206",
    price: 20,
    mrp: 25,
    weight: 250, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 29,
    title: "Ice Cream",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/bc80d5a0-8891-426c-8be3-c5f395550c93.jpg?updatedAt=1687176228775",
    price: 70,
    mrp: 80,
    weight: 500, // in milliliters
    weightUnit: "ml",
  },
  {
    id: 30,
    title: "Milk Powder",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/a0d87091-88bc-4cc0-aed2-95e7b3fe56d3.png?updatedAt=1687176229323",
    price: 200,
    mrp: 220,
    weight: 500, // in grams
    weightUnit: "Kgs",
  },
];

// Define the groceries category data
const groceries = [
  {
    id: 11,
    title: "Healthy Step Cow Milk",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/f6b009dc-38dc-406b-b532-09fc899c543b.png?updatedAt=1687176238053",
    price: 50,
    mrp: 55,
    weight: 1, // in liters
    weightUnit: "L",
  },
  {
    id: 12,
    title: "A2 Paneer",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/6a4f43f1-15b2-4f87-ada4-e39ef9a5cf35.jpg?updatedAt=1687176215598",
    price: 140,
    mrp: 150,
    weight: 250, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 13,
    title: "Ghee",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/ea4cce5f-6d50-4b95-8e25-af8eac126338.jpg?updatedAt=1687176238011",
    price: 300,
    mrp: 320,
    weight: 500, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 14,
    title: "Yogurt",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/a0d87091-88bc-4cc0-aed2-95e7b3fe56d3.png?updatedAt=1687176229323",
    price: 30,
    mrp: 35,
    weight: 500, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 15,
    title: "Butter",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/960ddbe0-c3cd-424a-a741-275d701bfacc.jpg?updatedAt=1687176223352",
    price: 80,
    mrp: 85,
    weight: 200, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 16,
    title: "Cheese",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/9edade00-2346-45c9-bfd3-b2aa6af9a3b4.jpg?updatedAt=1687176223541",
    price: 100,
    mrp: 110,
    weight: 250, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 17,
    title: "Flavored Milk",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/48b699ca-b8bc-4ac1-8f86-5370ae8e3634.png?updatedAt=1687176215657",
    price: 40,
    mrp: 45,
    weight: 200, // in milliliters
    weightUnit: "ml",
  },
  {
    id: 18,
    title: "Curd",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/99c6753e-c646-44ca-8ad3-6da465c03ed7.jpg?updatedAt=1687176223206",
    price: 20,
    mrp: 25,
    weight: 250, // in grams
    weightUnit: "Kgs",
  },
  {
    id: 19,
    title: "Ice Cream",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/bc80d5a0-8891-426c-8be3-c5f395550c93.jpg?updatedAt=1687176228775",
    price: 70,
    mrp: 80,
    weight: 500, // in milliliters
    weightUnit: "ml",
  },
  {
    id: 20,
    title: "Milk Powder",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/a0d87091-88bc-4cc0-aed2-95e7b3fe56d3.png?updatedAt=1687176229323",
    price: 200,
    mrp: 220,
    weight: 500, // in grams
    weightUnit: "Kgs",
  },
];

// Define the rice category data
const rice = [
  {
    id: 1,
    title: "Basmati Rice",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/fc2af936-d425-444d-9a77-57930bddf0f1.jpg?updatedAt=1687413167723",
    price: 50,
    mrp: 55,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 2,
    title: "Brown Rice",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/f604b02a-1d9a-42d9-bd68-d9080fbeb5d7.jpg?updatedAt=1687413158176",
    price: 60,
    mrp: 65,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 3,
    title: "Sona Masoori Rice",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/fafb538f-07ff-4b11-83a9-adcec86d00fe.jpg?updatedAt=1687413158129",
    price: 45,
    mrp: 50,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 4,
    title: "Jasmine Rice",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/c0af2511-3ade-4c74-8dd1-84ebe75789f4.jpg?updatedAt=1687413156982",
    price: 55,
    mrp: 60,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 5,
    title: "Wild Rice",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/a565fcd8-ef67-4bff-ad42-52e42da58a3f.jpg?updatedAt=1687413153126",
    price: 70,
    mrp: 75,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 6,
    title: "Rice 6",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/960ddbe0-c3cd-424a-a741-275d701bfacc.jpg?updatedAt=1687413153123",
    price: 80,
    mrp: 85,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 7,
    title: "Rice 7",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/843fb17b-2562-4add-bc43-9a6c52baeceb.jpg?updatedAt=1687413153070",
    price: 90,
    mrp: 95,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 8,
    title: "Rice 8",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/8f9b0a39-83a8-4080-99be-35d5347635fd.jpg?updatedAt=1687413153060",
    price: 100,
    mrp: 105,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 9,
    title: "Rice 9",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/81f72e15-94a6-40a9-8356-a2382f9d80ef.jpg?updatedAt=1687413152317",
    price: 110,
    mrp: 115,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 10,
    title: "Rice 10",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/560fe26d-fb7f-400d-a368-ec3648816cbd.jpg?updatedAt=1687413148871",
    price: 120,
    mrp: 125,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 11,
    title: "Rice 11",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/3f897310-44a9-4612-91d5-9054b6e591eb.jpg?updatedAt=1687413148848",
    price: 130,
    mrp: 135,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 12,
    title: "Rice 12",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/2de1b1c5-ab69-43bf-9e9c-7654e915c77d.jpg?updatedAt=1687413148828",
    price: 140,
    mrp: 145,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 13,
    title: "Rice 13",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/314f64d9-2de2-4374-add2-359c93cf8ece.jpg?updatedAt=1687413148820",
    price: 150,
    mrp: 155,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
  {
    id: 14,
    title: "Rice 14",
    image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/rice/1fd1fa45-a6ec-48b5-9d29-c2ae094c2126.jpg?updatedAt=1687413148817",
    price: 160,
    mrp: 165,
    weight: 1, // in kilograms
    weightUnit: "Kgs",
  },
];

const CartBox = ({
  isCartDrawerOpen,
  setIsCartDrawerOpen,
  onCartItemCountChange,
}) => {
  const [cartItems, setCartItems] = React.useState([]);
  const [cartEmpty, setCartEmpty] = React.useState(false);


  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      setCartEmpty(false); 
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
    setCartEmpty(true);
    // window.location.reload();
  };

  // Call the onCartItemCountChange function whenever the cartItems change
  useEffect(() => {
    onCartItemCountChange(cartItems.length);
  }, [cartItems, onCartItemCountChange]);

  return (
    <div>
      <Container maxWidth="xxl">

        {/* Products component */}
        <ProductsComponent
          products={products}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          checkEmpty={cartEmpty}
        />

        <ImagesGrid />

        {/* RiceComponent */}
        <RiceComponent
          products={rice}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          checkEmpty={cartEmpty}
        />

        <ImagesGrid2 />

        {/* Groceries component */}
        <GroceriesComponent
          products={groceries}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          checkEmpty={cartEmpty}
        />

      </Container>


{/* <Cart in drawer component handled by cart icon */}
      <Drawer
        PaperProps={{
          sx: {
            width: {
              sm: "80vw",
              xs: "80vw",
              lg: "40vw",
              md: "40vw",
              xl: "40vw",
            },
          },
        }}
        anchor="right"
        open={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onClearCart={handleClearCart}          
        />
      </Drawer>
    </div>
  );
};

export default CartBox;
