import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const Layout = () => (
	<AppShell mode="fixed" header={{ height: 60 }} padding="md" mt={30}>
		<AppShell.Header
			zIndex={1}
			withBorder={false}
			style={{
				boxShadow: '0px 2px 22.5px 0px #1C1D1F0D',
				backgroundColor: '#FFFFFF',
			}}
		>
			<Header />
		</AppShell.Header>
		<AppShell.Main>
			<Outlet />
		</AppShell.Main>
	</AppShell>
);
