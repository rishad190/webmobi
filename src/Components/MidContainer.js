import { styled } from "@mui/system";
import React from "react";
import EventContainer from "./EventContainer";
import Header from "./Header";

const MidContainer = () => {
  return (
    <Wrapper>
      <Header />
      <EventContainer />
    </Wrapper>
  );
};

export default MidContainer;
const Wrapper = styled("div")`
  height: 100vh;
`;
