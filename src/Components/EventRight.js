import { styled } from "@mui/system";
import React from "react";
import Audience from "./Audience";

const EventRight = () => {
  return (
    <Wrapper>
      <Audience />
    </Wrapper>
  );
};

export default EventRight;

const Wrapper = styled("div")`
  height: 85vh;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 20px;
`;
