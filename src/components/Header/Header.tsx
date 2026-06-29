import { Group, Image, Text, Button } from '@mantine/core';
import logo from '../../assets/logo.svg';
import { UserCircleIcon } from '@phosphor-icons/react';

export const Header = () => {
	return (
		<Group h="100%" px="md" align="center">
			<Image src={logo} w={120} alt="logo" />

			<Group gap="xl" style={{ flex: 1, justifyContent: 'center' }}>
				<Text fw={500} size="lg">
					Вакансии FE
				</Text>
				<Button
					variant="transparent"
					leftSection={<UserCircleIcon size={25} />}
					c="dimmed"
				>
					<Text c="dimmed">Обо мне</Text>
				</Button>
			</Group>

			<div style={{ width: 120 }} />
		</Group>
	);
};
