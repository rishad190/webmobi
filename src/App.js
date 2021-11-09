import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import "./App.css";
import LeftContainer from "./Components/LeftContainer";
import MidContainer from "./Components/MidContainer";
import RightContainer from "./Components/RightContainer";

function App() {
  return (
    <Wrapper>
      <Grid container>
        <Grid xl={1}>
          <LeftContainer />
        </Grid>
        <Grid xl={10}>
          <MidContainer />
        </Grid>
        <Grid xl={1}>
          <RightContainer />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled("div")`
  height: 100vh;
  background-color: lightgray;
`;
