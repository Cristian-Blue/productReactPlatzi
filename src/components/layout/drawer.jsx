import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from "react-router-dom";

export const DrawerCustom = ({ open, width }) => {
  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: width, boxSizing: 'border-box' },

      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', p: 0 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/register">
              <ListItemIcon><InventoryIcon /></ListItemIcon>
              <ListItemText primary="Register product" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon><InventoryIcon /></ListItemIcon>
              <ListItemText primary="Product" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/category">
              <ListItemIcon><CategoryIcon /></ListItemIcon>
              <ListItemText primary="Category" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/users">
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
