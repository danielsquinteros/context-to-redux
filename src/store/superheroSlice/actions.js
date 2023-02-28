import { createAsyncThunk } from '@reduxjs/toolkit';

import api from "../../context/api";

export const superheroBio = createAsyncThunk('superhero/bio', async (id, { rejectWithValue }) => {
    try {
      const response = await api.Superhero.getBio(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });