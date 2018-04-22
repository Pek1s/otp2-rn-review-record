export function getAlbumIDs(reviews) {
  let idset = new Set();
  let albumids = "";
  reviews.forEach(x => idset.add(x.spotify_album_id));
  idset.forEach(id => (albumids += id + ","));
  return albumids.slice(0, albumids.length - 1);
}
