export interface AlbumsState {
    albums:any[],
    loading: boolean,
    offset: number,
    hasMore: boolean
}
export const ALBUMS_LOADING = "ALBUMS_LOADING";
export const ALBUMS_LOAD_DATA = "ALBUMS_LOAD_DATA";
export const ALBUMS_SET_OFFSET = "ALBUMS_SET_OFFSET";

interface AlbumsLoading {
    type: typeof ALBUMS_LOADING;
    payload: boolean;
}

interface AlbumsLoadData {
    type: typeof ALBUMS_LOAD_DATA;
    payload: any;
}

interface AlbumsSetOffset {
    type: typeof ALBUMS_SET_OFFSET;
    payload: number;
}
export type AlbumsActionTypes = AlbumsLoading | AlbumsLoadData | AlbumsSetOffset;