import { Box, Grid, Typography, Select, MenuItem } from "@mui/material"
import { TaskCard } from "./task-card"

const MOCK_TASKS = [
  {
    id: 1,
    date: "January 24th, 2021 04:25 PM",
    title: "Fix login form UI bugs",
    description: "Fix the alignment issues and responsiveness of the login form.",
    teamMembers: [{ avatar: "/placeholder1.svg" }, { avatar: "/placeholder2.svg" }, { avatar: "/placeholder3.svg" }],
  },
  {
    id: 2,
    date: "January 25th, 2021 10:15 AM",
    title: "Implement user authentication API",
    description: "Develop a secure authentication API using JWT for login/signup.",
    teamMembers: [{ avatar: "/placeholder1.svg" }, { avatar: "/placeholder4.svg" }],
  },
  {
    id: 3,
    date: "February 1st, 2021 03:30 PM",
    title: "Design dashboard layout",
    description: "Create an intuitive dashboard UI with proper widgets and styling.",
    teamMembers: [{ avatar: "/placeholder2.svg" }, { avatar: "/placeholder5.svg" }],
  },
  {
    id: 4,
    date: "February 3rd, 2021 11:45 AM",
    title: "Integrate payment gateway",
    description: "Set up Stripe integration for handling transactions securely.",
    teamMembers: [{ avatar: "/placeholder3.svg" }, { avatar: "/placeholder4.svg" }, { avatar: "/placeholder6.svg" }],
  },
  {
    id: 5,
    date: "February 5th, 2021 01:00 PM",
    title: "Create product listing page",
    description: "Develop a page to display products with search and filtering options.",
    teamMembers: [{ avatar: "/placeholder1.svg" }, { avatar: "/placeholder5.svg" }],
  },
]

export function TaskGrid() {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6">Your Brain Content</Typography>
        <Select size="small" value="newest" sx={{ width: 120 }}>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={2}>
        {MOCK_TASKS.map((task) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
            <TaskCard date={task.date} title={task.title} description={task.description} teamMembers={task.teamMembers} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 1 }}>
        {[1, 2, 3].map((page) => (
          <Box
            key={page}
            sx={{
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 1,
              backgroundColor: page === 1 ? "background.paper" : "transparent",
              cursor: "pointer",
            }}
          >
            {page}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
