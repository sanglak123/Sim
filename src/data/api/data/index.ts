import { AppDispatch } from "@/sp/redux/store";
import { root_axios } from "../config";

export const Data_Api = {
  Load_Data: async (dispatch: AppDispatch, Load_Data_Pl_Success: any) => {
    await root_axios({
      method: "GET",
      url: "/data",
    })
      .then((res) => {
        dispatch(Load_Data_Pl_Success(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
