"use client";
import React ,{useState,useEffect}from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/stores/store";
import axios from "axios";

import Sidebar from "@/components/menu/Sidebar";
import HeartRateChart from "@/components/chart/HeartRateChart";
import Checkdata from "@/components/CheckData";

type Props = {};


const heartRate = (props: Props) => {
  const [display, setDisplay] = useState({
    weight: 0,
    height: 0,
    heartRate: [{date:'',rate:0}],
    timeDuration: [{date:'',time:0}],
    progress: [],
    footStep: [],
  });

  const UserStore = useSelector((state: RootState) => state.UserStore);

  const loadData = async () => {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/api/record/${UserStore.id}`
    );
    setDisplay(data.data);
  };

  useEffect(() => {
    if (UserStore.id) {
      loadData();
    }
  }, [UserStore.id]);

  const data = display.heartRate.map((value, index) => ({
    name: `time ${index+1}`,
    value: value.rate,
  }));

  return (
    <>
    <Checkdata/>
    <Box sx={{ display: "flex", justifyContent: "center" , height: "100vh"}}>
      <Sidebar />
      <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          width:'700px',
        }}
      >
        <Box
          sx={{
            height: "300px",
            width: "300px",
            bgcolor: "#ffffff",
            mt: 4,
            p: 1,
          }}
        >
          <HeartRateChart data={data}/>
        </Box>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 6 }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#6B9CAF",
                color: "#ffffff",
                borderRadius: 6,
                p: 0.5,
                width: "250px",
                textAlign: "center",
              }}
            >
              อัตราการเต้นของหัวใจเฉลี่ย
            </Typography>

            <Typography
              variant="h6"
              sx={{
                bgcolor: "#6B9CAF",
                color: "#ffffff",
                borderRadius: 6,
                p: 0.5,
                width: "150px",
                textAlign: "center",
              }}
            >
              59
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#6B9CAF",
                color: "#ffffff",
                borderRadius: 6,
                p: 0.5,
                width: "250px",
                textAlign: "center",
              }}
            >
              อัตราการเต้นของหัวใจสูงสุด
            </Typography>

            <Typography
              variant="h6"
              sx={{
                bgcolor: "#6B9CAF",
                color: "#ffffff",
                borderRadius: 6,
                p: 0.5,
                width: "150px",
                textAlign: "center",
              }}
            >
              42
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#6B9CAF",
                color: "#ffffff",
                borderRadius: 6,
                p: 0.5,
                width: "250px",
                textAlign: "center",
              }}
            >
              อัตราการเต้นของหัวใจต่ำ
            </Typography>

            <Typography
              variant="h6"
              sx={{
                bgcolor: "#6B9CAF",
                color: "#ffffff",
                borderRadius: 6,
                p: 0.5,
                width: "150px",
                textAlign: "center",
              }}
            >
              39
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
    </>
  );
};

export default heartRate;
