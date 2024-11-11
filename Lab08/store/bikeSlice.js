import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addBike = createAsyncThunk('bike/addBike', async (newBike) => {
    const response = await fetch('https://6731af5d7aaf2a9aff118f7b.mockapi.io/api/bike1/trungHan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBike),
    });
    return response.json();
});

export const fetchBikes = createAsyncThunk('bike/fetchBikes', async () => {
    const response = await fetch('https://6731af5d7aaf2a9aff118f7b.mockapi.io/api/bike1/trungHan');
    return response.json();
});

const bikeSlice = createSlice({
    name: 'bike',
    initialState: {
        bikes: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBikes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBikes.fulfilled, (state, action) => {
                state.loading = false;
                state.bikes = action.payload;
            })
            .addCase(fetchBikes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addBike.fulfilled, (state, action) => {
                state.bikes.push(action.payload);
            });
    },
});

export default bikeSlice.reducer;