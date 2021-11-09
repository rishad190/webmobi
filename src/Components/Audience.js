import { alpha, styled } from "@mui/material/styles";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ForumIcon from "@mui/icons-material/Forum";
import { Button, Container, Switch } from "@mui/material";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Audience = () => {
  const [isTrue] = React.useState(5);
  const data = [
    {
      first: "Moderation",
      para: "Easily review all questions before they go live",
    },
    {
      first: "Labels",
      para: "Categorize and filter questions",
    },
    {
      first: "Downvotes",
      para: "Enable downvoting of questions",
    },
    {
      first: "Replies",
      para: "Allow participants to reply to or comment on questions",
    },
    {
      first: "Anonymous questions",
      para: "Let your participants send anonymous questions",
    },
    {
      first: "Maximum question length",
      para: "Show number of votes instead of percentage",
    },
    {
      first: "Close question",
      para: "Prevent the participants from sending new questions to your event",
    },
  ];
  return (
    <Wrapper>
      <CloseContainer>
        <CloseIcon />
      </CloseContainer>
      <Container maxWidth="md">
        <HeaderBox>
          <IconWrapper>
            <ForumIcon />
            <h4>Audience Q&A</h4>
          </IconWrapper>
          <GreenSwitch {...label} defaultChecked sx={{ color: "green" }} />
        </HeaderBox>
        <DataContainer>
          {data.map((d, i) => (
            <SmallBox>
              <Item>
                <p>{d.first}</p>
                <p>{d.para}</p>
                {isTrue === i && (
                  <ButtonBox>
                    <Button variant="outlined">160</Button>
                    <Button variant="outlined">240</Button>
                    <Button variant="outlined">300</Button>
                  </ButtonBox>
                )}
              </Item>
              <GreenSwitch {...label} defaultChecked sx={{ color: "green" }} />
            </SmallBox>
          ))}
        </DataContainer>
      </Container>
      <ButtonContainer>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#bb48ff", width: "100px" }}
        >
          Save
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Audience;
const Wrapper = styled("div")``;
const ButtonBox = styled("div")`
  .MuiButton-root {
    color: #bb48ff;
    border: 1px solid #bb48ff;
    margin-right: 20px;
  }
  .MuiButton-root:focus {
    background-color: #bb48ff;
    color: white;
  }
`;
const ButtonContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  padding-right: 70px;
`;
const Item = styled("div")`
  height: 20%;
  p:nth-child(1) {
    font-size: 14px;
    font-weight: bold;
  }
  p:nth-child(2) {
    font-size: 12px;
  }
`;
const DataContainer = styled("div")``;
const SmallBox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
`;
const IconWrapper = styled("div")`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    color: #bb48ff;
  }
  h4 {
    color: #bb48ff;
  }
`;
const HeaderBox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
`;
const CloseContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  padding-top: 10px;
  .MuiSvgIcon-root {
    border: 1px solid gray;
    border-radius: 50%;
    :hover {
      cursor: pointer;
    }
  }
`;
const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#60ff72",
    "&:hover": {
      backgroundColor: alpha("#60ff72", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#60ff72",
  },
}));
