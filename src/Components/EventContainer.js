import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import EventLeft from "./EventLeft";
import EventRight from "./EventRight";

const EventContainer = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid xl={2}>
          <EventLeft />
        </Grid>
        <Grid xl={10}>
          <EventRight />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default EventContainer;
const Wrapper = styled("div")`
  height: 85%;
  background-color: white;
  margin: 25px;
  border-radius: 20px;
`;
