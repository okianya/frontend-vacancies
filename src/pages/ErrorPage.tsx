import { Button, Card, Group, Image, Stack, Text, Title } from '@mantine/core';
import { Link, useRouteError } from 'react-router-dom';
import catGif from '../assets/sad-cat.gif';

export const ErrorPage = () => {
	const err = useRouteError();

	if (!err) {
		return (
			<Card w={700} ml="auto" mr="auto" mt={20} p={30}>
				<Group justify="flex-start" mb={20}>
					<Stack align="flex-start" w={500}>
						<Title order={2}>Упс! Такой страницы не существует</Title>
						<Text>Давайте перейдем к началу</Text>
					</Stack>

					<Button component={Link} to={'/vacancies'} color="indigo">
						На главную
					</Button>
				</Group>
				<Image src={catGif} radius="md" />
			</Card>
		);
	}

	throw err;
};
