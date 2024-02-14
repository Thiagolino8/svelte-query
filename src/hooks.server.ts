import type { Handle } from '@sveltejs/kit';
import { QueryClient } from '@tanstack/svelte-query';

export const handle = (async ({ event, resolve }) => {
	event.locals.queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				gcTime: 0,
			}
		}
	});

	const response = await resolve(event);
	return response;
}) satisfies Handle;
