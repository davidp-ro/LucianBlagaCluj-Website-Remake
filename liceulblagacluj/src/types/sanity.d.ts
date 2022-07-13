/**
 * @brief Sanity.io CMS types and interfaces
 */

/* ---------------------------------[ Types ]-------------------------------- */
type SanityData = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};

type SanityPortableText = {
	_type: string;
	_key: string;
	style: string;
	children: any[];
	markDefs: any[];
}[];

type SanityReferenceable = {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	}
}

/* -------------------------------[ Interfaces ]----------------------------- */
interface ISanityNewsData extends SanityData {
	/**
   * The post's title
   */
  title: string;

  /**
   * If provided, the post's body, in portable text format (needs parsing with
   * **PortableText**: `<PortableText value={<a body object>} />`)
   */
	body?: SanityPortableText;

  /**
   * If provided, a reference to an image asset
   */
	image?: SanityReferenceable;

  /**
   * If provided, a reference to an attachment file
   */
  file?: SanityReferenceable;
}

interface ISanityFileDetails {
  filename: string;
  extension: string;
  cdnUrl: string;
}
