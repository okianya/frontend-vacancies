import { Route, Routes, Navigate } from 'react-router-dom';
import { VacancyPage } from '../pages/VacancyPage';
import { AboutVacancyPage } from '../pages/AboutVacancyPage';
import { Layout } from '../components/Layout/Layout';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Navigate to="/vacancies" replace />} />
				<Route path="vacancies" element={<VacancyPage />} />
				<Route path="/vacancies/:id" element={<AboutVacancyPage />} />
			</Route>
		</Routes>
	);
};
