<script lang="ts">
	import { getClient, getFileDetails } from '$lib/sanityUtils';
	const sanityClient = getClient();

	if (sanityClient == null) {
		throw new Error('Failed to get sanity client');
	}

	import { variables } from '$lib/variables';
	import { PortableText } from '@portabletext/svelte';
	import imageUrlBuilder from '@sanity/image-url';

	let news: ISanityNewsData[] = $$props.news;
</script>

<h1>Welcome to SvelteKit</h1>
<p>vars: {JSON.stringify(variables)}</p>

<hr />

{#if news && news.length > 0}
	<h2>News</h2>
	<ul>
		{#each news as item}
			<li>{item.title}</li>
			{#if item.body}
				<PortableText value={item.body} />
			{/if}
			{#if item.image}
				<img
					src={imageUrlBuilder(sanityClient).image(item.image).url()}
					alt={item.title}
				/>
			{/if}
			{#if item.file}
				<br />
				<a
					href={getFileDetails(item.file).cdnUrl}
					rel="noopener"
					target="_blank"
				>
					Attachment
				</a>
				<br />
			{/if}
		{/each}
	</ul>
{/if}
