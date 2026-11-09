// Content API response and editor payload for the Hymns feature.
export interface HymnVerseInterface {
  order: number;
  label?: string;
  text: string;
  language?: string;
}
export interface HymnInterface {
  id?: string;
  churchId?: string;
  number: number;
  title: string;
  language?: string;
  verses?: HymnVerseInterface[];
  chorus?: string;
  author?: string;
  composer?: string;
  translator?: string;
  tune?: string;
  category?: string;
  source?: string;
  copyright?: string;
  license?: string;
  attribution?: string;
  published?: boolean;
  archived?: boolean;
}
