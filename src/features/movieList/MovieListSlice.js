import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  myList: [],
  recommendation: [],
};

export const fetchData = createAsyncThunk("movieList/fetchData", async () => {
  const response = await axios.get("data.json");
  return response.data;
});

export const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    getInitData: (state, action) => {
      state.myList = action.payload.mylist;
      state.recommendation = action.payload.recommendations;
    },
    removeItem: (state, action) => {
      state.myList = state.myList.filter(
        (list) => list.id !== action.payload.id
      );
      state.recommendation = [...state.recommendation, action.payload];
    },
    addItem: (state, action) => {
      state.myList = [...state.myList, action.payload];
      state.recommendation = state.recommendation.filter(
        (list) => list.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.myList = action.payload.mylist;
      state.recommendation = action.payload.recommendations;
    },
    [fetchData.pending]: () => {
      console.log("pending");
    },
    [fetchData.rejected]: () => {
      console.log("reject");
    },
  },
});
export const { removeItem, addItem } = movieListSlice.actions;

export const getMyList = (state) => state.movieList.myList;

export const getRecommendation = (state) => state.movieList.recommendation;

export default movieListSlice.reducer;
