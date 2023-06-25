import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export default function NestedList() {
  const [open, setOpen] = React.useState({
    dairyProducts: false,
    groceries: false,
    personalCare: false,
    readyToCook: false,
    traditionalRiceMillets: false,
    traditionalSnacksSweet: false,
    vegetablesFruits: false,
  });

  const handleClick = (category) => {
    setOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, color: "#006A4E", bgcolor: "#4E39A" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ color: "#00693E", fontWeight: 800 }}
        >          
          Shop By Categories
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => handleClick("dairyProducts")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Dairy Products" />
        {open.dairyProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.dairyProducts} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Milk" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Cheese" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Yogurt" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("groceries")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Grocery" />
        {open.groceries ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.groceries} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Household Care" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Cleaning Supplies" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Laundry Detergent" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("personalCare")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Personal Care" />
        {open.personalCare ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.personalCare} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Shampoo" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Toothpaste" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Soap" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("readyToCook")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Ready To Cook" />
        {open.readyToCook ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.readyToCook} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Frozen Pizza" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Instant Noodles" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Canned Soup" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("traditionalRiceMillets")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Traditional Rice & Millets" />
        {open.traditionalRiceMillets ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.traditionalRiceMillets} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Basmati Rice" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Brown Rice" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Quinoa" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("traditionalSnacksSweet")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Traditional Snacks & Sweet" />
        {open.traditionalSnacksSweet ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.traditionalSnacksSweet} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Ladoo" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Mysore Pak" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Murukku" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("vegetablesFruits")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Vegetables & Fruits" />
        {open.vegetablesFruits ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.vegetablesFruits} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Apples" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Oranges" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Tomatoes" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
