<script>
	import Section from '$lib/components/Section.svelte';

	export let data;

	$: ({ quoteTokohIndo } = data);
</script>

<svelte:head>
	<title>Random Quote Generator - Tokoh Indo</title>
</svelte:head>

<Section>
	<h1>Random Tokoh Indo</h1>
	<img class="w-25 img-fluid mb-2" src={quoteTokohIndo.hasil.img} alt="Tokoh Indo" />
	<h3>{quoteTokohIndo.hasil.nama}</h3>
	<p>{quoteTokohIndo.hasil.history}</p>
</Section>
