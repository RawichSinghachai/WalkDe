"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/stores/store";
import axios from "axios";

import Sidebar from "../../components/menu/Sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Checkdata from "@/components/CheckData";
import HeartRateChart from "@/components/chart/HeartRateChart";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

type Props = {};

export const progress_value = (progress: number):string => {
  let value = "";
  if (progress > 0 && progress <= 20) {
    value = "ออกแรงไม่เพียงพอ";
  } else if (progress > 20 && progress <= 40) {
    value = "น้อยมาก";
  } else if (progress > 40 && progress <= 60) {
    value = "น้อย";
  } else if (progress > 60 && progress <= 80) {
    value = "ปานกลาง";
  } else if (progress > 80 && progress < 100) {
    value = "มาก";
  } else if (progress === 100) {
    value = "ดีเยี่ยม";
  }
  return value;
};

const chart = (props: Props) => {
  const [display, setDisplay] = useState({
    weight: 0,
    height: 0,
    heartRate: [{ date: "", rate: 0 }],
    timeDuration: [{ date: "", time: 0 }],
    progress: [],
    footStep: [],
    detail_progress: { date: [], footStep: [], progress: [] },
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

    const refreshInterval = setInterval(() => {
      loadData(); // Call your function to fetch data
    }, 2000);

    return () => clearInterval(refreshInterval);

  }, [UserStore.id]);

  const data = display.detail_progress.progress.map((progress, index) => ({
    name: `time ${index + 1}`,
    value: progress,
  }));

  return (
    <>
      <Checkdata />
      <Box sx={{ display: "flex", justifyContent: "center", height: "100vh" }}>
        <Sidebar />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "400px",
                width: "400px",
                bgcolor: "#ffffff",
                mt: 4,
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={400}
                  height={400}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
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
                spacing={4}
              >
                <Typography
                  variant="h6"
                  sx={{
                    bgcolor: "#6B9CAF",
                    color: "#ffffff",
                    borderRadius: 6,
                    p: 0.5,
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  จำนวนการเดิน
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    bgcolor: "#cfcfcb",
                    color: "#2B5171",
                    borderRadius: 6,
                    p: 0.5,
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  {
                    display.detail_progress.footStep[
                      display.detail_progress.footStep.length - 1
                    ]
                  }{" "}
                  ครั้ง
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
                <Typography
                  variant="h6"
                  sx={{
                    bgcolor: "#6B9CAF",
                    color: "#ffffff",
                    borderRadius: 6,
                    p: 0.5,
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  เวลาในการเดิน
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    bgcolor: "#cfcfcb",
                    color: "#2B5171",
                    borderRadius: 6,
                    p: 0.5,
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  {display.timeDuration[display.timeDuration.length - 1].time}{" "}
                  วินาที
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
                <Typography
                  variant="h6"
                  sx={{
                    bgcolor: "#6B9CAF",
                    color: "#ffffff",
                    borderRadius: 6,
                    p: 0.5,
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  พัฒนาการการเดิน
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    bgcolor: "#cfcfcb",
                    color: "#2B5171",
                    borderRadius: 6,
                    p: 0.5,
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  {display.detail_progress.progress && progress_value(
                    display.detail_progress.progress[
                      display.detail_progress.progress.length - 1
                    ]
                  )}
                </Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Chart No.2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <HeartRateChart /> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default chart;
