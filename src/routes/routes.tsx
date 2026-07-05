import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
} from 'react-router-dom';
import { VacancyPage } from '../pages/VacancyPage';
import { AboutVacancyPage } from '../pages/AboutVacancyPage';
import { Layout } from '../components/Layout/Layout';
import { ErrorPage } from '../pages/ErrorPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Navigate to="/vacancies/moscow" replace />} />
			<Route
				path="vacancies"
				element={<Navigate to="/vacancies/moscow" replace />}
			/>
			<Route path="vacancies/moscow" element={<VacancyPage />} />
			<Route path="vacancies/petersburg" element={<VacancyPage />} />
			<Route path="vacancies/:id" element={<AboutVacancyPage />} />
			<Route path="*" element={<ErrorPage />} />
		</Route>,
	),
);

export const AppRoutes = () => {
	return <RouterProvider router={router} />;
};
