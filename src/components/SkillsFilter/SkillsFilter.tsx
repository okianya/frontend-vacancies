import { Card, Text, ActionIcon, Input, Flex } from '@mantine/core';
import { SkillsPills } from '../../components/SkillsPills/SkillsPills';
import { PlusIcon } from '@phosphor-icons/react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxHooks';
import { useCallback, useState } from 'react';
import { setSkills } from '../../store/filtersSlice';
import { useSearchParams } from 'react-router';

export const SkillsFilter = () => {
	const dispatch = useTypedDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const [newSkill, setNewSkill] = useState('');

	const currentSkills = useTypedSelector((state) => state.filters.skills);

	const addSkill = useCallback(
		(skill: string) => {
			const trimmed = skill.trim();
			if (!trimmed) return;

			const newSkills = [...currentSkills, trimmed];

			const params = new URLSearchParams(searchParams);
			params.set('skills', newSkills.join(','));
			setSearchParams(params, { replace: true });

			dispatch(setSkills(newSkills));

			setNewSkill('');
		},
		[currentSkills, searchParams, setSearchParams, dispatch],
	);

	const handleAddSkill = () => addSkill(newSkill);

	return (
		<>
			<Card shadow="sm" padding="lg" w={320}>
				<Text fw={500} ta="left">
					Ключевые навыки
				</Text>
				<Flex justify="space-between" mt="md" mb="xs" gap={10}>
					<Input
						placeholder="Навык"
						style={{ flex: 1 }}
						value={newSkill}
						onChange={(e) => setNewSkill(e.currentTarget.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') handleAddSkill();
						}}
					/>

					<ActionIcon
						size="lg"
						variant="light"
						aria-label="Settings"
						onClick={handleAddSkill}
					>
						<PlusIcon style={{ width: '70%', height: '70%' }} />
					</ActionIcon>
				</Flex>

				<SkillsPills />
			</Card>
		</>
	);
};
