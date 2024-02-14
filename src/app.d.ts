// See https://kit.svelte.dev/docs/types#app

import type { QueryClient } from '@tanstack/svelte-query';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			queryClient: QueryClient;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
