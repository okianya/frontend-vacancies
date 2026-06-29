export type Space = 'office' | 'hybrid' | 'remote';

export const SpaceConfig: Record<
	Space,
	{
		label: string;
		color: string;
	}
> = {
	office: {
		label: 'офис',
		color: 'pink',
	},
	hybrid: {
		label: 'гибрид',
		color: 'teal',
	},
	remote: {
		label: 'можно удаленно',
		color: 'indigo',
	},
} as const;
