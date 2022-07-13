import { getClient } from '$lib/sanityUtils';

/** @type {import('./__types/').RequestHandler} */
export async function get() {
	const client = getClient();
	if (!client) {
		return {
			status: 500,
			body: new Error('Could not create CMS client.')
		};
	}

	const data = await client.fetch(`*[_type == "news"]`);

	if (data) {
		return {
			status: 200,
			body: {
				news: data as ISanityNewsData[]
			}
		};
	}

	return {
		status: 500,
		body: new Error('Failed to fetch the news.')
	};
}
