import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "https://bt-swagger.360xpertsolutions.com/v1/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODVjZjBlMDAtYzk4Ni00YjlkLTk3YzItZTQwZjI5ZWVhZmViIiwidXNlcl9uYW1lIjoibXVoYW1tYWQgc2hhaGFiIiwicm9sZSI6InN0b3JlIG1hbmFnZXIiLCJ3b3JrcGxhY2VfaWQiOiJkZTJlYzA1NS01MDUzLTRjOTQtYWZmMC1kOWJjMDQxZTYzMjciLCJ3b3JrcGxhY2VfdHlwZSI6InN0b3JlIiwid29ya3BsYWNlX25hbWUiOiJzdG9yZSBvbmUiLCJpYXQiOjE3Mjc4NTA2NDksImV4cCI6MTcyNzkzNzA0OX0.KxR8kKf_PENPS8CMlbLQ81qnN81VtRAc_zq2LCqzZpo", // Consider using environment variables for sensitive info
  },
});

export const fetching = createAsyncThunk(
  "overview/fetching",
  async ({ page, limit, status }, { rejectWithValue }) => {
    try {
      const response = await axiosCreate.get(
        `store-orders?page=${page}&limit=${limit}&status=${status}`
      );
      const ordersData = response.data.data;
      const totalOrders = response.data.meta_data.totalCount;
      return { data: ordersData, total: totalOrders };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const slice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalOrders: 0,
    ordersPerPage: 10,
    selectedStatus: "in-transit",
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSelectedStatus(state, action) {
      state.selectedStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetching.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetching.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.data;
        state.totalOrders = action.payload.total;
      })
      .addCase(fetching.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setCurrentPage, setSelectedStatus } = slice.actions;
export default slice.reducer;
