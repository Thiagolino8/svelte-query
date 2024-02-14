import { dehydrate } from '@tanstack/svelte-query';
import { productsQueries } from './products.js';

export const load = async ({ locals, fetch }) => {
	const { queryClient } = locals;

	await queryClient.prefetchQuery(productsQueries(fetch).all());
	return { dehydratedClient: dehydrate(queryClient) };
};
