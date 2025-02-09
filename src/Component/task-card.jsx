
"use client"

import { Card, CardContent, Chip, Typography, Box, AvatarGroup, Avatar } from "@mui/material"



export function TaskCard({ date, title,teamMembers }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="caption" color="inherit">
          {date}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, mb: 2 }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <Chip
            label="Team"
            size="small"
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
            }}
          />
          <Chip
            label="Important"
            size="small"
            sx={{
              backgroundColor: "primary.main",
            }}
          />
        </Box>
        <AvatarGroup max={4} sx={{ justifyContent: "flex-start" }}>
          {teamMembers.map((member, index) => (
            <Avatar key={index} src={member.avatar} sx={{ width: 30, height: 30 }} />
          ))}
        </AvatarGroup>
      </CardContent>
    </Card>
  )
}

