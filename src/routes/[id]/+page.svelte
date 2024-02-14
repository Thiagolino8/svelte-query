<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { productsQueries } from '../products';

	export let data;

	$: query = createQuery(productsQueries().one(data.id));
</script>

<h1>{$query.data?.title}</h1>
<p>{$query.data?.description}</p>
