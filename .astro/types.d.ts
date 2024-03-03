declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"en/7-essential-tips-to-survive-the-first-night-in-minecraft.mdx": {
	id: "en/7-essential-tips-to-survive-the-first-night-in-minecraft.mdx";
  slug: "en/7-essential-tips-to-survive-the-first-night-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/discover-why-mario-bros-is-one-of-the-most-iconic-games.mdx": {
	id: "en/discover-why-mario-bros-is-one-of-the-most-iconic-games.mdx";
  slug: "en/discover-why-mario-bros-is-one-of-the-most-iconic-games";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/geometry-dash-22-sneak-peek-3.mdx": {
	id: "en/geometry-dash-22-sneak-peek-3.mdx";
  slug: "en/geometry-dash-22-sneak-peek-3";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/geometry-dash-22-was-updated-the-images-on-steam.mdx": {
	id: "en/geometry-dash-22-was-updated-the-images-on-steam.mdx";
  slug: "en/geometry-dash-22-was-updated-the-images-on-steam";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/geometry-dash.mdx": {
	id: "en/geometry-dash.mdx";
  slug: "en/geometry-dash";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-enable-experimental-features-in-minecraft.mdx": {
	id: "en/how-to-enable-experimental-features-in-minecraft.mdx";
  slug: "en/how-to-enable-experimental-features-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-get-amber-in-lego-fortnite.mdx": {
	id: "en/how-to-get-amber-in-lego-fortnite.mdx";
  slug: "en/how-to-get-amber-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-get-copper-in-lego-fortnite.mdx": {
	id: "en/how-to-get-copper-in-lego-fortnite.mdx";
  slug: "en/how-to-get-copper-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-get-diamonds-faster-in-geometry-dash.mdx": {
	id: "en/how-to-get-diamonds-faster-in-geometry-dash.mdx";
  slug: "en/how-to-get-diamonds-faster-in-geometry-dash";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-get-fertilizer-in-lego-fortnite.mdx": {
	id: "en/how-to-get-fertilizer-in-lego-fortnite.mdx";
  slug: "en/how-to-get-fertilizer-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-get-flexwood-in-lego-fortnite.mdx": {
	id: "en/how-to-get-flexwood-in-lego-fortnite.mdx";
  slug: "en/how-to-get-flexwood-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-get-iron-in-lego-fortnite.mdx": {
	id: "en/how-to-get-iron-in-lego-fortnite.mdx";
  slug: "en/how-to-get-iron-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-get-netherite-in-minecraft.mdx": {
	id: "en/how-to-get-netherite-in-minecraft.mdx";
  slug: "en/how-to-get-netherite-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-get-obsidian-in-fortnite-lego.mdx": {
	id: "en/how-to-get-obsidian-in-fortnite-lego.mdx";
  slug: "en/how-to-get-obsidian-in-fortnite-lego";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-get-rubi-in-lego-fortnite.mdx": {
	id: "en/how-to-get-rubi-in-lego-fortnite.mdx";
  slug: "en/how-to-get-rubi-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/how-to-know-my-coordinates-in-minecraft.mdx": {
	id: "en/how-to-know-my-coordinates-in-minecraft.mdx";
  slug: "en/how-to-know-my-coordinates-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/learn-how-to-use-redstone.mdx": {
	id: "en/learn-how-to-use-redstone.mdx";
  slug: "en/learn-how-to-use-redstone";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/minecraft.mdx": {
	id: "en/minecraft.mdx";
  slug: "en/minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/new-trades-and-cartographers-in-minecraft-1-20-2-pre-release-2-1.mdx": {
	id: "en/new-trades-and-cartographers-in-minecraft-1-20-2-pre-release-2-1.mdx";
  slug: "en/new-trades-and-cartographers-in-minecraft-1-20-2-pre-release-2-1";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-22-is-too-close-to-exit.mdx": {
	id: "en/the-22-is-too-close-to-exit.mdx";
  slug: "en/the-22-is-too-close-to-exit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-7-best-seeds-for-minecraft-1-20.mdx": {
	id: "en/the-7-best-seeds-for-minecraft-1-20.mdx";
  slug: "en/the-7-best-seeds-for-minecraft-1-20";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-7-most-influential-video-games-of-all-time.mdx": {
	id: "en/the-7-most-influential-video-games-of-all-time.mdx";
  slug: "en/the-7-most-influential-video-games-of-all-time";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-best-levels-of-games-recreated-in-geometry-dash.mdx": {
	id: "en/the-best-levels-of-games-recreated-in-geometry-dash.mdx";
  slug: "en/the-best-levels-of-games-recreated-in-geometry-dash";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-hitbox-will-change-in-minecraft-1-20-2-snapshot-23w32a.mdx": {
	id: "en/the-hitbox-will-change-in-minecraft-1-20-2-snapshot-23w32a.mdx";
  slug: "en/the-hitbox-will-change-in-minecraft-1-20-2-snapshot-23w32a";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-new-level-of-geometry-dash-22.mdx": {
	id: "en/the-new-level-of-geometry-dash-22.mdx";
  slug: "en/the-new-level-of-geometry-dash-22";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-new-platform-mode-of-geometry-dash-22.mdx": {
	id: "en/the-new-platform-mode-of-geometry-dash-22.mdx";
  slug: "en/the-new-platform-mode-of-geometry-dash-22";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-new-sounds-custom-geometry-dash-22.mdx": {
	id: "en/the-new-sounds-custom-geometry-dash-22.mdx";
  slug: "en/the-new-sounds-custom-geometry-dash-22";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-redstone-components-in-minecraft.mdx": {
	id: "en/the-redstone-components-in-minecraft.mdx";
  slug: "en/the-redstone-components-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-trailer-of-minecraft-live-2023.mdx": {
	id: "en/the-trailer-of-minecraft-live-2023.mdx";
  slug: "en/the-trailer-of-minecraft-live-2023";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/the-villagers-will-change-in-the-1-20-2-snapshot-23w31a.mdx": {
	id: "en/the-villagers-will-change-in-the-1-20-2-snapshot-23w31a.mdx";
  slug: "en/the-villagers-will-change-in-the-1-20-2-snapshot-23w31a";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/valorant.mdx": {
	id: "en/valorant.mdx";
  slug: "en/valorant";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/what-are-the-moons-of-geometry-dash-22.mdx": {
	id: "en/what-are-the-moons-of-geometry-dash-22.mdx";
  slug: "en/what-are-the-moons-of-geometry-dash-22";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"en/xbox-wins-the-lawsuit-against-play-station-for-the-purchase-of-activision-blizzard.mdx": {
	id: "en/xbox-wins-the-lawsuit-against-play-station-for-the-purchase-of-activision-blizzard.mdx";
  slug: "en/xbox-wins-the-lawsuit-against-play-station-for-the-purchase-of-activision-blizzard";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/7-essential-tips-to-survive-the-first-night-in-minecraft.mdx": {
	id: "es/7-essential-tips-to-survive-the-first-night-in-minecraft.mdx";
  slug: "es/7-essential-tips-to-survive-the-first-night-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/discover-why-mario-bros-is-one-of-the-most-iconic-games.mdx": {
	id: "es/discover-why-mario-bros-is-one-of-the-most-iconic-games.mdx";
  slug: "es/discover-why-mario-bros-is-one-of-the-most-iconic-games";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/geometry-dash-22-sneak-peek-3.mdx": {
	id: "es/geometry-dash-22-sneak-peek-3.mdx";
  slug: "es/geometry-dash-22-sneak-peek-3";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/geometry-dash-22-was-updated-the-images-on-steam.mdx": {
	id: "es/geometry-dash-22-was-updated-the-images-on-steam.mdx";
  slug: "es/geometry-dash-22-was-updated-the-images-on-steam";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/geometry-dash.mdx": {
	id: "es/geometry-dash.mdx";
  slug: "es/geometry-dash";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-enable-experimental-features-in-minecraft.mdx": {
	id: "es/how-to-enable-experimental-features-in-minecraft.mdx";
  slug: "es/how-to-enable-experimental-features-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-get-amber-in-lego-fortnite.mdx": {
	id: "es/how-to-get-amber-in-lego-fortnite.mdx";
  slug: "es/how-to-get-amber-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-get-copper-in-lego-fortnite.mdx": {
	id: "es/how-to-get-copper-in-lego-fortnite.mdx";
  slug: "es/how-to-get-copper-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-get-diamonds-faster-in-geometry-dash.mdx": {
	id: "es/how-to-get-diamonds-faster-in-geometry-dash.mdx";
  slug: "es/how-to-get-diamonds-faster-in-geometry-dash";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-get-fertilizer-in-lego-fortnite.mdx": {
	id: "es/how-to-get-fertilizer-in-lego-fortnite.mdx";
  slug: "es/how-to-get-fertilizer-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-get-flexwood-in-lego-fortnite.mdx": {
	id: "es/how-to-get-flexwood-in-lego-fortnite.mdx";
  slug: "es/how-to-get-flexwood-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-get-iron-in-lego-fortnite.mdx": {
	id: "es/how-to-get-iron-in-lego-fortnite.mdx";
  slug: "es/how-to-get-iron-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-get-netherite-in-minecraft.mdx": {
	id: "es/how-to-get-netherite-in-minecraft.mdx";
  slug: "es/how-to-get-netherite-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-get-obsidian-in-fortnite-lego.mdx": {
	id: "es/how-to-get-obsidian-in-fortnite-lego.mdx";
  slug: "es/how-to-get-obsidian-in-fortnite-lego";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-get-rubi-in-lego-fortnite.mdx": {
	id: "es/how-to-get-rubi-in-lego-fortnite.mdx";
  slug: "es/how-to-get-rubi-in-lego-fortnite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/how-to-know-my-coordinates-in-minecraft.mdx": {
	id: "es/how-to-know-my-coordinates-in-minecraft.mdx";
  slug: "es/how-to-know-my-coordinates-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/learn-how-to-use-redstone.mdx": {
	id: "es/learn-how-to-use-redstone.mdx";
  slug: "es/learn-how-to-use-redstone";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/minecraft.mdx": {
	id: "es/minecraft.mdx";
  slug: "es/minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/new-trades-and-cartographers-in-minecraft-1-20-2-pre-release-2-1.mdx": {
	id: "es/new-trades-and-cartographers-in-minecraft-1-20-2-pre-release-2-1.mdx";
  slug: "es/new-trades-and-cartographers-in-minecraft-1-20-2-pre-release-2-1";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-22-is-too-close-to-exit.mdx": {
	id: "es/the-22-is-too-close-to-exit.mdx";
  slug: "es/the-22-is-too-close-to-exit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-7-best-seeds-for-minecraft-1-20.mdx": {
	id: "es/the-7-best-seeds-for-minecraft-1-20.mdx";
  slug: "es/the-7-best-seeds-for-minecraft-1-20";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-7-most-influential-video-games-of-all-time.mdx": {
	id: "es/the-7-most-influential-video-games-of-all-time.mdx";
  slug: "es/the-7-most-influential-video-games-of-all-time";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-best-levels-of-games-recreated-in-geometry-dash.mdx": {
	id: "es/the-best-levels-of-games-recreated-in-geometry-dash.mdx";
  slug: "es/the-best-levels-of-games-recreated-in-geometry-dash";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-hitbox-will-change-in-minecraft-1-20-2-snapshot-23w32a.mdx": {
	id: "es/the-hitbox-will-change-in-minecraft-1-20-2-snapshot-23w32a.mdx";
  slug: "es/the-hitbox-will-change-in-minecraft-1-20-2-snapshot-23w32a";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-new-level-of-geometry-dash-22.mdx": {
	id: "es/the-new-level-of-geometry-dash-22.mdx";
  slug: "es/the-new-level-of-geometry-dash-22";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-new-platform-mode-of-geometry-dash-22.mdx": {
	id: "es/the-new-platform-mode-of-geometry-dash-22.mdx";
  slug: "es/the-new-platform-mode-of-geometry-dash-22";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-new-sounds-custom-geometry-dash-22.mdx": {
	id: "es/the-new-sounds-custom-geometry-dash-22.mdx";
  slug: "es/the-new-sounds-custom-geometry-dash-22";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-redstone-components-in-minecraft.mdx": {
	id: "es/the-redstone-components-in-minecraft.mdx";
  slug: "es/the-redstone-components-in-minecraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-trailer-of-minecraft-live-2023.mdx": {
	id: "es/the-trailer-of-minecraft-live-2023.mdx";
  slug: "es/the-trailer-of-minecraft-live-2023";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/the-villagers-will-change-in-the-1-20-2-snapshot-23w31a.mdx": {
	id: "es/the-villagers-will-change-in-the-1-20-2-snapshot-23w31a.mdx";
  slug: "es/the-villagers-will-change-in-the-1-20-2-snapshot-23w31a";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/valorant.mdx": {
	id: "es/valorant.mdx";
  slug: "es/valorant";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/what-are-the-moons-of-geometry-dash-22.mdx": {
	id: "es/what-are-the-moons-of-geometry-dash-22.mdx";
  slug: "es/what-are-the-moons-of-geometry-dash-22";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"es/xbox-wins-the-lawsuit-against-play-station-for-the-purchase-of-activision-blizzard.mdx": {
	id: "es/xbox-wins-the-lawsuit-against-play-station-for-the-purchase-of-activision-blizzard.mdx";
  slug: "es/xbox-wins-the-lawsuit-against-play-station-for-the-purchase-of-activision-blizzard";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"author": {
"brayan-cordova": {
	id: "brayan-cordova";
  collection: "author";
  data: InferEntrySchema<"author">
};
};
"game": {
"geometry-dash": {
	id: "geometry-dash";
  collection: "game";
  data: InferEntrySchema<"game">
};
"lego-fortnite": {
	id: "lego-fortnite";
  collection: "game";
  data: InferEntrySchema<"game">
};
"minecraft": {
	id: "minecraft";
  collection: "game";
  data: InferEntrySchema<"game">
};
"valorant": {
	id: "valorant";
  collection: "game";
  data: InferEntrySchema<"game">
};
};
"tag": {
"curiosidades": {
	id: "curiosidades";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"e-sports": {
	id: "e-sports";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"evento": {
	id: "evento";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"guia": {
	id: "guia";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"influencer": {
	id: "influencer";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"mod": {
	id: "mod";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"noticia": {
	id: "noticia";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"objeto": {
	id: "objeto";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"reseña": {
	id: "reseña";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"tecnologia": {
	id: "tecnologia";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
"top": {
	id: "top";
  collection: "tag";
  data: InferEntrySchema<"tag">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
