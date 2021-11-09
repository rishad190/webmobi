import { styled } from "@mui/system";
import React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

const Header = () => {
  return (
    <Wrapper>
      <HeaderBox>
        <HeaderLeft>
          <FormatAlignLeftIcon
            sx={{ fontSize: "2.5rem", margin: "0 10px", color: "black" }}
          />
          <h1>Admin Dashboard</h1>
        </HeaderLeft>
      </HeaderBox>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled("div")`
  background-color: white;
  height: 10%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const HeaderBox = styled("div")``;
const HeaderLeft = styled("div")`
  display: flex;
  align-items: center;
`;
