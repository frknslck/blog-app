import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",

  initialState: {
    blogs: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload:{data} }) => {
      state.loading = false;
      state.blogs = data
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  getProCatBrandSuccess,
  fetchFail
} = blogSlice.actions;
export default blogSlice.reducer;
