import axios from "axios";

export const base_URL = process.env.NEXT_PUBLIC_DOMAIN;

export const root_axios = axios.create({
  baseURL: base_URL + "/api",
});
