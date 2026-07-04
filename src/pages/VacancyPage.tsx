import { AppShell } from '@mantine/core';
import { VacanciesTitle } from '../components/VacanciesTitle/VacanciesTitle';
import { VacanciesList } from '../modules/VacanciesList/VacanciesList';
import { PagePagination } from '../UI/PagePagination/PagePagination';
import { VacanciesFilter } from '../modules/VacanciesFilter/VacanciesFilter';

export const VacancyPage = () => {
	return (
		<>
			<VacanciesTitle />

			<AppShell
				mode="static"
				header={{ height: 50 }}
				navbar={{ width: 250, breakpoint: 'sm' }}
				withBorder={false}
				mt={30}
			>
				<AppShell.Navbar pt={20} withBorder={false} w={320} zIndex={-1}>
					<VacanciesFilter />
				</AppShell.Navbar>
				<AppShell.Main>
					<VacanciesList />
				</AppShell.Main>
			</AppShell>

			<PagePagination />
		</>
	);
};
