import { styled } from "@mui/system";
import React from "react";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import DraftsIcon from "@mui/icons-material/Drafts";
import logo from "../../src/Assets/Event settings – 11.png";

const LeftContainer = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={logo} alt="" />
      </ImageContainer>
      <ButtonsContainer>
        <a href="#">
          <LinkBox>
            <EventIcon />
            <p>Event</p>
          </LinkBox>
        </a>
        <a href="#">
          <LinkBox>
            <GroupIcon />
            <p>Teams</p>
          </LinkBox>
        </a>
        <a href="#">
          <LinkBox>
            <AnalyticsIcon />
            <p>Analytics</p>
          </LinkBox>
        </a>
        <a href="#">
          <LinkBox>
            <DraftsIcon />
            <p>Results</p>
          </LinkBox>
        </a>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default LeftContainer;
const ImageContainer = styled("div")`
  display: flex;

  justify-content: center;
  align-items: center;
`;
const LinkBox = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
`;
const Wrapper = styled("div")`
  background-color: white;
  height: 100vh;
`;
const ButtonsContainer = styled("div")`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
    width: 60%;
    color: lightgray;
    transition: all 0.5s linear;
  }
  a:hover {
    border: 2px solid #bb48ff;
    border-radius: 8px;
    padding: 10px 15px;
    transition: all 0.5s linear;
    .MuiSvgIcon-root {
      color: #bb48ff;
    }
    p {
      color: #bb48ff;
    }
  }
  a:focus {
    .MuiSvgIcon-root {
      color: #bb48ff;
    }
    p {
      color: #bb48ff;
    }
  }
  .MuiSvgIcon-root {
    font-size: 2rem;
    color: lightgray;
  }
`;
