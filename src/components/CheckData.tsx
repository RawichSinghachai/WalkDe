"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from '@/stores/store';
import { saveUser } from "@/stores/UserStore";
import { saveRecord } from "@/stores/RecordStore";
import axios from "axios";

type Props = {};

const Checkdata = (props: Props) => {
  const dispatch = useDispatch();
  const UserStore = useSelector((state: RootState) => state.UserStore)
  useEffect(() => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}/api/user/auth`,
        {
          token: sessionStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((userdata) => {
        dispatch(saveUser(userdata.data.decoded));
        // dispatch(saveRecord(userdata.data.decoded))
        // console.log(datauser.data);
      })
      .catch((err) => {});

  }, []);

  return <></>;
};

export default Checkdata;
