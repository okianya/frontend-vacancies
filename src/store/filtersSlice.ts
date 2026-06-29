import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Filters } from '../types/filters';

const filtersSlice = createSlice({
	name: 'filters',

	initialState: {
		search: '',
		city: '',
		skills: ['JavaScript', 'React', 'Redux', 'Python'],
	} as Filters,

	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},

		setCity: (state, action: PayloadAction<string>) => {
			state.city = action.payload;
		},

		addSkill: (state, action: PayloadAction<string>) => {
			const skill = action.payload.trim();

			if (skill && !state.skills.includes(skill)) {
				state.skills.push(skill);
			}
		},

		removeSkill: (state, action: PayloadAction<string>) => {
			state.skills = state.skills.filter((skill) => skill !== action.payload);
		},
	},
});

export const { setSearch, setCity, addSkill, removeSkill } =
	filtersSlice.actions;

export default filtersSlice.reducer;
