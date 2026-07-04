import { Pill, PillGroup, PillsInput } from '@mantine/core';
import { useTypedSelector, useTypedDispatch } from '../../hooks/reduxHooks';
import { setSkills } from '../../store/filtersSlice';
import { useSearchParams } from 'react-router';
import { useCallback } from 'react';

export const SkillsPills = () => {
	const dispatch = useTypedDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const skills = useTypedSelector((state) => state.filters.skills);

	const removeSkill = useCallback(
		(skillToRemove: string) => {
			const newSkills = skills.filter((skill) => skill !== skillToRemove);

			const params = new URLSearchParams(searchParams);

			if (newSkills.length > 0) {
				params.set('skills', newSkills.join(','));
			} else {
				params.delete('skills');
			}

			setSearchParams(params, { replace: true });

			dispatch(setSkills(newSkills));
		},
		[skills, searchParams, setSearchParams, dispatch],
	);
	return (
		<PillsInput variant="unstyled">
			<PillGroup>
				{skills.map((pill) => (
					<Pill key={pill} withRemoveButton onRemove={() => removeSkill(pill)}>
						{pill}
					</Pill>
				))}
			</PillGroup>
		</PillsInput>
	);
};
