import { Group, Loader, Alert, Text } from '@mantine/core';
import { VacancyCard } from '../../components/VacancyCard/VacancyCard';
import { useTypedSelector } from '../../hooks/reduxHooks';
import { CityFilter } from '../../components/CityFilter/CityFilter';

export const VacanciesList = () => {
	const { vacancies, loading, error, isLoaded } = useTypedSelector(
		(state) => state.vacancies,
	);

	if (!isLoaded && loading) {
		return (
			<div
				style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0' }}
			>
				<Loader size="xl" color="indigo" />
			</div>
		);
	}

	if (error) {
		return (
			<Group justify="center">
				<Alert title="Ошибка" variant="light" color="pink">
					<Text size="md">Не удалось загрузить вакансии</Text>
				</Alert>
			</Group>
		);
	}

	return (
		<>
			<Group justify="flex-end">
				<CityFilter />
				<ul>
					{vacancies.map((job) => (
						<li key={job.id}>
							<VacancyCard {...job} />
						</li>
					))}
				</ul>
			</Group>
		</>
	);
};
