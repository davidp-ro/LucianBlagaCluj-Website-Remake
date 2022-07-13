import sanityClient from '@sanity/client';
import type { SanityClient } from '@sanity/client';
import { variables } from '$lib/variables';

export const getClient = (): SanityClient | null => {
	try {
		return sanityClient({
			projectId: variables.sanity.projectId,
			dataset: variables.sanity.dataset,
			apiVersion: '2022-07-01',
			useCdn: false // TODO: Revisit at the end
		});
	} catch (_) {
		return null;
	}
};

export const getFileDetails = (
	file: SanityReferenceable
): ISanityFileDetails => {
	const [_, id, extension] = file.asset._ref.split('-');

	return {
		filename: id,
		extension: extension,
		cdnUrl: `https://cdn.sanity.io/files/${variables.sanity.projectId}/${variables.sanity.dataset}/${id}.${extension}`
	};
};
