import { queryOptions } from "@tanstack/svelte-query";

export type Products = Array<{
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: Array<string>;
}>;

const getProducts = async (kitFetch = fetch) => {
	const response = await kitFetch('https://dummyjson.com/products');
	const data = await response.json();

	return data.products as Products;
};

const getProduct = async (id: number, kitFetch = fetch) => {
	const response = await kitFetch(`https://dummyjson.com/products/${id}`);
	const data = await response.json();

	return data as Products[0];
}

export const productsQueries = (kitFetch = fetch) => ({
	base: queryOptions({
		queryKey: ['products'],
	}),
	all: () => queryOptions({
		queryKey: productsQueries().base.queryKey,
		queryFn: () => getProducts(kitFetch),
	}),
	one: (id: number) => queryOptions({
		queryKey: [...(productsQueries().base.queryKey ?? []), id],
		queryFn: () => getProduct(id, kitFetch),
	}),
})
