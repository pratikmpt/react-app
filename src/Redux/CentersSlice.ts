import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Center {
  id: string;
  name: string;
  address: string;
  images: string[];
  day_pass_price: number;
  day_pass_discounts_percentage: number;
  bulk_pass_price: number;
  bulk_pass_duration: number;
  distance_kms: number;
}

interface CentersState {
  data: Center[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: CentersState = {
  data: [],
  status: "idle",
};

// Async thunk to fetch data
export const fetchCenters = createAsyncThunk<Center[]>(
  "centers/fetch",
  async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json"
    );
    
    return res.data;
  }
);


const centersSlice = createSlice({
  name: "centers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCenters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCenters.fulfilled, (state, action: PayloadAction<Center[]>) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCenters.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default centersSlice.reducer;
