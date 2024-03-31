import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";


axios.defaults.baseURL = `https://avto.pythonanywhere.com/api/`

export const baseUrl = `https://avto.pythonanywhere.com/api/`


export const api = fetchBaseQuery({
  baseUrl,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});
