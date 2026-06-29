import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Vacancies } from '../types/vacancies';
import type { Filters } from '../types/filters';

export const fetchVacancies = createAsyncThunk(
	'vacancies/fetchVacancies',

	async function (filters: Filters) {
		const params = new URLSearchParams();

		if (filters.search?.trim()) {
			params.append('search', filters.search.trim());
		}

		if (filters.city && filters.city !== 'Все города') {
			params.append('city', filters.city);
		}

		if (filters.skills?.length > 0) {
			params.append('skills', filters.skills.join(','));
		}

		if (!filters.skills || filters.skills.length === 0) {
			return [];
		}

		const queryString = params.toString();
		const url = `https://kata-jobs.onrender.com/api/jobs${queryString ? `?${queryString}` : ''}`;

		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Ошибка сервера: ${response.status}`);
		}

		const data = await response.json();

		return data.jobs;
	},
);

const vacanciesSlice = createSlice({
	name: 'vacancies',

	initialState: {
		vacancies: [] as Vacancies[],
		loading: false,
		error: false,
	},

	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchVacancies.pending, (state) => {
				state.loading = true;
				state.error = false;
			})

			.addCase(fetchVacancies.fulfilled, (state, action) => {
				state.loading = false;
				state.vacancies = action.payload;
			})

			.addCase(fetchVacancies.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export default vacanciesSlice.reducer;
