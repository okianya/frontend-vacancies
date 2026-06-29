import { Card, Select } from '@mantine/core';
import { MapPinIcon } from '@phosphor-icons/react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxHooks';
import { setCity } from '../../store/filtersSlice';

export const CityFilter = () => {
	const city = useTypedSelector((state) => state.filters.city);
	const dispatch = useTypedDispatch();

	const handleCityChange = (value: string | null) => {
		if (value) dispatch(setCity(value));
	};

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
