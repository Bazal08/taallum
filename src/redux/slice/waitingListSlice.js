import { BASE_URL } from "@/components/utils/baseUrl";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunks for API calls
export const addAvailableLooking = createAsyncThunk(
  "waitingList/addAvailableLooking",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/waitingList/add/available-looking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add available looking");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addAvailableHire = createAsyncThunk(
  "waitingList/addAvailableHire",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/waitingList/add/available-hire`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      console.log("API Response:", result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to add available hire");
      }

      return result;
    } catch (error) {
      console.error("API Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addContactUs = createAsyncThunk(
  "waitingList/addContactUs",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/waitingList/add/contactus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add contact");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const waitingListSlice = createSlice({
  name: "waitingList",
  initialState: {
    loading: false,
    successMessage: null,
    errorMessage: null,
  },
  reducers: {
    clearMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAvailableLooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAvailableLooking.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(addAvailableLooking.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      })
      .addCase(addAvailableHire.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAvailableHire.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(addAvailableHire.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      })
      .addCase(addContactUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContactUs.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(addContactUs.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { clearMessages } = waitingListSlice.actions;
export default waitingListSlice.reducer;
