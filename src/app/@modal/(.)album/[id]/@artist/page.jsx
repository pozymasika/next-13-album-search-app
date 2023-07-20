const API_BASE_URL = process.env.API_BASE_URL;

async function getAlbumArtist(id) {
  const response = await fetch(`${API_BASE_URL}/api/album/${id}/artist`);
  return response.json();
}

export default async function ArtistPage({ params }) {
  const artist = await getAlbumArtist(params.id);
  return (
    <div className="flex items-center">
      <img
        src={artist.image.url}
        className="w-16 h-16 object-cover rounded-full shadow-lg"
        alt="Avatar"
      />
      <p className="font-bold text-xl mb-2 ml-2">{artist.name}</p>
    </div>
  );
}
