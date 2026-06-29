import { Title, Text, Stack, Group } from '@mantine/core';
import { VacanciesSearchInput } from '../VacanciesSearchInput/VacanciesSearchInput';

export const VacanciesTitle = () => {
	return (
		<Group justify="space-between" align="center" wrap="wrap" gap="md">
			<Stack
				bg="var(--mantine-color-body)"
				align="flex-start"
				justify="center"
				gap="xs"
			>
				<Title order={1} size="h1">
					Список вакансий
				</Title>
				<Text c="dimmed">по профессии Frontend-разработчик</Text>
			</Stack>
			<VacanciesSearchInput />
		</Group>
	);
};
