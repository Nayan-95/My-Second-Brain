
import { Box, Grid, Typography, Select, MenuItem } from "@mui/material"
import { TaskCard } from "./task-card"

const MOCK_TASKS = [
  {
    id: 1,
    date: "January 24th, 2021 04:25 PM",
    title: "Fix login form UI bugs",
    teamMembers: [{ avatar: "/placeholder1.svg" }, { avatar: "/placeholder2.svg" }, { avatar: "/placeholder3.svg" }],
  },
  {
    id: 2,
    date: "January 25th, 2021 10:15 AM",
    title: "Implement user authentication API",
    teamMembers: [{ avatar: "/placeholder1.svg" }, { avatar: "/placeholder4.svg" }],
  },
  {
    id: 3,
    date: "February 1st, 2021 03:30 PM",
    title: "Design dashboard layout",
    teamMembers: [{ avatar: "/placeholder2.svg" }, { avatar: "/placeholder5.svg" }],
  },
  {
    id: 4,
    date: "February 3rd, 2021 11:45 AM",
    title: "Integrate payment gateway",
    teamMembers: [{ avatar: "/placeholder3.svg" }, { avatar: "/placeholder4.svg" }, { avatar: "/placeholder6.svg" }],
  },
  {
    id: 5,
    date: "February 5th, 2021 01:00 PM",
    title: "Create product listing page",
    teamMembers: [{ avatar: "/placeholder1.svg" }, { avatar: "/placeholder5.svg" }],
  },
  {
    id: 6,
    date: "February 10th, 2021 02:30 PM",
    title: "Implement password reset functionality",
    teamMembers: [{ avatar: "/placeholder6.svg" }, { avatar: "/placeholder2.svg" }],
  },
  {
    id: 7,
    date: "February 12th, 2021 08:45 AM",
    title: "Setup continuous integration pipeline",
    teamMembers: [{ avatar: "/placeholder7.svg" }, { avatar: "/placeholder3.svg" }],
  },
  {
    id: 8,
    date: "February 15th, 2021 04:10 PM",
    title: "Develop admin panel features",
    teamMembers: [{ avatar: "/placeholder8.svg" }, { avatar: "/placeholder1.svg" }],
  },
  {
    id: 9,
    date: "February 18th, 2021 05:00 PM",
    title: "Implement data visualization charts",
    teamMembers: [{ avatar: "/placeholder9.svg" }, { avatar: "/placeholder4.svg" }],
  },
  {
    id: 10,
    date: "February 22nd, 2021 12:00 PM",
    title: "Refactor codebase for performance",
    teamMembers: [{ avatar: "/placeholder5.svg" }, { avatar: "/placeholder2.svg" }],
  },
  {
    id: 11,
    date: "March 1st, 2021 09:30 AM",
    title: "Build user profile page",
    teamMembers: [{ avatar: "/placeholder10.svg" }, { avatar: "/placeholder7.svg" }],
  },
  {
    id: 12,
    date: "March 5th, 2021 02:15 PM",
    title: "Create error logging system",
    teamMembers: [{ avatar: "/placeholder3.svg" }, { avatar: "/placeholder6.svg" }],
  },
  {
    id: 13,
    date: "March 8th, 2021 04:00 PM",
    title: "Update product images gallery",
    teamMembers: [{ avatar: "/placeholder8.svg" }, { avatar: "/placeholder9.svg" }],
  },
  {
    id: 14,
    date: "March 12th, 2021 06:30 PM",
    title: "Design and implement search bar",
    teamMembers: [{ avatar: "/placeholder10.svg" }, { avatar: "/placeholder5.svg" }],
  },
  {
    id: 15,
    date: "March 15th, 2021 11:00 AM",
    title: "Fix email notification system",
    teamMembers: [{ avatar: "/placeholder7.svg" }, { avatar: "/placeholder10.svg" }],
  },
];


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
            <TaskCard date={task.date} title={task.title} teamMembers={task.teamMembers} />
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

