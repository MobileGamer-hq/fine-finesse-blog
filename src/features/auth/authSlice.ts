import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authServices } from "./authServices.ts";
import type { User } from "../../types/user.ts";

// Get user from localStorage if exists
const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;

interface AuthState {
    user: User | null;
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    message: string;
}

const initialState: AuthState = {
    user: localUser,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

// Register user
export const register = createAsyncThunk(
    "auth/register",
    async (user: User & { password: string }, thunkAPI) => {
        try {
            const res = await authServices.register(user);
            localStorage.setItem("user", JSON.stringify(res));
            return res;
        } catch (error: any) {
            const message =
                error.response?.data?.message || error.message || "Registration failed";
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Login user
export const login = createAsyncThunk(
    "auth/login",
    async (user: User & { password: string }, thunkAPI) => {
        try {
            const res = await authServices.login(user);
            localStorage.setItem("user", JSON.stringify(res));
            return res;
        } catch (error: any) {
            const message =
                error.response?.data?.message || error.message || "Login failed";
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
    await authServices.logout();
    localStorage.removeItem("user");
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            // Register
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.user = null;
            })
            // Login
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.user = null;
            })
            // Logout
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
