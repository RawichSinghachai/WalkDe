"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";
import axios from "axios";
import Modal from "@mui/material/Modal";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { lightGreen, red, grey } from "@mui/material/colors";

import logo from "../../../public/logo.png";

type Props = {};


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  py: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Login = (props: Props) => {
  const router = useRouter();

  //state for show status login
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openFaild, setOpenFaild] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [form, setForm] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //show status login
  const handleOpenSuccess = () => {
    setOpenSuccess(true);
    setTimeout(() => {
      handleCloseSuccess();
    }, 1000);
  };

  //go to /history
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
    setForm({
      usernameOrEmail: "",
      password: "",
    })
    router.push('/history')
}

  const handleOpenFaild = () => {
    setOpenFaild(true);
    setTimeout(() => {
      handleCloseFaild();
    }, 1000);
  };

  const handleCloseFaild = () => {
    setOpenFaild(false);
}

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/user/login`, {
        ...form,
      })
      .then((value) => {
        if (value.data.token) {
          sessionStorage.setItem("token", value.data.token);
        }

        if (value.data.status === "login success") {
          handleOpenSuccess()
        }
        if (value.data.status === "login faild") {
          handleOpenFaild()
        }
      })
      .catch(() => {
        console.log("login fail");
      });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        weight: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Image
        src={logo}
        alt="Picture of the author"
        width={700}
        height={400}
        priority
      />

      <form autoComplete="off" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ p: 6, bgcolor: "#6B9CAF", borderRadius: 2, mb: 2 }}>
            <Stack
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              spacing={4}
            >
              <TextField
                name="usernameOrEmail"
                label="ชื่อผู้ใช้งาน/อีเมล"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                sx={{ bgcolor: "white", borderRadius: 2, width: "255px" }}
                onChange={handleChange}
              />
              {/* <TextField
              id="outlined-basic1"
              label="รหัสผ่าน"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={{ bgcolor: "white", borderRadius: 2 ,width:'255px'}}
            /> */}

              <FormControl
                sx={{ m: 1, bgcolor: "#ffffff", borderRadius: 2 }}
                variant="filled"
              >
                <InputLabel htmlFor="password">รหัสผ่าน</InputLabel>
                <FilledInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  onChange={handleChange}
                  // inputProps={{style:{borderBottom:'none'}}}
                />
              </FormControl>
            </Stack>
          </Card>
          <Button
            variant="contained"
            sx={{
              borderRadius: 6,
              p: 1,
              mt: 2,
              width: "200px",
              bgcolor: "#2B5171",
              "&:hover": { bgcolor: "#1b3347" },
            }}
            type="submit"
          >
            <Typography variant="h6" sx={{ color: "#ffffff" }}>
              เข้าสู่ระบบ
            </Typography>
          </Button>
        </Box>
      </form>

      <Modal open={openSuccess} onClose={handleCloseSuccess}>
        <Box sx={style}>
          <CheckIcon
            sx={{
              fontSize: 70,
              color: grey[50],
              bgcolor: lightGreen["A400"],
              borderRadius: "50%",
              p: 2,
              mb: 2,
            }}
          />
          <Typography variant="h5">Login Success</Typography>
        </Box>
      </Modal>

      <Modal open={openFaild} onClose={handleCloseFaild}>
        <Box sx={style}>
          <ClearIcon
            sx={{
              fontSize: 70,
              color: grey[50],
              bgcolor: red["A400"],
              borderRadius: "50%",
              p: 2,
              mb: 2,
            }}
          />
          <Typography variant="h5">Login Faild</Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Login;
