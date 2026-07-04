import { Flex, Pagination } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';

export const PagePagination = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const activePage = Number(searchParams.get('page')) || 1;

	const handlePageChange = (page: number) => {
		const nextParams = new URLSearchParams(searchParams);
		nextParams.set('page', String(page));
		setSearchParams(nextParams, { replace: true });
	};

	return (
		<Flex m={30} justify="center">
			<Pagination
				total={10}
				color="indigo"
				withEdges
				value={activePage}
				onChange={handlePageChange}
			/>
		</Flex>
	);
};
