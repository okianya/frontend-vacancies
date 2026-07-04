import { useParams } from 'react-router';
import { useTypedDispatch, useTypedSelector } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import { fetchVacancyById } from '../store/vacanciesSlice';
import { Card, Stack, Text } from '@mantine/core';
import { VacancyCard } from '../components/VacancyCard/VacancyCard';

export const AboutVacancyPage = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useTypedDispatch();
	const { currentVacancy, error } = useTypedSelector(
		(state) => state.vacancies,
	);

	useEffect(() => {
		if (id) {
			dispatch(fetchVacancyById(id));
		}
	}, [id, dispatch]);

	if (error) return <p>Ошибка при загрузке вакансии</p>;
	if (!currentVacancy) return <p>Вакансия не найдена</p>;

	return (
		<Stack w={660} ml="auto" mr="auto" mt={20}>
			<VacancyCard {...currentVacancy} showButton={false} />
			<Card padding="lg">
				<Stack>
					<Stack align="flex-start" justify="center">
						<Text size="lg" fw={700}>
							Компания
						</Text>

						<Text ta={'start'}>{currentVacancy.about_company}</Text>
					</Stack>

					<Stack align="flex-start" justify="center">
						<Text size="lg" fw={700}>
							О вакансии:
						</Text>

						<Text ta="start">{currentVacancy.description}</Text>
					</Stack>
				</Stack>
			</Card>
		</Stack>
	);
};
