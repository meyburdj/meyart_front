export interface Artwork {
    id?: number;
    url?: string;
    title?: string;
    media?: string;
    size?: string;
    price?: number;
    genre?: string;
    quantity?: number;
    information?: string;
    artist_id?: number;
    artist_name?: string;
}

export interface ArtworkTruncated extends Pick<Artwork,
    'id' | 'url' | 'title' | 'genre' | 'artist_id'> { }


