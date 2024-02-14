import { dehydrate } from '@tanstack/svelte-query';
import { productsQueries } from '../products';

export const load = async ({ locals, params, fetch }) => {
	const { queryClient } = locals;
	const id = Number(params.id);

	await queryClient.prefetchQuery(productsQueries(fetch).one(id));
	return { dehydratedClient: dehydrate(queryClient), id };
};
