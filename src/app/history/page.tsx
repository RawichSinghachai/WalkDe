"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/stores/store";
import axios from "axios";

import Sidebar from "../../components/menu/Sidebar";
import TableHistory from "../../components/table/TableHistory";
import TableTime from "@/components/table/TableTime";
import Checkdata from "@/components/CheckData";

type Props = {};

const History = (props: Props) => {
  const [display, setDisplay] = useState({
    weight: 0,
    height: 0,
    heartRate: [{ date: "", rate: 0 }],
    timeDuration: [{ date: "", time: 0 }],
    progress: [],
    footStep: [],
    detail_progress:{date:[],footStep:[],progress:[]}
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

  return (
    <>
      <Checkdata />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Sidebar />

        {/* cotent */}
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ml: 4,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={16}
            sx={{ mb: 10 }}
          >
            <Avatar alt="Cindy Baker" sx={{ height: 100, width: 100 }} />
            <Card sx={{ maxWidth: 500, bgcolor: "#2B5171", p: 2 }}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  Name : ...
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  Singname : ...
                </Typography>
              </Stack>

              <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                Nickname : ...
              </Typography>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  Height : ...
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  weight : ...
                </Typography>
              </Stack>
            </Card>
          </Stack>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
                ตารางพัฒนาการ
              </Typography>
              <TableHistory value={display} />
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
                ตารางเวลา
              </Typography>
              <TableTime value={display} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default History;
