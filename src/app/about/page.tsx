"use client";
import React from "react";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../../components/menu/Sidebar";
import machine from "../../../public/machine.png";

type Props = {};

const about = (props: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" ,height:'100vh'}}>
      <Sidebar />

      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ml: 4,
          width: "80vw",
          // bgcolor: "#756F6F",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 1,
            borderRadius: 10,
            display: "flex",
            alignContent: "center",
            height: "50px",
            mb: 4,
          }}
        >
          <Typography variant="h5" sx={{ ml: 2 }}>
            วิธีการใช้งาน อุปกรณ์ช่วยฝึกเดิน
          </Typography>

          <Box
            sx={{
              bgcolor: "#2C05F2",
              color: "#ffffff",
              p: 1,
              borderRadius: "50%",
              mx: 2,
            }}
          >
            <SearchIcon sx={{ height: "20px", width: "20px" }} />
          </Box>
        </Paper>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{width:'60%'}}
        >
          <Image src={machine} alt="machine" width={300} height={350} />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Paper
            elevation={3}
              sx={{
                borderRadius: 6,
                p: 1,
                mb: 1,
              }}
            >
              <Typography variant="h6">ส่วนประกอบของเครื่อง</Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 1, borderRadius: 4 }} >
              <Typography variant="subtitle1">
                1.ที่เกี่ยวชุดพยุงผู้ป่วย
              </Typography>

              <Typography variant="subtitle1">2.ยางยืดออกกำลังกาย</Typography>

              <Typography variant="subtitle1">3.แขนยกผู้ป่วย</Typography>

              <Typography variant="subtitle1">4.Linear actuator</Typography>

              <Typography variant="subtitle1">5.แบตเตอรี่</Typography>

              <Typography variant="subtitle1">6.มือจับปรับมุมได้</Typography>

              <Typography variant="subtitle1">
                7.จุดปรับความยาวของมือจับ
              </Typography>

              <Typography variant="subtitle1">8.ที่รัดเท้าและขา</Typography>

              <Typography variant="subtitle1">9.Elliptical machine</Typography>
            </Paper>
          </Box>
        </Stack>

        <Paper elevation={3} sx={{ p: 1, mt: 2 ,borderRadius:4}} >
          <Typography variant="subtitle1">วิธีการใช้งาน</Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 1, mt: 2 ,borderRadius:4}} >
          <Typography variant="subtitle1">
            1.สวมชุดสำหรับช่วยพยุงให้กับผู้ป่วย
            สามารถปรับระดับามความสูงของผู้ป่วยได้
          </Typography>

          <Typography variant="subtitle1">
            2.สวมสายรัดบริเวณขาเพื่อปรับท่าทางการเดินที่ถูกต้องและบริเวณเท้าเมื่อใช้เครื่องช่วยเดินแแบบมอเตอร์
          </Typography>

          <Typography variant="subtitle1">
          3. เมื่อจัดท่าทางของผู้ป่วยเรียบร้อยแล้ว สามารถเริ่มการฝึกเดินได้
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default about;

// สวมชุดสำหรับช่วยพยุงให้กับผู้ป่วย สามารถปรับระดับามความสูงของผู้ป่วยได้
// สวมสายรัดบริเวณขาเพื่อปรับท่าทางการเดินที่ถูกต้อง
//          และบริเวณเท้าเมื่อใช้เครื่องช่วยเดินแแบบมอเตอร์
//   3. เมื่อจัดท่าทางของผู้ป่วยเรียบร้อยแล้ว สามารถเริ่มการฝึกเดินได้
