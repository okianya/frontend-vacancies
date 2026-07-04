import type { Vacancies } from './vacancies';

export type CurrentVacancy = Vacancies & {
	description: string;
	about_company: string;
};
