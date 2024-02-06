"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import PatternIcon from "@mui/icons-material/Pattern";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import logo from "../../public/logo.png";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        height: "100vh",
        weight: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{mb:3}}>
        <Image
          src={logo}
          alt="Picture of the author"
          width={600}
          height={300}
          priority
        />
      </Box>
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: 6,
            p: 1,
            width: "300px",
            bgcolor: "#2B5171",
            "&:hover": { bgcolor: "#1b3347" },
          }}
          onClick={() => router.push("/login")}
        >
          <Typography variant="h6" sx={{ color: "#ffffff" }}>
            เข้าสู่ระบบ
          </Typography>
        </Button>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <PatternIcon sx={{ fontSize: 40 }}/>
          <Button
            variant="contained"
            sx={{
              borderRadius: 6,
              p: 0.5,
              width: "200px",
              bgcolor: "#6B9CAF",
              "&:hover": { bgcolor: "#577D8D" },
            }}
            onClick={() => router.push("/login")}
          >
            <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
              ลงทะเบียน
            </Typography>
          </Button>
        </Stack>


        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <FacebookIcon sx={{ fontSize: 40 }}/>
          <Button
            variant="contained"
            sx={{
              borderRadius: 6,
              p: 0.5,
              width: "200px",
              bgcolor: "#6B9CAF",
              "&:hover": { bgcolor: "#577D8D" },
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
              FackBook
            </Typography>
          </Button>
        </Stack>


        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <GoogleIcon sx={{ fontSize: 40 }}/>
          <Button
            variant="contained"
            sx={{
              borderRadius: 6,
              p: 0.5,
              width: "200px",
              bgcolor: "#6B9CAF",
              "&:hover": { bgcolor: "#577D8D" },
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
              Google
            </Typography>
          </Button>
        </Stack>

      </Stack>

    </Box>
  );
};

export default page;
