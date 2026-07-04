import { Card, Button, Stack, Text, Badge, Group } from '@mantine/core';
import type { Vacancies } from '../../types/vacancies';
import { type Space, SpaceConfig } from '../../types/space';
import { Link } from 'react-router';

export const VacancyCard = ({
	id,
	name,
	salary,
	experience,
	company_name,
	city,
	space,
	showButton = true,
}: Vacancies & { showButton?: boolean }) => {
	const config = SpaceConfig[space as Space] || {
		label: space,
	};

	return (
		<Card padding="lg" w={660}>
			<Stack align="flex-start" justify="center" gap="xs">
				<Text size="lg" fw={700} c="indigo">
					{name}
				</Text>
				<Group>
					<Text>{salary} ₽</Text>
					<Text c="dimmed" size="sm">
						Опыт {experience}
					</Text>
				</Group>

				<Text c="dimmed" size="sm">
					{company_name}
				</Text>
				<Badge color={config.color} radius="md">
					{config.label}
				</Badge>
				<Text>{city}</Text>
				{showButton && (
					<Group>
						<Button
							color="rgba(48, 48, 48, 1)"
							component={Link}
							to={`/vacancies/${id}`}
						>
							Смотреть вакансию
						</Button>
					</Group>
				)}
			</Stack>
		</Card>
	);
};
