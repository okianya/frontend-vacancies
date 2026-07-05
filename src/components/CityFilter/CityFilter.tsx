import { Group, Tabs } from '@mantine/core';
import { useTypedDispatch } from '../../hooks/reduxHooks';
import { setCity } from '../../store/filtersSlice';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const CityFilter = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const activeTab = getActiveTab(location.pathname);

	useEffect(() => {
		dispatch(
			setCity(activeTab === 'petersburg' ? 'Санкт-Петербург' : 'Москва'),
		);
	}, [activeTab, dispatch]);

	const handleTabChange = useCallback(
		(value: string | null) => {
			if (value === 'petersburg') {
				navigate('/vacancies/petersburg', { replace: true });
			} else {
				navigate('/vacancies/moscow', { replace: true });
			}
		},
		[navigate],
	);

	return (
		<Group justify="flex-start" w={660}>
			<Tabs color="indigo" value={activeTab} onChange={handleTabChange}>
				<Tabs.List>
					<Tabs.Tab value="moscow">Москва</Tabs.Tab>
					<Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
				</Tabs.List>
			</Tabs>
		</Group>
	);
};

const getActiveTab = (pathname: string) => {
	if (pathname.includes('petersburg')) {
		return 'petersburg';
	}

	return 'moscow';
};
