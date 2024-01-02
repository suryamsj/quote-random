<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.scss';

	onMount(async () => {
		if (!browser) return;

		await import('bootstrap');
	});
</script>

<main class="flex-shrink-0">
	<!-- Start Navbar -->
	<Navbar />
	<!-- End Navbar -->

	<slot />
</main>
