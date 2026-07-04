import { Card, Select } from '@mantine/core';
import { MapPinIcon } from '@phosphor-icons/react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxHooks';
import { setCity } from '../../store/filtersSlice';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router';

export const CityFilter = () => {
	const dispatch = useTypedDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const city = useTypedSelector((state) => state.filters.city);

	const handleCityChange = useCallback(
		(value: string | null) => {
			if (!value) return;

			const params = new URLSearchParams(searchParams);

			if (value && value !== 'Все города') {
				params.set('city', value);
			} else {
				params.delete('city');
			}

			setSearchParams(params, { replace: true });
			dispatch(setCity(value));
		},
		[searchParams, setSearchParams, dispatch],
	);

	return (
		<Card shadow="sm" padding="lg" w={320}>
			<Select
				placeholder="Все города"
				leftSection={<MapPinIcon size={16} />}
				value={city}
				onChange={handleCityChange}
				data={[
					{ value: 'Все города', label: 'Все города' },
					{ value: 'Москва', label: 'Москва' },
					{ value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
				]}
				allowDeselect={false}
			/>
		</Card>
	);
};
