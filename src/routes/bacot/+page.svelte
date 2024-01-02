<script>
	import Section from '$lib/components/Section.svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {{ hasil: { result: string; }; } | null}
	 */
	let quoteBacot = null;

	async function getData() {
		try {
			const res = await fetch('https://api.akuari.my.id/randomtext/bacot');
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	onMount(async () => {
		quoteBacot = await getData();
	});
</script>

<svelte:head>
	<title>Random Quote Generator - Bacot</title>
</svelte:head>

<Section>
	<h1>Random Quote Bacot</h1>
	<p>{quoteBacot?.hasil.result || 'Belum ada data'}</p>
</Section>
