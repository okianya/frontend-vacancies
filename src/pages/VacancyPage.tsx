import { AppShell } from '@mantine/core';
import { VacanciesTitle } from '../components/VacanciesTitle/VacanciesTitle';
import { VacanciesList } from '../modules/VacanciesList/VacanciesList';
import { Header } from '../components/Header/Header';
import { PagePagination } from '../UI/PagePagination/PagePagination';
import { VacanciesFilter } from '../modules/VacanciesFilter/VacanciesFilter';

export const VacancyPage = () => {
	return (
		<AppShell mode="fixed" header={{ height: 60 }} padding="md" mt={30}>
			{/* --- Шапка --- */}
			<AppShell.Header
				withBorder={false}
				style={{
					boxShadow: '0px 2px 22.5px 0px #1C1D1F0D',
					backgroundColor: '#FFFFFF',
				}}
			>
				<Header />
			</AppShell.Header>
			<AppShell.Main>
				{/* --- Заголовок и инпут --- */}
				<VacanciesTitle />

				<AppShell
					mode="static"
					header={{ height: 50 }}
					navbar={{ width: 250, breakpoint: 'sm' }}
					withBorder={false}
					mt={30}
				>
					{/* --- Фильтры --- */}
					<AppShell.Navbar pt={20} withBorder={false} w={320} zIndex={-1}>
						<VacanciesFilter />
					</AppShell.Navbar>
					{/* --- Список вакансий --- */}
					<AppShell.Main>
						<VacanciesList />
					</AppShell.Main>
				</AppShell>
			</AppShell.Main>
			{/* --- Пагинация --- */}
			<PagePagination />
		</AppShell>
	);
};
