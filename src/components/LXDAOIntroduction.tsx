import React from "react";

import styled, { keyframes } from "styled-components";
import { Box, Typography, Link } from "@mui/material";

import LXDAOLogo from "./LXDAOLogo";
import twitterCircle from "../assets/icon/twitter-circle.svg";
import discordCircle from "../assets/icon/discord-circle.svg";
import forumCircle from "../assets/icon/forum-circle.svg";

const textColorGradient = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  `;

const HightlightText = styled.span`
  background-size: 400% 400%;
  background-image: linear-gradient(to right, #366eff, #23e5ff, #ff7fdb);
  -webkit-background-clip: text;
  animation: ${textColorGradient} 10s ease infinite;
  color: transparent;
  font-size: 44px;
  line-height: 53.25px;
  font-weight: 700;
  @media screen and (max-width: 900px) {
    font-size: 44px;
    line-height: 1.02;
  }
  @media screen and (max-width: 600px) {
    font-size: 44px;
    line-height: 1.02;
  }
`;

const CommunityLinkGroup = () => (
  <Box display="flex" gap={2} marginBottom={10}>
    <Link href="https://twitter.com/LXDAO_Official" target="_blank">
      <Box component={"img"} src={twitterCircle} />
    </Link>
    <Link href="https://discord.com/invite/HtcDdPgJ7D" target="_blank">
      <Box component={"img"} src={discordCircle} />
    </Link>
    <Link href="https://forum.lxdao.io/" target="_blank">
      <Box component={"img"} src={forumCircle} />
    </Link>
  </Box>
);

const LXDAOIntroduction = ({
  maxWidth = "1216px",
  xsWidth = "350px",
  ...restProps
}: any) => {
  const Title = () => {
    return (
      <Box>
        <Box>
          <Typography
            textTransform="uppercase"
            color="#365AE2"
            lineHeight="44px"
            sx={{ fontWeight: "600 !important", fontSize: "12px !important" }}
          >
            Honor-produced by <LXDAOLogo height="16px" width="58.67px" />
          </Typography>
          <Typography
            textTransform="uppercase"
            color="#141414"
            lineHeight="53px"
            sx={{ fontWeight: "700 !important", fontSize: "44px !important" }}
          >
            LXDAO is an <HightlightText>R&amp;D</HightlightText>-
          </Typography>
          <Typography
            textTransform="uppercase"
            color="#141414"
            lineHeight="53px"
            letterSpacing="0"
            sx={{ fontWeight: "700 !important", fontSize: "44px !important" }}
          >
            focused DAO in Web3
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      maxWidth={maxWidth}
      boxSizing="border-box"
      marginX={{ lg: "auto", md: "20px", xs: "20px" }}
      minHeight={{ md: "403px", xs: "403px" }}
      display="flex"
      flexDirection={{ lg: "row", xs: "column" }}
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap={{ lg: "120px", xs: "40px" }}
    >
      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column-reverse" }}
        gap={6}
        alignItems="center"
        textAlign="left"
      >
        <Box
          crossOrigin="anonymous"
          component={"img"}
          width={{ xs: xsWidth, sm: "auto" }}
          src="https://api.lxdao.io/lxdao/lxdaoIntroduction"
        />
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          width={{ xs: xsWidth, sm: "auto" }}
          alignItems="flex-start"
          textAlign="left"
        >
          <Title />
          <Box display={{ md: "block", sm: "none", xs: "none" }}>
            <Typography
              sx={{ fontSize: "21px !important" }}
              lineHeight="29px"
              color="#667085"
            >
              Our mission is bringing together buidlers to buidl and
            </Typography>
            <Typography
              sx={{ fontSize: "21px !important" }}
              lineHeight="29px"
              color="#667085"
            >
              maintain "LX" (Valuable) projects for Web3, in a sustainable
              manner.
            </Typography>
          </Box>
          <Box display={{ md: "none", sm: "block", xs: "block" }}>
            <Typography
              sx={{ fontSize: "21px !important" }}
              lineHeight="29px"
              color="#667085"
            >
              Our mission is bringing together buidlers to buidl and maintain
              "LX" (Valuable) projects for Web3, in a sustainable manner.
            </Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            height="48px"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="180px"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
                color: "#ffffff",
                borderRadius: "6px",
                border: "none",
                outline: "none",
                padding: "12px 20px",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                background: "linear-gradient(90deg, #305FE8 0%, #3AD9E3 100%)",
              }}
            >
              <Link
                target="_blank"
                href={`https://lxdao.io/joinus`}
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  marginBottom: 0,
                }}
              >
                JOIN US
              </Link>
            </Box>
            <CommunityLinkGroup />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default LXDAOIntroduction;
