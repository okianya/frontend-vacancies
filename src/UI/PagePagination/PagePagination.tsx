import { Flex, Pagination } from '@mantine/core';

export const PagePagination = () => {
	return (
		<Flex m={30} justify="center">
			<Pagination total={10} color="indigo" withEdges />
		</Flex>
	);
};
