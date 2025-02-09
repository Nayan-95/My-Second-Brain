"use client"

import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { Header } from "./headers.jsx"
import { Sidebar } from "./sidebar.jsx"
import { TaskGrid } from "./task-grid.jsx"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFB74D",
    },
    secondary: {
      main: "#9C27B0",
    },
    background: {
      default: "#1E1E1E",
      paper: "#252525",
    },
  },
})

export default function Layout() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <TaskGrid />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

