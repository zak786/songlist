import {
  ALBUMS_LOADING,
  ALBUMS_LOAD_DATA,
  ALBUMS_SET_OFFSET
} from './types';
import {_fetchAlbums} from './services';

export function albumsSetLoading(loading: boolean) {
  return {
    type: ALBUMS_LOADING,
    payload: loading,
  };
}
export function albumsLoadData(user: any) {
  return {
    type: ALBUMS_LOAD_DATA,
    payload: user,
  };
}
export function albumsSetOffset(offset: any) {
  return {
    type: ALBUMS_SET_OFFSET,
    payload: offset,
  };
}
export const fetchAlbums = (searchTerm: String, limit: number, offset: number) => (dispatch: any, getState: any) => {
  return new Promise((resolve, reject) => {
    dispatch(albumsSetLoading(true));
    _fetchAlbums(searchTerm, limit, offset)
      .then((resp: any) => {
        if(resp?.resultCount){
          dispatch(albumsLoadData(resp?.results));
          dispatch(albumsSetOffset(offset));
          resolve(resp?.results);
        }else{
          resolve([]);
        }
      })
      .catch((err:any) => {
        reject(err);
      })
      .finally(() => {
        dispatch(albumsSetLoading(false));
      });
  });
};