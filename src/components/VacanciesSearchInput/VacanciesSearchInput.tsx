import { TextInput, Button, Group } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxHooks';
import { useCallback, useEffect } from 'react';
import { fetchVacancies } from '../../store/vacanciesSlice';
import { useSearchParams } from 'react-router-dom';
import { setSearch } from '../../store/filtersSlice';

export const VacanciesSearchInput = () => {
	const dispatch = useTypedDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const filters = useTypedSelector((state) => state.filters);

	const urlSearch = searchParams.get('search')?.trim() || '';

	useEffect(() => {
		dispatch(setSearch(urlSearch));
	}, [urlSearch, dispatch]);

	const updateSearch = useCallback(
		(value: string) => {
			const params = new URLSearchParams(searchParams);

			if (value.trim()) {
				params.set('search', value.trim());
			} else {
				params.delete('search');
			}

			setSearchParams(params, { replace: true });
			dispatch(setSearch(value.trim()));
		},
		[searchParams, setSearchParams, dispatch],
	);

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
				onChange={(e) => updateSearch(e.currentTarget.value)}
			/>
			<Button
				onClick={() => dispatch(fetchVacancies(filters))}
				type="button"
				variant="filled"
				color="indigo"
			>
				Найти
			</Button>
		</Group>
	);
};
