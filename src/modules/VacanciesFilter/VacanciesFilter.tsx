import { SkillsFilter } from '../../components/SkillsFilter/SkillsFilter';
import { Group } from '@mantine/core';

export const VacanciesFilter = () => {
	return (
		<Group gap={10} w={320}>
			<SkillsFilter />
		</Group>
	);
};
