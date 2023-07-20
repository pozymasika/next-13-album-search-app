var SpotifyWebApi = require("spotify-web-api-node");
var request = require("request");

var client_id = process.env.SPOTIFY_CLIENT_ID;
var client_secret = process.env.SPOTIFY_CLIENT_SECRET;
var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      Buffer.from(client_id + ":" + client_secret).toString("base64"),
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};

async function getToken() {
  return new Promise((resolve, reject) => {
    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        return resolve(body.access_token);
      }
      reject(error);
    });
  });
}

var spotifyApi = new SpotifyWebApi();

var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getData() {
  const token = await getToken();
  spotifyApi.setAccessToken(token);
  console.log("getting playlist");
  const playlist = await spotifyApi.getPlaylist("37i9dQZEVXbLRQDuF5jeBp");
  // get all artists from playlist, their albums and the albums' tracks
  let tracks = [];
  let albums = [];
  let artists = [];

  const data = await Promise.all(
    playlist.body.tracks.items.map(async (item) => {
      await sleep(1000);
      const album = await spotifyApi.getAlbum(item.track.album.id);
      await sleep(1000);
      const tracksData = await spotifyApi.getAlbumTracks(item.track.album.id);
      await sleep(1000);
      const fullArtist = await spotifyApi.getArtist(item.track.artists[0].id);
      artists.push({
        // name, id, href, image
        name: fullArtist.body.name,
        id: fullArtist.body.id,
        href: fullArtist.body.href,
        // get largest image
        image: fullArtist.body.images.sort((a, b) => b.height - a.height)[0],
      });

      albums.push({
        // name, id, href, image
        artists: album.body.artists.map((artist) => artist.id),
        name: album.body.name,
        id: album.body.id,
        href: album.body.href,
        // get largest image
        image: album.body.images.sort((a, b) => b.height - a.height)[0],
      });

      tracks = tracks.concat(
        tracksData.body.items.map((track) => {
          // name, id, href, preview_url, image
          return {
            name: track.name,
            id: track.id,
            href: track.href,
            artists: track.artists.map((artist) => artist.id),
            album_id: item.track.album.id,
            preview_url: track.preview_url,
            // get largest image
            image: album.body.images.sort((a, b) => b.height - a.height)[0],
          };
        })
      );
    })
  );

  console.log("artists:\n", JSON.stringify(artists, null, 2));
  console.log("albums:\n", JSON.stringify(albums, null, 2));
  console.log("tracks:\n", JSON.stringify(tracks, null, 2));

  return data;
}

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
