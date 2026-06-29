import { Pill, PillGroup, PillsInput } from '@mantine/core';
import { useTypedSelector, useTypedDispatch } from '../../hooks/reduxHooks';
import { removeSkill } from '../../store/filtersSlice';

export const SkillsPills = () => {
	const skills = useTypedSelector((state) => state.filters.skills);
	const dispatch = useTypedDispatch();

	const handleRemoveSkill = (skill: string) => {
		dispatch(removeSkill(skill));
	};

	return (
		<PillsInput variant="unstyled">
			<PillGroup>
				{skills.map((pill) => (
					<Pill
						key={pill}
						withRemoveButton
						onRemove={() => handleRemoveSkill(pill)}
					>
						{pill}
					</Pill>
				))}
			</PillGroup>
		</PillsInput>
	);
};
