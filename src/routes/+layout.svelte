<script lang="ts">
	import { QueryClient, QueryClientProvider, hydrate } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import { page } from '$app/stores';
	import '@picocss/pico';
	import '../app.css';

	const client = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5
			}
		}
	});

	$: hydrate(client, $page.data.dehydratedClient);
</script>

<QueryClientProvider {client}>
	<nav style="display: {$page.url.pathname === '/' ? 'none' : 'flex'}">
		<ul>
			<li>
				{#if $page.params.id && Number($page.params.id) > 1}
					{@const previous = Number($page.params.id) - 1}
					<a href="/{previous}">
						{'<-'}
					</a>
				{/if}
			</li>
			<li><a role="button" href="/">Home</a></li>
			<li>
				<a href="/{Number($page.params.id) + 1}">
					{'->'}
				</a>
			</li>
		</ul>
	</nav>
	<slot />
	<SvelteQueryDevtools />
</QueryClientProvider>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-items: center;
	}
</style>
