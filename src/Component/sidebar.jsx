"use client"

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Divider,
} from "@mui/material"
import {
  Label,
  CheckCircle, // Import CheckCircle
  Delete, //Import Delete
} from "@mui/icons-material"

const DRAWER_WIDTH = 240

export function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          backgroundColor: "background.paper",
          borderRight: "1px solid",
          borderColor: "divider",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontSize:'1.06rem', mb: 2 }}>
          YOUR SECOND BRAIN
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "primary.main",
            color: "background.paper",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          + New Data
        </Button>
      </Box>
      <List>
        <ListItem>
          <ListItemText primary="Generic Filter" />
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Label />
            </ListItemIcon>
            <ListItemText primary="Important" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText primary="Urgent" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText primary="Recycle Bin" />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ my: 2 }} />
        <ListItem>
          <ListItemText primary="Labels" />
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon sx={{ color: "secondary.main" }}>
              <Label />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon sx={{ color: "success.main" }}>
              <Label />
            </ListItemIcon>
            <ListItemText primary="You Tube" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon sx={{ color: "warning.main" }}>
              <Label />
            </ListItemIcon>
            <ListItemText primary="Google Link" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon sx={{ color: "error.main" }}>
              <Label />
            </ListItemIcon>
            <ListItemText primary="Drive Link" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}

