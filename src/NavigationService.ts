export enum ROUTE {
  ALBUMS = 'albums',
  PHOTOS = 'photos'
}

export function getSpecificAlbumPhotosRoute(id: string | number): string {
  return `./${id}/${ROUTE.PHOTOS}`
}
