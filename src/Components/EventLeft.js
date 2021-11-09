import { styled } from "@mui/system";
import React from "react";

const EventLeft = () => {
  const data = [
    "General",
    "Privacy",
    "Feature",
    "Customization",
    "Integration",
    "Session Setting",
    "My Plans",
  ];
  return (
    <Wrapper>
      <EventSettingText>
        <h3>Event Settings</h3>
      </EventSettingText>
      <TextSwitch>
        {data.map((event, index) => (
          <a href="#">
            <p>{event}</p>
          </a>
        ))}
      </TextSwitch>
    </Wrapper>
  );
};

export default EventLeft;
const Wrapper = styled("div")``;
const TextSwitch = styled("div")`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: gray;
    margin-bottom: 5px;
    padding-left: 10px;
    transition: all 0.5s linear;
    :hover {
      background-color: lightgray;
      color: #bb48ff;
      border-left: 4px solid #bb48ff;
      transition: all 0.5s linear;
    }
    :focus {
      color: #bb48ff;
      background-color: lightgray;
      border-left: 4px solid #bb48ff;
    }
  }
`;
const EventSettingText = styled("div")`
  border-bottom: 1px solid lightgray;
  h3 {
    color: lightgray;
    padding-left: 15px;
  }
`;
