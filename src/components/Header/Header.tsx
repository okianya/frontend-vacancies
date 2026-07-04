import { Group, Text, Image, Button } from '@mantine/core';
import { UserCircleIcon } from '@phosphor-icons/react';
import logo from '../../assets/logo.png';

export const Header = () => {
	return (
		<Group
			px="md"
			align="center"
			h="100%"
			style={{
				boxShadow: '0px 2px 22.5px 0px #1C1D1F0D',
				backgroundColor: '#FFFFFF',
			}}
		>
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
