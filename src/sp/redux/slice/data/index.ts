import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { interFade_Data } from "@/sp/interfade";

const initialState: interFade_Data = {
  Users: [],
};
const DataPublicSlice = createSlice({
  name: "Data_Public",
  initialState,
  reducers: {
    Load_Data_Pl_Success: (state, action: PayloadAction<any>) => {},
  },
});

export const { Load_Data_Pl_Success } = DataPublicSlice.actions;

export const DataPublicSelector = {};

export default DataPublicSlice;
