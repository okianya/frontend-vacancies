import { TextInput, Button, Group } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { setSearch } from '../../store/filtersSlice';
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxHooks';
import { useEffect } from 'react';
import { fetchVacancies } from '../../store/vacanciesSlice';

export const VacanciesSearchInput = () => {
	const dispatch = useTypedDispatch();
	const filters = useTypedSelector((state) => state.filters);

	const handleSearchChange = (value: string) => {
		dispatch(setSearch(value));
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(fetchVacancies(filters));
		}, 800);

		return () => clearTimeout(timeout);
	}, [dispatch, filters]);

	return (
		<Group>
			<TextInput
				leftSectionPointerEvents="none"
				leftSection={<MagnifyingGlassIcon size={12} />}
				w={400}
				h={32}
				placeholder="Должность или название компании"
				value={filters.search}
				onChange={(e) => handleSearchChange(e.currentTarget.value)}
			/>
			<Button
				onClick={() => dispatch(fetchVacancies(filters))}
				variant="filled"
				color="indigo"
			>
				Найти
			</Button>
		</Group>
	);
};
