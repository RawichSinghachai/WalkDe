import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SchoolIcon from '@mui/icons-material/School';
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/stores/store";
import axios from "axios";

type Props = {};

const drawerWidth = 260;



const Sidebar = (props: Props) => {

  const UserStore = useSelector((state: RootState) => state.UserStore);
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //state timer

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    axios.post(`${process.env.NEXT_PUBLIC_URL}/api/record/timeduration`,
    {id:UserStore.id,time:seconds})
  };

  const handleReset = () => {
    setSeconds(0);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  //function handleLogOut
  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    router.push("/");
  };

  return (
    <Box
      sx={{
        display: {
          desktop: "block",
          laptop: "block",
          tablet: "block",
          mobile: "none",
        },
      }}
    >
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "98%",
            boxSizing: "border-box",
            bgcolor: "#6B9CAF",
            borderRadius: 4,
            ml: 1,
            mt: 1,
            p: 1,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            bgcolor: "#2B5171",
            color: "#FFFFFF",
            m: 2,
            p: 0.5,
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          My File
        </Typography>
        <Divider />
        <List>
          {/* <Link href='/history' style={{textDecoration:'none'}}> */}
          <ListItem
            disablePadding
            sx={{ my: 2 }}
            onClick={() => router.push("/history")}
          >
            <ListItemButton
              sx={{
                bgcolor: "#cfcfcb",
                "&:hover": { bgcolor: "#a8a8a8" },
                borderRadius: 8,
              }}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                <PersonIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                ข้อมูลผู้ใช้งาน
              </Typography>
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href='/chart' style={{textDecoration:'none'}}> */}
          <ListItem
            disablePadding
            sx={{ my: 2 }}
            onClick={() => router.push("/chart")}
          >
            <ListItemButton
              sx={{
                bgcolor: "#cfcfcb",
                "&:hover": { bgcolor: "#a8a8a8" },
                borderRadius: 8,
              }}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                <TrendingUpIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                ความก้าวหน้า
              </Typography>
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          <ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton
              sx={{
                bgcolor: "#cfcfcb",
                "&:hover": { bgcolor: "#a8a8a8" },
                borderRadius: 8,
              }}
              onClick={() => router.push("/heartrate")}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                <MonitorHeartIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                อัตราการเต้นหัวใจ
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ my: 2 }} onClick={handleOpen}>
            <ListItemButton
              sx={{
                bgcolor: "#cfcfcb",
                "&:hover": { bgcolor: "#a8a8a8" },
                borderRadius: 8,
              }}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                <AccessAlarmsIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                จับเวลา
              </Typography>
            </ListItemButton>
          </ListItem>

          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems:'center'
              }}
            >
              <Typography variant="h4" sx={{mb:2}}>{formatTime(seconds)}</Typography>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Button
                  variant="contained"
                  onClick={isRunning ? handleStop : handleStart}
                  sx={{
                    bgcolor: isRunning ? "#DB3F3F" : "#00BF63",
                    "&:hover": { bgcolor: isRunning ? "#AB3131" : "#028D4A" },
                  }}
                >
                  <Typography variant="h6">
                    {isRunning ? "Stop" : "Start"}
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  onClick={handleReset}
                  sx={{ bgcolor: "#3F51B5", "&:hover": { bgcolor: "#303F9F" } }}
                >
                  <Typography variant="h6">Reset</Typography>
                </Button>
              </Stack>
            </Box>
          </Modal>

          <ListItem
            disablePadding
            sx={{ my: 2 }}
            onClick={() => router.push("/about")}
          >
            <ListItemButton
              sx={{
                bgcolor: "#cfcfcb",
                "&:hover": { bgcolor: "#a8a8a8" },
                borderRadius: 8,
              }}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                <SchoolIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                เกร็ดน่ารู้
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

        <ListItem
          disablePadding
          sx={{ ml: 6, my: 2, width: "150px" }}
          onClick={handleLogOut}
        >
          <ListItemButton
            sx={{
              bgcolor: "#2B5171",
              "&:hover": { bgcolor: "#1b3347" },
              borderRadius: 8,
            }}
          >
            <Typography variant="h6" sx={{ mx: "auto", color: "#ffffff" }}>
              LogOut
            </Typography>
          </ListItemButton>
        </ListItem>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
