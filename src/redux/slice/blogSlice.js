import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '@/components/utils/baseUrl';

// Async thunk for creating a blog
export const createBlog = createAsyncThunk(
  'blog/createBlog',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/create/blog`, {
        method: 'POST',
        body: formData,
        // Note: Do not set 'Content-Type': 'multipart/form-data' manually
        // The browser sets it automatically with the correct boundary
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create blog');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({
        error: 'Failed to create blog',
        details: error.message,
      });
    }
  }
);

// Async thunk for fetching all blogs
export const getBlogs = createAsyncThunk(
  'blog/getBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/get/all-blogs`, {
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch blogs');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({
        error: 'Failed to fetch blogs',
        details: error.message,
      });
    }
  }
);

// Async thunk for fetching a single blog by ID
export const getBlogById = createAsyncThunk(
  'blog/getBlogById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/get/blog/${id}`, {
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch blog');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({
        error: 'Failed to fetch blog',
        details: error.message,
      });
    }
  }
);

// Blog slice
const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: [],
    currentBlog: null,
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    // Create Blog
    builder
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        state.blogs.push(action.payload.blog);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get All Blogs
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        state.success = 'Blogs fetched successfully';
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Blog by ID
      .addCase(getBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBlog = action.payload;
        state.success = 'Blog fetched successfully';
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessages } = blogSlice.actions;
export default blogSlice.reducer;