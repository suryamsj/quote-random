<script>
	import Section from '$lib/components/Section.svelte';

	async function getData() {
		try {
			const res = await fetch('https://api.akuari.my.id/randomtext/quotesanime');
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	let quoteAnime = getData();
</script>

<svelte:head>
	<title>Random Quote Generator - Anime</title>
</svelte:head>

<Section>
	<h1>Random Quote Anime</h1>
	{#await quoteAnime}
		<p>Loading...</p>
	{:then item}
		<img class="w-25 img-fluid mb-2" src={item.result.img} alt="Anime" />
		<h3>{item.result.char_name}</h3>
		<p>{item.result.quotes}</p>
	{:catch}
		<p>API Error</p>
	{/await}
</Section>
