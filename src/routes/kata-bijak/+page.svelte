<script>
	import Section from '$lib/components/Section.svelte';

	export let data;

	$: ({ quoteBijak } = data);
</script>

<svelte:head>
	<title>Random Quote Generator - Kata Bijak</title>
</svelte:head>

<Section>
	<h1>Random Quote Kata Bijak</h1>
	<h3>{quoteBijak?.hasil?.author}</h3>
	<p>{quoteBijak?.hasil?.quotes}</p>
</Section>
