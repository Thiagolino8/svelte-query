<script lang="ts">
	import { productsQueries } from './products';
	import { createQuery } from '@tanstack/svelte-query';

	const query = createQuery(productsQueries().all());
</script>

<ul>
	{#each $query.data ?? [] as product}
		<li><a href="/{product.id}">{product.title}</a></li>
	{/each}
</ul>
