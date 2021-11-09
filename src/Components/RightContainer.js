import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import React from "react";
import { Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#b04dff",
    color: "#b04dff",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const RightContainer = () => {
  return (
    <Wrapper>
      <IconContainer>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
            backgroundColor: "#44b700",
            color: "#44b700",
          }}
          variant="dot"
        >
          <Avatar
            alt="Remy Sharp"
            variant="square"
            src="/static/images/avatar/1.jpg"
            sx={{ borderRadius: "8px" }}
          />
        </StyledBadge>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        >
          <Avatar>
            <ForumIcon />
          </Avatar>
        </StyledBadge>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        >
          <Avatar>
            <NotificationsIcon />
          </Avatar>
        </StyledBadge>
        <Avatar>
          <SettingsApplicationsIcon />
        </Avatar>
      </IconContainer>
    </Wrapper>
  );
};

export default RightContainer;
const Wrapper = styled("div")`
  height: 100vh;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const IconContainer = styled("div")`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .MuiAvatar-root:hover {
    background-color: darkgrey;
    cursor: pointer;
  }
`;
