import { Card, Text, ActionIcon, Input, Flex } from '@mantine/core';
import { SkillsPills } from '../../components/SkillsPills/SkillsPills';
import { PlusIcon } from '@phosphor-icons/react';
import { useTypedDispatch } from '../../hooks/reduxHooks';
import { useState } from 'react';
import { addSkill } from '../../store/filtersSlice';

export const SkillsFilter = () => {
	const dispatch = useTypedDispatch();

	const [newSkill, setNewSkill] = useState('');

	const handleAddSkill = () => {
		if (newSkill.trim()) {
			dispatch(addSkill(newSkill));
			setNewSkill('');
		}
	};

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
