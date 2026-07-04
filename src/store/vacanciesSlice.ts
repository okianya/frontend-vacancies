import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Vacancies } from '../types/vacancies';
import type { Filters } from '../types/filters';
import type { CurrentVacancy } from '../types/currentVacancy';

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

export const fetchVacancyById = createAsyncThunk(
	'vacancies/fetchVacancyById',

	async function (id: string) {
		const url = `https://kata-jobs.onrender.com/api/jobs/${id}`;

		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Ошибка сервера: ${response.status}`);
		}

		const data = await response.json();
		return data.job;
	},
);

const vacanciesSlice = createSlice({
	name: 'vacancies',

	initialState: {
		vacancies: [] as Vacancies[],
		currentVacancy: null as CurrentVacancy | null,
		loading: false,
		error: false,
		isLoaded: false,
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
				state.currentVacancy = action.payload;
				state.isLoaded = true;
			})

			.addCase(fetchVacancies.rejected, (state) => {
				state.loading = false;
				state.error = true;
				state.isLoaded = true;
			})

			.addCase(fetchVacancyById.pending, (state) => {
				state.error = false;
			})

			.addCase(fetchVacancyById.fulfilled, (state, action) => {
				state.currentVacancy = action.payload;
			})

			.addCase(fetchVacancyById.rejected, (state) => {
				state.error = true;
			});
	},
});

export default vacanciesSlice.reducer;
