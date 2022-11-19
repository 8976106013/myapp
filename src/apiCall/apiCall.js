//import axios from "axios";
import axios from 'react';
import URL from "./apiUrls";
import React from "react";

export const getUser = async () => {
  console.log(URL.userAPI);
  const res = await axios.get(URL.userAPI);
  return res.data;
};
export const getComment = async () => {
  const res = await axios.get(URL.commentAPI);
  return res.data;
};