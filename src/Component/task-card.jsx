"use client"

import { useState } from "react"
import { Card, CardContent, Chip, Typography, Box, AvatarGroup, Avatar } from "@mui/material"
import { styled } from "@mui/system"

const CardContainer = styled(Box)({
  perspective: "1000px",
  width: "100%",
  height: "200px",
})

const CardInner = styled(Box)(({ flipped }) => ({
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  transition: "transform 0.6s",
}))

const CardFront = styled(Card)({
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  position: "absolute",
})

const CardBack = styled(Card)({
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  position: "absolute",
  transform: "rotateY(180deg)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  backgroundColor: "#333",
  color: "white",
})

export function TaskCard({ date, title, description, teamMembers }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <CardContainer onClick={() => setFlipped(!flipped)}>
      <CardInner flipped={flipped}>
        <CardFront>
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
        </CardFront>
        <CardBack>
          <Typography variant="body1">{description}</Typography>
        </CardBack>
      </CardInner>
    </CardContainer>
  )
}
